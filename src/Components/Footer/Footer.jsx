import { Box, Text } from "@chakra-ui/react"
function Footer() {
  return (
    <footer  style={{ backgroundColor: 'black', color: 'white', padding: '10px 10px', marginTop: '20px'}} >
            <Text fontSize='2xl' fontWeight='bold' display= 'flex' alignItems='center' justifyContent='center'>Compañia</Text>

            <Box   marginBottom= '10px'
            display={{base:'block', md:'flex'}}
            justifyContent='space-around' >

                <a href="#" style={{ display:'flex', 
                marginBottom: '2px', 
                alignItems:'center', 
                justifyContent:'center'}}>Sobre nosotros</a>
                <a href="#" style={{ display:'flex', marginBottom:'2px', alignItems:'center', justifyContent:'center' }}>Contactanos</a>
                <a href="#" style={{ display:'flex', justifyContent:'center', marginBottom: "2px", alignItems:'center' }}>Políticas de privacidad</a>
            </Box>

            <Text style={{fontSize:'1.5rem', marginBottom:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>Conecta con nosotros</Text>

            <Box marginBottom='10px' display={{base:'block', md:'flex'}} justifyContent='space-between'>
            
                <Box  display= 'flex' alignItems='center' justifyContent='center'>
                    
                    <Text>123, Loren Ipsum, Ipsum</Text>
                </Box>
                <Box  display= 'flex' alignItems='center' justifyContent='center' >
                     
                    <Text>Info@demo.com</Text>
                </Box>
                <Box  display= 'flex' alignItems='center' justifyContent='center'>
                    <Text>123 456 7890</Text>
                </Box>
            </Box>
            <Text display= 'flex' alignItems='center' justifyContent='center'>Todos los derechos reservados. Shoppi &copy; 2023</Text>
        </footer>
  )
}

export default Footer