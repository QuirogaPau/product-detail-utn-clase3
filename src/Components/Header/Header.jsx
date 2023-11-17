import { Flex, Box, Text } from "@chakra-ui/react";

function Header() {
 return (
    <header>
      <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding="1.5rem"
    bg="black"
    color="white"
    borderRadius="2px"
  >
    <a href="#" >
      <Text fontSize="2xl" fontWeight="bold">
        Shoppi
      </Text>
    </a>
    <Box display={{ base: "none", md: "flex" }}>
      <a href="#" >
        <Text m={2} fontSize="lg">
          Inicio
        </Text>
      </a>
      <a href="#" >
        <Text m={2} fontSize="lg">
          Productos
        </Text>
      </a>
      <a href="#" >
        <Text m={2} fontSize="lg">
         Acerca de
        </Text>
      </a>
    </Box>
  </Flex>  
    </header>
  
 );
}

export default Header;