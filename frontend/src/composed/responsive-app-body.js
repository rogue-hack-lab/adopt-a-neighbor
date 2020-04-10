import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Header,
  Grommet,
  WorldMap,
  Text,
  Button,
  Paragraph,
  Stack,
  Main,
} from 'grommet';
import { Favorite } from 'grommet-icons';
// import { OnMobile, OnAtLeastTablet, OnDesktop } from '../responsive-ui-utils';
import theme from '../theme';

const ResponsiveAppBody = () => (
  <Main align="center">
    <Header textAlign="center" size="large">
      <p>
        <Text size="xxlarge">Adopt a Neighbor</Text>
      </p>
      <br />
    </Header>
    <p>
      <Text size="xlarge">graphic here TBD</Text>
    </p>
    <Header textAlign="center" size="large">
      <p>
        <Text size="xlarge">Can you use some help with shopping and errands?</Text>
      </p>
      <br />
    </Header>
    <Header textAlign="center" size="large">
      <p>
        <Text size="xlarge">Do you want to help someone who lives nearby?</Text>
      </p>
      <br />
    </Header>
    <Box align="center" direction="row" pad="large">
      <Button
        primary={true}
        size="large"
        icon={<Favorite />}
        label="Sign Up"
        onClick={() => {}}
      />
    </Box>
  </Main>
);

export default ResponsiveAppBody;
