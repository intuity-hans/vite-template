import {
  Center, Heading, Link, VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => (
  <Center w="100%" h="100%" gridArea="content">
    <VStack bg="gray.200" color="black" p={8} spacing={8}>
      <Heading side="md">hello</Heading>
      <VStack w={80}>
        <Link as={RouterLink} to="/">home</Link>
      </VStack>
    </VStack>
  </Center>
);

export default Home;
