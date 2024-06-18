import { Grid,Box, TableContainer, TableCaption, Thead, Tr, HStack, Button,Td,Heading,Table,Th,Tbody } from '@chakra-ui/react'
import React from 'react';
import Sidebar from "../Sidebar.jsx"
import { RiDeleteBin7Fill } from 'react-icons/ri';

const  Users = () => {
  const users = [
    {
      _id:"vgdjgks",
      name: "vipin",
      role:"admin",
      subscription:{
        status:"active"
      },
      email: "vy76642@gmail.com"
    }
  ]
  const updateHandler =(userId)=>{
    console.log(userId);
  }

  const deleteUserHandler = (userID) => {
    console.log(userID);
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
    p={["0","16"]}
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
          <TableCaption>All available users in the database</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Subscription</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              users.map(item => (
                <Row updateHandler = {updateHandler} deleteUserHandler={deleteUserHandler} key={item._id} item = {item}  />
              ))
            }
          </Tbody>
        </Table>

       </TableContainer>
    </Box> 
    <Sidebar />
    </Grid>
  )
}


export default Users

function Row({item,updateHandler,deleteUserHandler}){
  return (
    <Tr>
      <Td>
        #{item._id}
      </Td>
      <Td>
        #{item.name}
      </Td>
      <Td>
        #{item.email}
      </Td>
      <Td>
        #{item.role}
      </Td>
      <Td>
        #{item.subscription.status === 'active' ? "Active" : "Not Active"}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={() => updateHandler(item._id)} variant={"outline"} color={"purple.500"} >
            Change Role
          </Button>
          <Button onClick={() => deleteUserHandler(item._id)} color={"purple.600"} >
           <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}