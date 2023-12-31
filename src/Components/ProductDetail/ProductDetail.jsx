import { CloseIcon } from '@chakra-ui/icons'
import { Box, Image, Badge, Flex, Button } from '@chakra-ui/react'

function ProductDetail({producto, close}) {
  return (
  <Flex  
  as='aside'
  display='flex'
  justifyContent='center'
  alignItems='center'
  position="fixed"
  top='0'
  zIndex='1'
  width='100%'
  height='100vh'>
    
    {/* caja que contiene las otras */}
    <Box 
    as="section"
    mt={{ base: "2", md: "10px" }}
    pt={{ base: "2", md: "10px" }}
    maxW={{ base: "100%", md: "md" }} 
    borderWidth='1px' 
    borderRadius='lg'
    boxShadow='dark-lg'
    overflow='hidden'
    w='100%'
    bg='whitesmoke' 

    >
       <Button 
      as='button' 
      borderRadius='lg'
      p='4'
      display='flex'
      justifyItems={{ base: 'center', md: 'end' }}
      position='fixed' 
      left='auto'
      top='auto'
      zIndex='1'
      boxShadow='lg'
      onClick={close}
      >  
      <CloseIcon/>
  </Button>
      {/* Contiene la imagen */}
      <Box  
      as='figure'
      p='6' 
      display='flex' 
      justifyContent='center'
      mb='2'>
      {<Image 
      boxSize={{ base: '200px', md: '320px' }}
      objectFit="cover"
      src={(`../../image/${producto.imagen}.jpg`)} 
      alt={producto.nombre}  />  }
      </Box>
      {/* Contiene el nombre */}
      <Box 
        as='span'
        p='6'
        fontWeight='bold' 
        fontSize="lg">
      {producto.nombre}
        <Box 
        display='flex' 
        alignItems='baseline' 
        justifyContent="center">
          
          {/*Badge: Resalta estado */}
        <Badge 
        fontWeight='bold' 
        fontSize="lg" 
        borderRadius='full' 
        px='2' 
        colorScheme='ghostwhite' 
        display="flex"  >
       $ {producto.precio}
       </Badge>

        </Box>
      </Box>

      <Box
      as='p'
      color='gray.500'
      fontWeight='semibold'
      letterSpacing='wide'
      fontSize='xs'
      textTransform='uppercase'
      ml='2'
      mb='2'
  >
    Descripcion: {producto.descripcion}
    
      </Box>

      <Box 
      as='span' 
      ml='2' 
      color='gray.600' 
      fontSize='lg'
      fontWeight='semibold'>
  SKU: {producto.SKU}
      </Box>

      <Box>

      </Box>

      <Box
        px="2"
        mt='1'
        fontWeight='semibold'
        fontSize='lg'
        as='span'
        lineHeight='tight'
        noOfLines={1} >
      Stock: {producto.cantidadDisponible}
      </Box>

    </Box>

</Flex>

  )
}

export default ProductDetail