import { Box, Grid, Text } from '@chakra-ui/react';

function Board() {

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÖÄ';
  const getRandomLetter = () => letters[Math.floor(Math.random() * letters.length)];

  const grid = Array.from({ length: 4 }, () => Array.from({ length: 4 }, getRandomLetter));

  return (
    <Grid templateColumns="repeat(4, 1fr)">
      {grid.flat().map((letter, index) => (
        <Box
          key={index}
          border="1px solid black"
          padding="10px"
          margin='1px'
          textAlign="center"
          width={{ base: '70px', md: '100px', lg: '100px' }}
          height={{ base: '70px', md: '100px', lg: '100px' }}
        >
          <Text
          color='black'
          fontSize={{ base: '3xl', md: '5xl', lg: '5xl' }} 
          fontWeight='bold'
          userSelect='none'
          >
          {letter}
          </Text>
        </Box>
      ))}
    </Grid>
  );
}

export default Board