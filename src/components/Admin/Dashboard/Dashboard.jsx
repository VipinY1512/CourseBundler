import { Grid,Box,Text, Heading, Stack, HStack, Center, Progress } from '@chakra-ui/react'
import React from 'react';
import Sidebar from "../Sidebar.jsx"
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart.jsx';

const Databox = ({title,qty,qtyPrecentage,profit}) =>{
     return (
        <Box w={["full","20%"]} 
        boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        p={"8"}
        borderRadius={'lg'}
        >
            <Text>
                {title}
            </Text>
            <HStack>
                <Text fontSize={'2xl'} fontWeight={'bold'} children = {qty} />
                <HStack>
                <Text children = {`${qtyPrecentage}`} />
                {profit ? <RiArrowUpLine color='green' /> : <RiArrowDownLine color='red' /> }
            </HStack>
            </HStack>
            <Text opacity={'0.6'} children = {'since last month'} />
        </Box>
     )
}

const Bar = ({title,value,profit}) => (
    <Box py={"4"} px={["0","20"]} >
        <Heading size={"sm"} children = {title} mb = "2" />
        <HStack w={"full"} alignItems={"center"} >
            <Text children = {profit ? '0%' :`${value}%` } />
            <Progress w={"full"}  value={profit?value:0} colorScheme='purple' />
            <Text children = {`${value > 100 ? value : 100}%`} />
        </HStack>

    </Box> 
)

const Dashboard = () => {
  return (
    <Grid 
    css = {{
        cursor: 'url(), default'
    }}
    minH={'100vh'}
    templateColumns={['1fr','5fr 1fr']}
    >
    <Box 
    boxSizing='border-box'
    py={"16"}
    px={["4","0"]}
    >
    <Text textAlign = "center" opacity = {"0.5"} 
        children = {`last change was on ${String(new Date()).split('G')[0]}`}></Text>

     
    <Heading  children = {"Dashboard"} ml={["0","16"]} mb={"16"} 
    textAlign={['center','left']} />

    <Stack direction={['column','row']} 
    minH={"24"}
    justifyContent={'space-evenly'}>

    <Databox title = "views" qty = {123} qtyPrecentage = {30} profit = {true}  />
    <Databox title = "Users" qty = {127} qtyPrecentage = {60} profit = {true}  />
    <Databox title = "Subscription" qty = {70} qtyPrecentage = {10} profit = {false}  />

    </Stack>

    <Box
    m={["0","16"]}
    borderRadius={'lg'}
    padding={["0","16"]}
    mt={["4","16"]}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
        <Heading 
        textAlign={["center",'left']}
        size={"md"}
        children = {"Views Graph"}
        pt={["8","0"]} 
        ml={["0","16"]}/>
{/* Line graph here */}
<LineChart />
    </Box>
    <Grid templateColumns={['1fr','2fr 1fr']} >
        <Box
        p = "4"
        >
            <Heading textAlign={["center","left"]}
            size={"md"}
            children = {"progress bar" }
            textTransform={'capitalize'}
            my={"8"}
            ml={["0","16"]} />

            <Box>
                <Bar profit={true} title = "Views" value = {30} />
                <Bar profit={true} title = "Users" value = {70} />
                <Bar profit = {false} title = "Subscribers" value = {20} />
            </Box>

        </Box>
        <Box p={["0","16"]}
        boxSizing='border-box'
        py={"4"}

        >
            <Heading textAlign={"center"} size={"md"} mb={"4"} children = {"Users"} />
            {/* Doughnut graph */}
            <DoughnutChart />
        </Box>
    </Grid>
    </Box>
    <Sidebar />
    </Grid>
  )
}

export default Dashboard;
