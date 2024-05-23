import { Container, Heading, Input, VStack,FormLabel,Box, Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
  return (
    <Container h = {"95vh"}>
        <VStack h = {'full'} justifyContent={"center"} spacing={'16'}>
            <Heading children = {"Welcome to CourseBundler"}/>
            <form style={{width:'100%'}}>
            <Box my= {'4'}> 
               <FormLabel htmlfor = "email" children={"Email Address"} />
                    <Input
                    required
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type={'email'}
                    placeholder='abc@gmail.com'
                    focusBorderColor='yellow.500'
                    />
               </Box>
               <Box my= {'4'}> 
               <FormLabel htmlfor = "password" children={"Password"} />
                    <Input
                    required
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={'password'}
                    placeholder='Enter your password'
                    focusBorderColor='yellow.500'
                    />
               </Box>
               <Box>
                <Link to = "/forgetpassword">
                    <Button fontSize={'sm'} variant={'link'}>Forget Password?</Button>
                </Link>
               </Box>
               <Button 
               my = "4"
               colorScheme='yellow'
               type="submit"
               >
                Login
               </Button>
               <Box my={'4'}>
                New User? <Link to = "/register">
                    <Button colorScheme='yellow' variant={'link'}>
                        Sign Up
                    </Button>{" "}here
                </Link>

               </Box>
               </form>
        </VStack>
    </Container>
  )
}

export default Login
