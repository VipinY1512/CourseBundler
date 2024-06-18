import { Container, VStack,Heading,Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [password,setPassword] = useState("");
    const [newPassword,setNewPassword] =useState("");
  return (
    <Container py={"16"} minH={'90vh'}>
        <form>
            <Heading textTransform = {'uppercase'}
            children = {"change password"}
            my = "16"
            textAlign = {['center','left']} />

            <VStack>
                <Input required
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                placeholder =  "Enter Old Password"
                type='password'
                focusBorderColor='yellow.500'
                 />
                  <Input required
                value = {newPassword}
                onChange = {(e) => setNewPassword(e.target.value)}
                placeholder =  "Enter New Password"
                type='password'
                focusBorderColor='yellow.500'
                 />

                <Button w = "full" colorScheme='yellow' type='submit' >
                    Change Password
                </Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ChangePassword
