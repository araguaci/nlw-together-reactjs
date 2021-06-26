import { useColorMode, IconButton } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

import '../styles/room.scss';

export function Footer( ) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound= {true}
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
        aria-label="Color Mode"          
        className="theme-change"
      />
  )
}