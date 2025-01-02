import { PageContext } from '@/App';
import { Box, Grid, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

function Board() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("PageContext is not provided");
  }

  const { grid } = context

  const [selected, setSelected] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  const handleSelection = (index: number) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [index]: true,
    }));
  };

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <Grid
    templateColumns="repeat(4, 1fr)"
    onMouseDown={() => setIsDragging(true)}
    onMouseUp={() => setIsDragging(false)}
    onTouchStart={() => setIsDragging(true)}
    onTouchEnd={() => setIsDragging(false)}>
      {grid.flat().map((letter, index) => (
        <Box
        onMouseDown={() => handleSelection(index)}
        onMouseEnter={() => isDragging && handleSelection(index)}
        onTouchStart={() => handleSelection(index)}
        onTouchMove={() => isDragging && handleSelection(index)}
        // onClick={() => {setSelected({...selected, [index]: true}); console.log(selected)}}
        bg={index in selected ? 'white' : 'red'}
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