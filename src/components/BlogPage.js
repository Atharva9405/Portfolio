import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import AnchorComponent from '../subComponents/Anchor'
import { motion } from 'framer-motion'
import BigTitle from '../subComponents/BigTitle'



const MainContainer = styled(motion.div)`

background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width: 100vw;
${'' /* height: 100vh; */}

`
const Container = styled.div`

background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: 100vh;
position: relative;
padding-bottom: 5rem;

`


const Center = styled.div`

display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
top: 50%;


`

const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const BlogPage = () => {

  const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])

  return (
    <MainContainer
    variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers}/>
        <Center>
          <h1>Sorry....This page is currently available</h1>
        </Center>
        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container> 

    </MainContainer>
  )
}

export default BlogPage
