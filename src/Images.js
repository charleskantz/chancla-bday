import React from 'react';
import { Image } from '@chakra-ui/image';
import { Center, Flex } from '@chakra-ui/react';
import brim from "./img/brim.jpg";
import hat from "./img/hat.jpg";

function Images() {
  return (
    <>
      <Flex wrap="wrap" justify="center">
        <Image boxSize="300px" src={hat}/>
        <Image boxSize="300px" src={brim}/>
      </Flex>
    </>
  )
}

export default Images;