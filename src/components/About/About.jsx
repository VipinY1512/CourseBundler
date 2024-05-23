import { Avatar, Button, Container, Heading, Stack, VStack,Text,Box, HStack } from '@chakra-ui/react'
import React from 'react'
import {Link } from 'react-router-dom'
import introVideo from "../../assets/videos/intro.mp4";
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndConditions from '../../assets/docs/termsAndConditions'

const Founder = () =>(
    <Stack 
    direction={["column","row"]}
    spacing={["4","16"]}
    padding={'8'}
    >
        <VStack>
        <Avatar boxSize={["40",'48']} />
        <Text children = "Co-Founder" opacity = {0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center','flex-start']} >
            <Heading children = "Vipin Yadav" size = {['md','xl']} />
            <Text 
            textAlign = {["center","left"]}
            children = "Hi, My name is Vipin Yadav I am a fullSytack delveloper" />
        </VStack>
    </Stack>
)

const VideoPlayer = () =>(
    <Box>
    <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' 
      src= {introVideo}> 
    </video>

    </Box>
)

const TandC = ({termsandCondition}) => (
    <Box>
    <Heading size= {'md'} children = {"Term and Condition"} textAlign={["center",'left']} my={'4'} />
    <Box h = "sm" p = "4" overflowY={'scroll'} >
        <Text 
        textAlign={["center","left"]}
        letterSpacing={'widest'}
        fontFamily={'heading'}
        >{termsandCondition}</Text>
    </Box>
    <Heading  my = "4" size={'xs'}
    children = {"Refund is only applicable with 7 days of Cancellation"} />
    </Box>   

)

const About = () => {
  return (
        <Container maxW= {'container.lg'} padding={"16"} boxShadow={'lg'}>
            <Heading children = "About Us" textAlign = {["center","left"]} />
            <Founder/>
            <Stack m = "8" direction={['column','row']} alignItems = "center">
                <Text fontFamily = {'cursive'} m = "8" textAlign = {["center","left"]}>
                    We are a video straming platefomr with some primium corses available 
                    only for the premium users.
                </Text>
                <Link  to = "/subscribe">
                    <Button variant={"ghost"} colorScheme='yellow' >CheckOut our Plan! </Button>
                </Link>
            </Stack>
            <VideoPlayer />
            <TandC termsandCondition = {termsAndConditions} />
            <HStack>
                <RiSecurePaymentFill/>
                <Heading size = {"xs"}fontFamily={"sans-serif"} textTransform={"uppercase"} children = {"Payment is Secured by Razorpay"}/>
            </HStack>

        </Container>
  )
}

export default About
