import { Container, Heading, Input, VStack,FormLabel,Box, Button, Textarea} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
  return (
    <Container h = {"92vh"}>
        <VStack h = {'full'} justifyContent={"center"} spacing={'16'}>
            <Heading children = {"Contact Us"}/>
            <form style={{width:'100%'}}>

            <Box my= {'4'}> 
               <FormLabel htmlfor = "Name" children={"Name"} />
                    <Input
                    required
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type={'text'}
                    placeholder='abc'
                    focusBorderColor='yellow.500'
                    />
            </Box>

            <Box my= {'4'}> 
               <FormLabel htmlfor = "message" children={"Message Us "} />
                    <Input
                    required
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type={'email'}
                    placeholder='abc@gamil.com'
                    focusBorderColor='yellow.500'
                    />
            </Box>

            <Box my= {'4'}> 
               <FormLabel htmlfor = "email" children={"Email Address"} />
                    <Textarea
                    required
                    id='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type={'text'}
                    placeholder='Enter Course Details...'
                    focusBorderColor='yellow.500'
                    />
            </Box>
               <Button 
               my = "4"
               colorScheme='yellow'
               type="submit"
               >
                Send Mail
               </Button>
               <Box my={'4'}>
                Request for a course? <Link to = "/request">
                    <Button colorScheme='yellow' variant={'link'}>
                        click
                    </Button>{" "}here
                </Link>

               </Box>
               </form>
        </VStack>
    </Container>
  )
}
export default Contact
