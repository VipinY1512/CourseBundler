import { Container, Heading, Input, VStack,FormLabel,Box, Button, Textarea} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Request = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [course,setCourse] = useState('');
  return (
    <Container h = {"92vh"}>
        <VStack h = {'full'} justifyContent={"center"} spacing={'16'}>
            <Heading children = {"Request for New Course"}/>
            <form style={{width:'100%'}}>

            <Box my= {'4'}> 
               <FormLabel htmlfor = "Name" children={"Name"} />
                    <Input
                    required
                    id='name'
                    value={name}
                    onChange={(e) => setEmail(e.target.value)}
                    type={'text'}
                    placeholder='abc@gmail.com'
                    focusBorderColor='yellow.500'
                    />
            </Box>

            <Box my= {'4'}> 
               <FormLabel htmlfor = "message" children={"Message Us "} />
                    <Input
                    required
                    id='email'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type={'email'}
                    placeholder='abc'
                    focusBorderColor='yellow.500'
                    />
            </Box>

            <Box my= {'4'}> 
               <FormLabel htmlfor = "course" children={"Course "} />
                    <Textarea
                    required
                    id='course'
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    type={'text'}
                    placeholder='Explain the course....'
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
                Explore more courses!  <Link to = "/courses">
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
export default Request
