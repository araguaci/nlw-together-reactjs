import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import { useColorMode, IconButton } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

import logoImg from '../assets/images/logo.svg'
import logoWhiteImg from '../assets/images/logowhite.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss';

export function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('');
  const { colorMode, toggleColorMode } = useColorMode()
  
  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle()
    }
    
    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }
  
  return (
    <div id="page-auth">
      <aside>
        <strong>
          Crie salas de Q&amp;A ao vivo
        </strong>
        <p>
          Tire as dúvidas da sua audiência em tempo-real
        </p>
      </aside>

      <main>
        <div className="main-content">
          <img src={colorMode === 'light' ? logoImg : logoWhiteImg} alt="LetmeAsk"/>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
              className={colorMode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
      <div>
        <IconButton
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          isRound= {true}
          size='lg'
          alignSelf='flex-end'
          onClick={toggleColorMode}
          aria-label="Color Mode"          
          className="theme-change"
        />
      </div>
    </div>
  )
}