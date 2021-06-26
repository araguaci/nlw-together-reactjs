import { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import { useColorMode, IconButton } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import logoWhiteImg from '../assets/images/logowhite.svg'

import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('');
  const { colorMode, toggleColorMode } = useColorMode()
  
  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>
          Tire as dúvidas da sua audiência em tempo-real
        </p>
      </aside>

      <main>
        <div className="main-content">
          <img src={colorMode === 'light' ? logoImg : logoWhiteImg} alt="LetmeAsk"/>
          
          <div className="user-info">
            <img src={user?.avatar} alt="User Avatar"></img>
            <h3>{user?.name}</h3>
          </div>

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input 
              type="text" 
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
              className={colorMode}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
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
      </main>
    </div>
  )
}