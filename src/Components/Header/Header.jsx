import { Flex, Box, Text } from "@chakra-ui/react";


function Header() {
  

 
 return (
    <header className='header-mobile'>
      <Flex
    as='nav'
    align='center'
    justify='space-between'
    wrap='wrap'
    padding='1.5rem'
    bg='black'
    color='white'
    borderRadius='2px'
  >
    <a href='#'  >
      <Text className='title' fontSize='2xl' fontWeight='bold'>
        Shoppi
      </Text>
    </a>
    <Box display={{ base: 'none', md: 'flex' }}
        width={{ base: '100%', md: 'auto' }}
        >
      <a href='#' >
        <Text m={2} fontSize='lg'>
          Inicio
        </Text>
      </a>
      <a href='#' >
        <Text m={2} fontSize='lg'>
          Productos
        </Text>
      </a>
      <a href='#' >
        <Text m={2} fontSize='lg'>
         Acerca de
        </Text>
      </a>
    </Box>
        
  </Flex>  
    </header>
  
 );
}

export default Header;