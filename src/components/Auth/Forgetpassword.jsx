import { Container, Heading, VStack,Box,FormLabel,Input,Button  } from '@chakra-ui/react'
import React, { useState } from 'react'

const Forgetpassword = () => {
    const [email,setEmail] = useState('');
  return (
    <Container py={"16"} h = {"90vh"}>
      <form>
          <Heading children ="Forgot Passsword"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center','left']} />
      <VStack spacing={'8'}>
      <Box my= {'4'}> 
                    <Input
                    required
                    alignItems={"left"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type={'email'}
                    placeholder='abc@gmail.com'
                    focusBorderColor='yellow.500'
                    />
               </Box>

        <Button type="submit" w = "full" colorScheme="yellow">Send Reset Link</Button>
      </VStack>
      </form>
    </Container>
  )
}

export default Forgetpassword
