import { useColorMode, IconButton } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ButtonHTMLAttributes } from 'react'

import '../styles/room.scss';

type FooterProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  colorMode: string
};

export function Footer({ colorMode = 'light', ...props }: FooterProps) {
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