import React from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import {DarkTheme} from './Themes'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import ParticleComponent from '../subComponents/ParticleComponent'
import astronaut from '../assets/Images/spaceman.png'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`

background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;


`;

const float = keyframes`

0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}

`

const Spaceman = styled.div`

position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;


img{
  width: 100%:
  height: auto;
}

`

const Main = styled.div`

border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;

`


const MySkillsPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
      <LogoComponent theme='dark' />
      <SocialIcons theme='dark' />
      <PowerButton />
      <ParticleComponent theme='dark' />
      <Spaceman>
        <img src={astronaut} alt='spaceman' />
      </Spaceman>
      <Main>
      Hey there , I am your friendly frontend aid .
      <br />
      With my roots coming from India , I create exquisite designs which are pleasing to the eyes.
      <br /> <br />
      About my tool stack , my bag includes React js , material UI, TailwindCSS, bootstrap for the front end .
      I also am familiar with c++/c so you catch an eye of me during competitive programming.
      <br /> <br />
      Apart from the technical aspects , I drink tea in a gathering with friends. 
      Hope you will contact me soon and avail my services
      </Main>
      <BigTitle text='ABOUT' top='10%' left='5%' />
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage
