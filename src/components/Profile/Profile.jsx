import { Avatar, Button, Container,Heading, VStack,Stack, HStack ,Text,Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, useDisclosure,Input, ModalHeader} from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileUploadCss } from '../Auth/Register'

const Profile = () => {
    const removeFromPlaylistHandler = (id) => {
        console.log(id);
    }

    const user = {
        name: "Vipin ",
        email: "vy732383@gmail.com",
        createdAt: String(new Date().toISOString()),
        role: "user",
        subscription:{
            status:"active",
        },
        playlist:[
            {
              course: "sdscs",
              poster: "adsjgdkj",
            }
        ]
    }
    const {isOpen,onClose,onOpen} = useDisclosure();

    const changeImageSubmitHandler = (e,image) => {
        e.preventDefault();

    }
    
  return (
    <Container minH={"95vh"} maxW={"container.lg"} py={"8"} >
        <Heading children = "profile" textTransform={'uppercase'} m={"8"} />
            <Stack
             justifyContent = {"flex-start"}
             direction= {['column','row']}
             alignItems = {'center'}
             spacing = {['8','16']}
             padding = "8"
             >
            <VStack>
                <Avatar boxSize={"48"} />
                <Button onClick={onOpen} colorScheme='yellow' variant={"ghost"} >
                    Change Photo
                </Button>
            </VStack>

            <VStack spacing={'4'} alignItems={['center','flex-start']}>
                <HStack>
                    <Text children = "Name" fontWeight = {'bold'} />
                    <Text children = {user.name} />
                </HStack>
                <HStack>
                    <Text children = "Email" fontWeight = {'bold'} />
                    <Text children = {user.email} />
                </HStack>
                <HStack>
                    <Text children = "CreratedAt" fontWeight = {'bold'} />
                    <Text children = {user.createdAt.split('T')[0]} />
                </HStack>

                {
                    user.role !== "admin" && (
                    <HStack>
                        <Text children= "Subscription"  fontWeight={'bold'}/>
                        {
                            user.subscription.status === "active" ? (
                                <Button color={'yellow.500'} variant={"unstyled"} >Cancel Subscription</Button>
                            ) : (
                                <Link to={"/subscribe"}>
                                    <Button colorScheme='yellow' >Subscribe</Button>
                                </Link>
                            )
                        }
                    </HStack>)
                }

            <Stack
            direction= {['column','row']}
            alignItems = {'center'} 
            >
                <Link to={"/updateprofile"}>
                <Button>Update Profile</Button>
                </Link>
                
                <Link to={"/changepassword"}>
                <Button>Change Password</Button>
                </Link>

            </Stack>
            </VStack>

            </Stack>

            <Heading children = "Playlist" size={'md'} my={"8"} />
            {
                user.playlist.length > 0 && (
                    <Stack 
                    direction={['column','row']}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                    p = "4"
                    >
                        {
                            user.playlist.map((element,index) => (
                                <VStack w={"48"} m = "2" key={element.course}>
                                    <Image 
                                    boxSize = {'full'}
                                    objectFit = {'contain'}
                                    src = {element.poster}
                                    />

                                <HStack>
                                    <Link to={`/courses/${element.course}`}>
                                        <Button variant={'ghost'} colorScheme='yellow'>Watch Now</Button> 
                                    </Link>
                                    <Button onClick={() => removeFromPlaylistHandler(element.course)} >
                                        <RiDeleteBin7Fill />
                                    </Button>
                                </HStack>

                                </VStack>
                            ))
                        }

                    </Stack>
                )
            }
            <ChangePhotoBox isOpen={isOpen} onClose={onClose} changeImageSubmitHandler = {changeImageSubmitHandler} />
    </Container>
  )
}

export default Profile

function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){
    const [image,setImage] = useState("");
    const [imagePrev,setImagePrev] = useState("");

    const changeImage = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () =>{
            setImagePrev(reader.result);
            setImage(file)
        }
    }
    const closeHandler = () =>{
        onClose();
        setImagePrev("");
        imagePrev("");
    }
    return(
        <Modal isOpen ={isOpen} onClose={onClose}>
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton />
            <ModalBody>
                <Container>
                    <form onSubmit={(e) =>changeImageSubmitHandler(e,image) }>
                        <VStack spacing={'8'}>
                            {
                                imagePrev && <Avatar src={imagePrev} boxSize={'48'} />
                            }
                            <Input type = {"file"} 
                            css = {{'&::file-selector-button': fileUploadCss}}
                            onChange = {changeImage}
                            />
                            <Button type='submit' colorScheme='yellow' w={'full'} >Change</Button>
                        </VStack>
                    </form>
                </Container>
            </ModalBody>
            <ModalFooter>
                <Button onClick = {closeHandler}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}