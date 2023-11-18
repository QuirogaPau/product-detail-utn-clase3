import { Box, Badge, Image } from '@chakra-ui/react'

function Card(producto) {
  return (
    
    <main className='container-section'>
    <Box 
    as="section"
    mt="10px" 
    pt="10px" 
    maxW='md' 
    borderWidth='1px' 
    borderRadius='lg' 
    overflow='hidden'
    cursor="pointer"
    >

      <Box 
      display='flex' 
      alignItems='center' 
      justifyContent="center">
      {<Image 
      boxSize={{ base: '200px', md: '320px' }}
      objectFit="cover"
      src={(`../../image/${producto.imagen}.jpg`)} 
      alt={producto.nombre}  />  }
      </Box>
    
      <Box 
        p='6'
       fontWeight='bold' 
       fontSize="lg">
      {producto.nombre}
        <Box 
        display='flex' 
        alignItems='baseline' 
        justifyContent="center">
          
          {/*Badge: Resalta precio */}
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
    </Box>

</main>

   
    
    

  )
}

export default Card;