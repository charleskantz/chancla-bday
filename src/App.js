import React, { useState } from 'react';

import './App.css';
import { Center, Heading, Text } from "@chakra-ui/react"
import Images from './Images';

function App() {
const [ clicked, setClicked ] = useState(false);

const handleClick = () => {
  setClicked(true);
}

  return (
    <>
      <div className="bar-blue"></div>
      <div className="bar-red"></div>
      <div className="bar-yellow"></div>
      <Center mx="1rem">
        <Heading as="h1" size="lg" my="3rem">
          🎉  Happy Birthday Lauren!  🎉
        </Heading>
      </Center>
      <Center mx="1rem">
        <Text>
          I came across this and immediately thought of you. Please enjoy this birthday gift!
        </Text>
      </Center>
      <Center my="3rem" mx="1rem">
        {clicked
          ? <Images />
          : <Heading as="h2" size="4xl" className="gift" onClick={handleClick}>
              🎁
            </Heading>
        }
      </Center>
      <Center>
        <Text>
          It will be arriving some time in the next week. Enjoy!
        </Text>
      </Center>
    </>
  );
}

export default App;
