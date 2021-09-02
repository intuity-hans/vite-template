/* eslint-disable import/order */
/* eslint-disable simple-import-sort/imports */
import React from 'react';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';

import theme from './theme';
import './theme/App.css';

import {
  Center,
  ChakraProvider, Grid,
} from '@chakra-ui/react';

import Home from '@routes/home';

const templateAreas = `
"header"
"nav"
"content"
"footer"
`;

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Center w="100vw" h="100vh" bg="#ececec">
        <Grid
          templateRows="auto auto 1fr auto"
          templateAreas={templateAreas}
          width="1440px"
          height="900px"
          margin="auto"
          bg="white"
          m={0}
          borderWidth="1px"
          boxShadow="2xl"
        >
          <Switch>
            <Route path="/" exact><Home /></Route>
          </Switch>
        </Grid>
      </Center>
    </Router>
  </ChakraProvider>
);

export default App;
