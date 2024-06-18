import { Button, Grid, Heading, Modal,Text, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack,Box, VStack, Input, ModalFooter} from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Register';

const CourseModal = ({isOpen,onClose,id,deleteButtonHandler,CourseTitle,addLectureHandler,lectures = []}) => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [video,setVideo] = useState("");
    const [videoprev,setVideoprev] = useState("");

    
const changeVideoHandler = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onloadend = () =>{
        setVideoprev(reader.result);
        setVideo(file)
    }
  }
  const handleClose = () => {
    setTitle("");
    setDescription("");
    setVideo("");
    setVideoprev("");
    onClose();
  }
  return (
    <Modal isOpen = {isOpen} size={'full'} onClose = {handleClose}>
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    {CourseTitle}
                </ModalHeader>
                <ModalCloseButton onClick={onClose}/>
                <ModalBody p={"16"}>
                    <Grid templateColumns={["1fr","3fr 1fr"]}>
                        <Box px = {["0","16"]}>
                            <Box my="15">
                                <Heading children = {CourseTitle} />
                                <Heading  children = {`#${id}`} size = "sm" opacity={'0.4'} />
                            </Box>
                            <Heading children = {'lectures'} size={'lg'} />
                          <VideoCard 
                          title="React Intro"
                          description="This is the intro lecture where you will know the basics of react"
                          num={1}
                          lectureId={"2w5reqwj"}
                          courseId={id}
                          deleteButtonHandler={deleteButtonHandler}
                          />  
                        </Box>

                        <Box>
                            <form onSubmit={(e) => addLectureHandler(e,id,title,description,video)}>
                                <VStack spacing={"4"}>
                                    <Heading children = {"Add lecture"} size={"md"} textTransform={"uppercase"} />
                                    <Input placeholder='Title' focusBorderColor='purple.300'
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)} />

                                    <Input placeholder='Description' focusBorderColor='purple.300'
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)} />
                                    <Input 
                                    accept='video/mp4'
                                    required
                                    type={'file'}
                                    focusBorderColor='purple.300'
                                    css = {{
                                        '&::file-selector-button':{
                                            ...fileUploadCss,color:"purple"
                                        }
                                    }}
                                    onChange= {changeVideoHandler}
                                    />
                                    {
                                        videoprev && (
                                            <video 
                                            controlsList='nodownload'
                                            controls
                                            src={videoprev}
                                            >
                                            </video>
                                        )
                                    }
                                    <Button w={'full'} colorScheme='purple' type='submit' >Upload</Button>
                                </VStack>
                            </form>
                        </Box>
                    </Grid>
                </ModalBody>
                <ModalFooter>
                    <Button onClick= {handleClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </ModalOverlay>

    </Modal>
  )
}

export default CourseModal;

function VideoCard({title,description,num,lectureId,courseId,deleteButtonHandler}){
    return <Stack direction={['column','row']} my={"8"} borderRadius={"lg"} boxShadow={"0 0 10px rgba(107,78,193,0.5)"}
    justifyContent={["flex-start","space-between"]}
    p={['4','8']}>
        <Box>
            <Heading size={'sm'} children = {`#${num} ${title}`} />
            <Text children = {description} />
        </Box>
        <Button color={"purple.600"} onClick={() => deleteButtonHandler(courseId,lectureId) }>
            <RiDeleteBin7Fill/>
        </Button>
    </Stack>
}
