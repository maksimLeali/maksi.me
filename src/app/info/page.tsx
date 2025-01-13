"use client"
import styled from 'styled-components';
import {$color, $uw } from '@theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 2rem;
  
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: ${$color('primary')};
  line-height: 1.6;
  height: ${$uw(2)};
  text-align: center;
  max-width: 600px;
  
`;

export default function Info() {
  return (
    <Container>
      <Title>Welcome to the Info Page</Title>
      <Subtitle>Your go-to source for information</Subtitle>
      <Paragraph>
        This is a simple Next.js page styled with styled-components. You can use this layout
        as a starting point for your project. Customize the styles and content as needed.
      </Paragraph>
    </Container>
  );
}
