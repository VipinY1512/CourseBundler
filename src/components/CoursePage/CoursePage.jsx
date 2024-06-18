import { Box, Grid, Heading ,Text, VStack} from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from "../../assets/videos/intro.mp4";
import { Title } from 'chart.js';


const CoursePage = () => {
    const [lectureNumber,setLectureNumber]= useState(0);
    // const lectureTitle = "LectureTitle ";

    const lectures = [{
        _id: "firstlecture",
        title: 'sample',
        description: "sample video lectures to chekiing the functionality",
        video: {
            url: 'sadsdaadkfn',
        }
      },
        {
          _id: "firstlecture2",
          title: 'sample2',
          description: "sample video lectures to chekiing the functionality",
          video: {
              url: 'sadsdaadkfn',
          },
      },
      {
        _id: "firstlecture3",
        title: 'sample3',
        description: "sample video lectures to chekiing the functionality",
        video: {
            url: 'sadsdaadkfn',
        },
    }
    ]
  return (
   <Grid minH={"90vh"} templateColumns={["1fr",'3fr 1fr']}>
    <Box>
    <video 
      width={'100%'}
      autoPlay controls controlsList=' nodownload noremoteplayback' 
      disablePictureInPicture
      disableRemotePlayback
      src= {introVideo}> 
    </video>
    <Heading m = "4" children = {`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} />
    <Heading m = "4" children ={lectures[lectureNumber].description} />

    <Text  m = "4" 
    children = {"this is a course of youtube video "}  textTransform={'capitalize'}/>
    </Box>
    <VStack>
    {
    lectures.map((item,index) => (
      <button key = {item.id}
      onClick={() => setLectureNumber(index) }
      style={{
       width:"100%",
       padding:"1rem",
       textAlign:"center",
       margin:0,
       borderBottom:"1px solid rgba(0,0,0,0.2)"
       }}
      >
      <Text noOfLines={"1"}>
      #{index + 1} {item.title}
      </Text>
      </button>
    ))
    }
    </VStack>
   </Grid>
  )
}

export default CoursePage;
 