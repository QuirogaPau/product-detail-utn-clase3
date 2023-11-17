import { useState } from 'react'
import { Grid } from '@chakra-ui/react'
import  Card  from './Components/Card/Card.jsx';
import  Header  from './Components/Header/Header.jsx';
import ProductDetail from './Components/ProductDetail/ProductDetail.jsx';






const productos = [
    {
        nombre: 'Eclipse Sneakers',
        id: 1,
        descripcion: 'Descubre la elegancia y comodidad en cada paso con nuestras exclusivas zapatillas botitas negras. En Shoppi, fusionamos estilo y funcionalidad para ofrecerte una selección única de calzado que se adapta a tu estilo de vida activo y a la moda.',
        precio: 99.999,
        SKU: 'A12',
        cantidadDisponible: 4,
        imagen: 'imagen-uno' 
    },
    {
      nombre: 'Velocity Kicks',
      id: 2,
      descripcion: 'Descubre la elegancia y comodidad en cada paso con nuestras exclusivas zapatillas botitas negras. En Shoppi, fusionamos estilo y funcionalidad para ofrecerte una selección única de calzado que se adapta a tu estilo de vida activo y a la moda.',
      precio: 99.999,
      SKU: 'A33',
      cantidadDisponible: 4,
      imagen: 'imagen-dos' 
  },
  {
    nombre: 'Skyline Soles',
    id: 3,
    descripcion: 'Descubre la elegancia y comodidad en cada paso con nuestras exclusivas zapatillas botitas negras. En Shoppi, fusionamos estilo y funcionalidad para ofrecerte una selección única de calzado que se adapta a tu estilo de vida activo y a la moda.',
    precio: 99.999,
    SKU: 'B40',
    cantidadDisponible: 4,
    imagen: 'imagen-tres' 
},
{
  nombre: 'UrbanStride Footwear',
  id: 4,
  descripcion: 'Descubre la elegancia y comodidad en cada paso con nuestras exclusivas zapatillas botitas negras. En Shoppi, fusionamos estilo y funcionalidad para ofrecerte una selección única de calzado que se adapta a tu estilo de vida activo y a la moda.',
  precio: 99.999,
  SKU: 'B40',
  cantidadDisponible: 4,
  imagen: 'imagen-cuatros' 
},
{
  nombre: 'Pulse Peds',
  id: 5,
  descripcion: 'Descubre la elegancia y comodidad en cada paso con nuestras exclusivas zapatillas botitas negras. En Shoppi, fusionamos estilo y funcionalidad para ofrecerte una selección única de calzado que se adapta a tu estilo de vida activo y a la moda.',
  precio: 99.999,
  SKU: 'B40',
  cantidadDisponible: 4,
  imagen: 'imagen-cinco' 
},
{
  nombre: 'NovaStep Shoes',
  id: 6,
  descripcion: 'Descubre la elegancia y comodidad en cada paso con nuestras exclusivas zapatillas botitas negras. En Shoppi, fusionamos estilo y funcionalidad para ofrecerte una selección única de calzado que se adapta a tu estilo de vida activo y a la moda.',
  precio: 99.999,
  SKU: 'B40',
  cantidadDisponible: 4,
  imagen: 'imagen-seis' 
}
];

function App() {
  const [selectProductos, setSelectProducto] = useState(null);


  const manejoDelClick = (producto) => {
    console.log("Click")
    setSelectProducto(producto);
  }

  const close = () => {
    setSelectProducto(null);
  }
  return (
    <div>

      <Header/>
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap='1'>
    {productos.map((producto) => (  
    <div  key={producto.id} onClick={() => manejoDelClick(producto)}>
        <Card 
         id={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            cantidadDisponible={producto.cantidadDisponible}
            imagen={producto.imagen}
            SKU={producto.SKU}
            />
      </div> 
      
    ))} 
    </Grid>
    { selectProductos && (
        <ProductDetail producto={selectProductos} close={close}/>
    )
      
    }
          
    </div>
</div>
  );
}

export default App