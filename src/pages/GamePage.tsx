import { PageContext } from "@/App";
import Board from "@/components/Board"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useContext } from "react";

function GamePage() {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("PageContext is not provided");
  }

  const { setPage } = context

  return (
    <Flex direction="column" minHeight="100vh">
        {/* <Flex justifyContent='center' alignItems='center' as="header" bg="teal.500" color="white" p={4}>
          <Button left='3vw' position='absolute' onClick={() => setPage('home')}>
            Takaisin
          </Button>
          <Text
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            textAlign="center"
          >
            Lost Words
          </Text>
        </Flex> */}
        <Flex as="main" bg="white" flex="1" p={4} alignItems='center' justifyContent='center'>
          <Board/>
        </Flex>
      </Flex>
  )
}

export default GamePage