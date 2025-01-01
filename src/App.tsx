import {  Box, Flex, Text } from '@chakra-ui/react';
import './App.css';
import Board from './components/Board'

function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box as="header" bg="teal.500" color="white" p={4}>
        <Text
        fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        fontWeight="bold"
        textAlign="center"
        >
          Lost Words
        </Text>
      </Box>
      <Flex as="main" bg="white" flex="1" p={4} alignItems='center' justifyContent='center'>
        <Board/>
      </Flex>
      <Box as="footer" bg="teal.500" color="white" p={4}>
        <Text fontSize="md" textAlign='center'>Developed by Rasmus Makiniemi</Text>
      </Box>
    </Flex>
  );
}

export default App;