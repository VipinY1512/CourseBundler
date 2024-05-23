import React from 'react'
import {Box,HStack,Heading,Stack, VStack} from "@chakra-ui/react"
import { color } from 'framer-motion'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from "react-icons/ti"
import {DiGithub} from "react-icons/di"

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width={'full'}>
                <Heading children={"All Rights Reserved"} color={"white"} />
                <Heading 
                fontFamily={'body'}
                size={'sm'}
                children = {"@Vipin Creation"}
                color={"yellow.400"}
                />

            </VStack>
            <HStack spacing={["2","10"]} justifyContent={"center"}
            color={'white'}
            fontSize={'50px'}
            >
                <a href='https://www.youtube.com/channel/UCLcqVQbzEiPvauNulq99OQw' target='_blank'>
                    <TiSocialYoutubeCircular/>
                </a>
                <a href='instagram.com' target='_blank'>
                    <TiSocialInstagramCircular/>
                </a>
                <a href='' target='_blank'>
                    <DiGithub/>
                </a>

            </HStack>

        </Stack>
    </Box>
  )
}

export default Footer
