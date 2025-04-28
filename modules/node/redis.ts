import { RedisRoom } from '@/types/redis'
import Redis from 'ioredis'
import { redisRoomSchema } from '../shared/schema'

// Redis 연결 설정 (환경 변수에서 REDIS_URL 가져오기)
const redis = new Redis(process.env.REDIS_URL, {
  password: process.env.REDIS_PASSWORD,  // 비밀번호가 별도로 필요한 경우
})

export default redis

// Data manipulations

export const setRoom = async (room: RedisRoom) => {
  await redis.set(`liarGame:room:${room.id}`, JSON.stringify(room))
}

export const deleteRoom = async (roomId: string) => {
  await redis.del(`liarGame:room:${roomId}`)
}

export const getRoom = async (roomId: string): Promise<RedisRoom | null> => {
  const roomData = await redis.get(`liarGame:room:${roomId}`)

  if (!roomData) {
    return null
  }

  try {
    const jsonParsed = JSON.parse(roomData)
    redisRoomSchema.parse(jsonParsed)

    return jsonParsed
  } catch (err) {
    console.error(err)

    await deleteRoom(roomId)
    return null
  }
}