import { Box, Grid, Heading ,Text} from '@chakra-ui/react'
import React from 'react'
import introVideo from "../../assets/videos/intro.mp4";
import { Title } from 'chart.js';


const CoursePage = () => {
    const lectureNumber = 0;
    // const lectureTitle = "LectureTitle ";

    const lectures = [{
        _id: "sdsdnds",
        title: 'sample',
        description: "sample video lectures to chekiing the functionality",
        video: {
            url: 'sadsdaadkfn',
        },
    }]
  return (
   <Grid minH={"90vh"} templateColumns={["1fr",'3fr 1fr']}>
    <Box>
    <video 
    width={'100%'}
      autoPlay controls controlsList='  noremoteplayback' 
      disablePictureInPicture
      disableRemotePlayback
      src= {introVideo}> 
    </video>
    <Heading m = "4" children = {`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} />
    <Heading m = "4" children ={"
    "} />

    <Text  m = "4" 
    children = {"this is a course of youtube video "} />
    </Box>
   </Grid>
  )
}

export default CoursePage
 