import { Container, Heading, Input, VStack,FormLabel,Box, Button, Avatar} from '@chakra-ui/react'
import { color } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const fileUploadCss = {
    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    height:"100%",
    border: "none",
    color: "#ECC94B",
    backgroundcolor: "white",
};

const fileUploadStyle = {
    "&::file-selector-button":fileUploadCss,
}

const Login = () => {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [imagePrev,setImagePrev] = useState('');
    const [image,setImage] = useState('');

    const changeImageHandler = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () =>{
            setImagePrev(reader.result);
            setImage(file)
        }
    }

  return (
    <Container h = {"95vh"}>
        <VStack h = {'full'} justifyContent={"center"} spacing={'16'}>
            <Heading textTransform={'uppercase'} children = {"Registration"}/>
            <form style={{width:'100%'}}>

            <Box my={"2"} display={'flex'} justifyContent={'center'}>
                <Avatar src = {imagePrev}/>
            </Box>

            <Box my= {'4'}> 
               <FormLabel htmlfor = "name" children={"Name"} />
                    <Input
                    required
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type={'text'}
                    placeholder='Enter Your Name'
                    focusBorderColor='yellow.500'
                    />
               </Box>

            <Box my= {'4'}> 
               <FormLabel htmlfor = "email" children={"Email Address"} />
                    <Input
                    required
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type={'email'}
                    placeholder='abc@gmail.com'
                    focusBorderColor='yellow.500'
                    />
               </Box>
               <Box my= {'4'}> 
               <FormLabel htmlfor = "password" children={"Password"} />
                    <Input
                    required
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={'password'}
                    placeholder='Enter your password'
                    focusBorderColor='yellow.500'
                    />
               </Box>
               <Box my= {'4'}> 
               <FormLabel htmlfor = "choose avatar" children={"Choose Avatar"} />
                    <Input
                    required
                    accept='image/*'
                    id='chooseavatar'
                    type='file'
                    focusBorderColor='yellow.500'
                    css = {fileUploadStyle}
                    onChange={changeImageHandler}
                    />
               </Box>
               <Button 
               my = "2"
               colorScheme='yellow'
               type="submit"
               >
                Sign Up
               </Button>
               <Box my={'4'}>
                Already User? {" "}
                <Link to = "/login">
                    <Button colorScheme='yellow' variant={'link'}>
                        Login 
                    </Button>{" "}here
                </Link>
               </Box>
               </form>
        </VStack>
    </Container>
  )
}

export default Login
