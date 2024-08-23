import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

function HomeSection() {
  return <Section id="home">Home</Section>;
}

export default HomeSection;