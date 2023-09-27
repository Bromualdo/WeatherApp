import React, { useState } from 'react'
import { Card,  CardBody, FormControl,FormErrorMessage,FormHelperText,Button,Image,Text, Flex,Input, Box, FormLabel } from '@chakra-ui/react'
import { ImgDisplay } from './ImgDisplay'
  

export const Cardini = () => {

  const [ciudad,setCiudad] =useState('')
  const [dataClima,setDataClima]=useState(null)  
  const [error,setError]=useState(null)
  
  const fetchClima=async() =>{
    try {
  
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=72fddb73c874c0e36d3c85e09d9a51f8&units=metric`)
        if(response.ok){
        const data = await response.json()
        setDataClima(data)
        setError(null)
        }       
        else {
          setError('Nombre de ciudad incorrecta') 
        }
    } catch (error) {
      console.log(error)
    }
   ;
  }


  const handleCambioCiudad = (e)=>{
      setCiudad(e.target.value)
      
  }
  
  const handleSubmit =(e)=>{
    e.preventDefault()

   
      if(ciudad.length>0) fetchClima()   
   }
 



  return (
    <Flex alignItems="center" justify="center" minHeight="100vh" flexDirection="column" id='fondo'>
    
     <Card maxW='40vw' minW="200px" minH="300px" position="relative" display="flex" justifyContent="center" borderRadius="md" boxShadow="2xl" >
     <Text  position="absolute" top="-22px" fontFamily="Dela Gothic One, cursive;" fontSize="25px" className='textaround' color="rgba(254,142,108)">Adri Weather</Text>
     <CardBody display="flex" alignContent="center" alignItems="center" justifyContent="center" flexDirection="column">        
        { 
          dataClima && ( <Flex justifyContent="center"> <Text position="absolute" top="22px" className='textaround' fontFamily="Dela Gothic One, cursive" fontSize="30px">{parseInt(dataClima.main.temp)}°C</Text>
                        <Text position="absolute" bottom="185px" className='textaround' fontFamily="Dela Gothic One, cursive" fontSize="30px">{dataClima.weather[0].main}</Text>
                        </Flex>)
        }  
      <ImgDisplay clima={dataClima}/>      
      <Box w="100%" marginTop="15px" display="flex" flexDirection="column">        
             
        <form onSubmit={handleSubmit} id='lolo'>
        <FormControl display="flex" gap="15px" flexDirection="column"  >
           
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">          
        <Input type='text'  w="60%" value={ciudad} onChange={handleCambioCiudad} _focus={{borderColor:"rgba(254,142,108)",boxShadow:"0.5px 0.5px Orange"  }} boxShadow="none" _active={{border:'none'}}/>    
        { error == null? <FormHelperText alignSelf="flex-start" marginLeft="20%">Ingrese Ciudad</FormHelperText>:
          <Text  color="red">{error}</Text>}
        </Box>       
        </FormControl>
      
        <FormLabel display="flex" justifyContent="flex-end">          
        <Button type='submit' h="5vh"  backgroundColor="rgba(254,142,108)"  color="white" _hover={{backgroundColor:"orange.400"}} borderRadius="full">
            Go
        </Button>       
        
        </FormLabel>
     
        
        </form>
       
        </Box>
        </CardBody>
    
     
     </Card>
  
  </Flex>
  )
}
