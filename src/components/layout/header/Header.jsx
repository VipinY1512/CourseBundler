import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import {RiLogoutBoxFill, RiLogoutBoxLine, RiMenu5Fill,RiDashboardFill} from "react-icons/ri"
import { Link } from 'react-router-dom';


const VerticalNav = ({url = "/", title = "Home",onClose}) =>(
  <Link onClick={onClose}  to={url}>
    <Button>{title}</Button>
  </Link>

)

const Header = () => {
  const {isOpen,onClose,onOpen} = useDisclosure();
  const isAuthenticated = false;
  const user = {
    role: "admin"
  }
  const logoutHandler = () =>{
    console.log("logout");
    onClose();
  }
  return  (<>
  <Button onClick = {onOpen}colorScheme={'yellow'}
  height={"12"}
  width={"12"}
  rounded={"full"}
  position={"fixed"}
  left={6}
  top={6}
   >
    <RiMenu5Fill/>
  </Button>

    <Drawer placement='left'isOpen = {isOpen} onClose={onClose} >
      <DrawerOverlay backdropBlur={('2px')}/>
      <DrawerContent>
        <DrawerHeader borderBottom={"1px"} >COURSE BUNDLER</DrawerHeader>
        <DrawerBody>
<VStack spacing={"4"} alignItems="flex-start" color={"yellow"}>
  <VerticalNav onClose = {onClose} url = "/" title="Home"/>
  <VerticalNav onClose = {onClose} url = "/courses" title="Browse All Courses"/>
  <VerticalNav onClose = {onClose} url = "/request" title="Request a Course"/>
  <VerticalNav onClose = {onClose} url = "/contact" title="Contact Us"/>
  <VerticalNav onClose = {onClose} url = "/about" title="About"/>

  <HStack position={'absolute'} 
  justifyContent={'space-evenly'}
  bottom = {'2rem'}
  width="80%"
  >
    {isAuthenticated ? (
    <>
    <VStack>
      <HStack>
        <Link onClick={onClose} to = "/profile">
          <Button variant={'ghost'} colorScheme='yellow'>Profile</Button>
        </Link>
        <RiLogoutBoxLine style = {{color: "black"}}/>
        <Button variant={'ghost'} onClick={logoutHandler}>LogOut</Button>
      </HStack>
      {user && user.role === 'admin' && (
        <Link onClick={onClose}  to = "/admin/dashboard">
          <Button colorScheme={'purple'} variant={'ghost'}>
            <RiDashboardFill style = {{margin: '4px'}}/>
            Dashboard
          </Button>
        </Link>
      )}
    </VStack>
    </>) :(
    <>
      <Link onClick={onClose}  to = "/login">
      <Button colorScheme={'yellow'}>Login</Button>
    </Link>
    <p style = {{color:"black"}}>OR</p>
    <Link onClick={onClose}  to = "/register">
      <Button colorScheme={'yellow'}>Sign Up</Button>
    </Link>
    </>
  )}
  </HStack>


</VStack>


        </DrawerBody>
        </DrawerContent>
      </Drawer>

  </>
  )
}

export default Header;
