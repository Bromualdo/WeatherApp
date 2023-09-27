import React from 'react'
import {Flex, Input,Button} from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex height="100%" width="100%" justifyContent="center" alignItems="center"  bgColor="" gap="2px" minHeight="100vh" >
        <Input w="40%" bgColor="white" borderRadius="5px 0px 0px 5px"/>
        <Button bgColor="white" borderRadius="0px 10px 10px 0px">🔍</Button>
    </Flex>
  )
}
