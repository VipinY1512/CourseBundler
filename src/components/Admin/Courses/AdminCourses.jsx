import { Grid,Box, TableContainer, TableCaption, Thead, Tr, HStack, Button,Td,Heading,Table,Th,Tbody, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import Sidebar from "../Sidebar.jsx"
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Title } from 'chart.js';
import CourseModal from './CourseModal.jsx';

const  AdminCourses = () => {
  const courses = [
    {
      _id:"vgdjgks",
      createdBy:"vipin yadav",
      title: "React Course",
      category:"Web Development",
      poster:{
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZG2iN38BmRKoMvpC7ZWC-zP87iARbjGSJi-1Cwbj9fJDDgVjP5an3t1Nvg&s",
      },
      views: 123,
      noOfVideos: 12,
    }
  ]
  const {isOpen,onClose,onOpen} = useDisclosure();

  const courseDetailsHandler=(userId)=>{
    onOpen(); 
  }

  const deleteUserHandler = (userID) => {
    console.log(userID);
  }

  const deleteLectureButtonHandler = (courseId,lectureId) =>{

  }

  const addLectureHandler = (e,title,courseId,description,video) =>{
    e.preventDefault();

  }

  
  return (
    <Grid 
    css = {{
        cursor: 'url(), default'
    }}
    minH={'100vh'}
    templateColumns={['1fr','5fr 1fr']}
    >
    <Box
    p={["0","8"]}
    overflowX={"auto"}
    >
      <Heading
       textTransform = {'uppercase'}
       children = "All users"
       my = "16"
       textAlign = {["center","left"]}
       />
       <TableContainer 
       w={["100vh","full"]}
       >
        <Table variant = {'simple'} size = "lg">
          <TableCaption>All available courses</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Poster</Th>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Creator</Th>
              <Th isNumeric>Views</Th>
              <Th isNumeric>Lectures</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              courses.map(item => (
                <Row courseDetailsHandler = {courseDetailsHandler} deleteUserHandler={deleteUserHandler} key={item._id} item = {item}  />
              ))
            }
          </Tbody>
        </Table>

       </TableContainer>
       <CourseModal isOpen = {isOpen} onClose = {onClose} deleteButtonHandler={deleteLectureButtonHandler}
       addLectureHandler = {addLectureHandler} id = {"iuosvbxnk"}
       courseTitle = {"React Course"}
       />
    </Box> 
    <Sidebar />
    </Grid>
  )
}

function Row({item,courseDetailsHandler ,deleteUserHandler}){
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td><Image src={item.poster.url} /></Td>
      <Td> #{item.title}</Td>
      <Td textTransform={"uppercase"}>#{item.category}</Td>
      <Td> #{item.createdBy}</Td>
      <Td isNumeric> #{item.views}</Td>
      <Td isNumeric>#{item.noOfVideos} </Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={() => courseDetailsHandler(item._id)} variant={"outline"} color={"purple.500"} >
            View Lectures
          </Button>
          <Button onClick={() => deleteUserHandler(item._id)} color={"purple.600"} >
           <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}
export default AdminCourses

