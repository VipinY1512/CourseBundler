import { Box, Container, Heading, VStack,Text ,Button } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container h = "90vh" p = "16">
        <Heading  children = "Welcome" my = "8" textAlign={'center'} />
        <VStack boxShadow={'lg'} alignItems={'stretch'} 
        spacing={'0'}>
            <Box bg={'yellow.400'} p = "4" css = {{borderRadius: "8px 8px 0 0" }} >
                <Text children = {'pro Pack - Rs229.00'} />
            </Box>
            <Box p = {"4"} >
                <VStack textAlign={'center'} px = "8" mt = {"4"}  spacing={"8"}>
                    <Text 
                    color={'black'}
                    children = {"Join pro pack and get access to all content "}
                    />
                    <Heading size={'md'} children = {'Rs299.00 only '} />
                </VStack>
                <Button my = {"8"} w = "full" colorScheme = {'yellow'}>Buy Now</Button>
             </Box>
             <Box bg = "blackAlpha.600" 
             p = "4"
             css = {{borderRadius: "0 0 8px 8px"}}>
               <Heading size = "sm" textTransform={"uppercase"} color={"white"} children = {"100% refund at Cancellation"} />
                <Text size={'xs'} color={"white "} children = {"Terms and condition Apply"} />
             </Box>
        </VStack>
    </Container>
  )
}

export default Subscribe;
