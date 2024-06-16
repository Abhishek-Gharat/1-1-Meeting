import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
import styles from '@/styles/home.module.css'
import { useState } from 'react';
import ShinyButton from './ShynyButton';
export default function Home() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
  return (
    <div className={styles.homeContainer }>
        <h1>1:1 MEET</h1>
        <div className={styles.enterRoom}>
          <input placeholder='Enter Room ID' value={roomId} onChange={(e) => setRoomId(e?.target?.value)}/>
          <ShinyButton onClick={joinRoom}>Join Room</ShinyButton>
          </div>
        <span  className={styles.separatorText} > OR</span>
        <div className="flex flex-col items-center gap-20px"> {/* Add a container with gap for the buttons */}

        <ShinyButton onClick={createAndJoin}>Create a new room</ShinyButton>
    </div>
    </div>
  )
}
