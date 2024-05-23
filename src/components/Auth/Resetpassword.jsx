import { Container, Heading, VStack,Box,FormLabel,Input,Button  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Resetpassword = () => {
    const [password,setPassword] = useState('');
    const params = useParams();
    
  return (
    <Container py={"16"} h = {"90vh"}>
      <form>
          <Heading children ="Reset Passsword"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['left','center']} />
      <VStack spacing={'8'}>
      <Box my= {'4'}> 
                    <Input
                    required
                    w={"100%"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={'password'}
                    placeholder='New password'
                    focusBorderColor='yellow.500'
                    />
               </Box>

        <Button type="submit" w = "full" colorScheme="yellow">Reset Password</Button>
      </VStack>
      </form>
    </Container>
  )
}

export default Resetpassword

