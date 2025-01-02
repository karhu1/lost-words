import { PageContext } from "@/App";
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useContext } from "react";

// Create new grid, and update state accordingly
function gridHelper() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÖÄ';
  const getRandomLetter = (): string => letters[Math.floor(Math.random() * letters.length)];

  const grid: string[][] = Array.from({ length: 4 }, () => Array.from({ length: 4 }, getRandomLetter));
  return grid
}

function HomePage() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("PageContext is not provided");
  }

  const { setPage, setGrid } = context

  return (
    <Flex
    bg='white'
    minHeight='100vh'
    direction='column'>
      <Box height='10vh'></Box>
      <Text fontWeight='bold' textAlign='center' color='black' p='4' fontSize='5xl'>LOST WORDS</Text>
      <Flex
      flex='1'
      flexDirection='column'
      alignItems='center'>
        {['Yksinpeli', 'Ennätykset', 'Asetukset'].map((label, index) => (
          <Button
            key={label}
            onClick={() => {
              setPage(['game', 'leaderboard', 'settings'][index]);
              setGrid(gridHelper())
            }}
            size={{ base: 'xl', md: '2xl', lg: '2xl' }}
            variant='surface'
            colorPalette='gray'
            m='0.5em'
          >
            {label}
          </Button>
        ))}
      </Flex>
      <Box as='footer' color='black'>
        <Text m='4' textAlign='center'>Rasmus Makiniemi</Text>
      </Box>
    </Flex>
  )
}

export default HomePage