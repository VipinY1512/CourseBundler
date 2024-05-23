import React, { useState } from 'react'
import {Button, Container,HStack,Heading,Input,Stack,Text, VStack,Image} from "@chakra-ui/react";
import { Link } from 'react-router-dom';


const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creator
    ,description,lectureCount}) =>{
    return(
        <VStack className='course' alignItems={['center','flex-start']}>
            <Image src = {imageSrc} boxSize="60" objectFit = "contain" />
            <Heading textAlign={["center","left"]} maxW ="200px" size="sm"
            fontFamily={"sans-serif"}
            noOfLines={3}
            children={title}
            />
            <Text noOfLines={3}>{description}</Text>
            <HStack>
            <Text fontWeight={'bold'} textTransform={'uppercase'}>{"Creator"}</Text>

            <Text fontFamily={'body'} textTransform={'uppercase'}>{creator}</Text>

            </HStack>
            <Heading
            textAlign={'center'}
            size={'xs'}
            children = {`Lectures - ${lectureCount}`}
            textTransform={'uppercase'}
            />
             <Heading
            size={'xs'}
            children = {`Views - ${views}`}
            textTransform={'uppercase'}
            />

            <Stack direction={['column','row']} alignItems={"center"}>
                <Link to = {`/course/${id}`}>
                    <Button colorScheme={'yellow'}>Watch Now</Button>
                </Link>
                <Button
                variant={'ghost'}
                colorScheme='yellow'
                onClick={()=>addToPlaylistHandler(id)} 
                >
                    Add to playlist
                </Button>

            </Stack>
        </VStack>
    )
}

const Courses = () => {
    const [keyword,setKeyword] = useState('');
    const [category,setCategory] = useState('');

    const addToPlaylistHandler = () =>{
        console.log("added to playlist");
    }

    const categories = ["Web Development",
        "App Development",
        "Data Science","Data Analytics","Machine Learning ","Artificial Intelligence",
    ]
  return (
    <div>
        <Container minH={"95vh"} maxW={"container.lg"} paddingY={'8'}>
            <Heading children = "All Courses" m = {'8'}/>
            <Input value = {keyword} 
            onChange = {(e) => setKeyword(e.target.value)}
            placeholder = {"Search a course..."}
            type = {"text"}
            focusBorderColor = "yellow.500" /> 
            <HStack overflowX={"auto"} paddingY = "8" css = {{"&::-webkit-scrollbar":{
                display: "none"
            }}}>
                {categories.map((item,index) => (
                    <Button key = {index} onClick={() => setCategory(item)} minW = {'60'}>
                        <Text children = {item}/>
                    </Button>
                ))}
            </HStack>

            <Stack
            direction={["column","row"]}
            flexWrap={"wrap"}
            justifyContent={["flex-start","space-evenly"]}
            alignItems={["center","flex-start"]}
            >
                <Course 
                title = {"Sample"}
                description= {"sampel"}
                views = {23}
                ImageSrc = {"Sample"}
                id = {1}
                lectureCount = {2}
                creator = {"sample boy"}
                addToPlaylistHandler={addToPlaylistHandler}



               />

            </Stack>
        </Container>
      
    </div>
  ) 
}

export default Courses
