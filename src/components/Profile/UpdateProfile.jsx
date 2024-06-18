import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

  return (
    <Container py={"16"} minH={'90vh'}>
    <form>
        <Heading textTransform = {'uppercase'}
        children = {"Update Profile"}
        my = "16"
        textAlign = {['center','left']} />

        <VStack>
           <Input 
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            placeholder =  "Enter your name "
            type='text'
            focusBorderColor='yellow.500'
             />
           <Input 
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            placeholder =  "Enter Email Address"
            type='email'
            focusBorderColor='yellow.500'
             />

            <Button w = "full" colorScheme='yellow' type='submit' >
                Update
            </Button>
        </VStack>
    </form>
</Container>
  )
}

export default UpdateProfile
