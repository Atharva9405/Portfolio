import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Develope } from "./AllSvgs";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 69vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.7;
  font-family: "ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}&:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 800;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Front-End Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <ul>
              <li>
                <b>Programming Languages/Paradigms:</b>
                <p>C/C++, Python, HTML, CSS, Javascript</p>
              </li>
              <li>
                <b>Frameworks:</b>
                <p>React js,Next js, Node js, Express js, TailwindCSS, MaterialUI, Bootstrap</p>
              </li>
              <li>
                <b>CS Fundamentals:</b>
                <p>
                  Object Oriented Programming(OOPs), Data Structure and
                  Algorithms
                </p>
              </li>
            </ul>
            <strong>Tools</strong>
            <p>VScode, Git, Github, Linux etc</p>
          </Description>
        </Main>
        <BigTitle text='SKILLS' top='80%' right='30%' />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
