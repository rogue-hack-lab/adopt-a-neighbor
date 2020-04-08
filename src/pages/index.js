import React from 'react';
import { Box, Header, Grommet, WorldMap, Text } from 'grommet';
import { OnMobile, OnAtLeastTablet, OnDesktop } from '../responsive-ui-utils';
import theme from '../theme';

const ResponsiveLayout = () => (
  <Grommet theme={theme}>
    <Box flex align="center" justify="center">
      <Header textAlign="center" size="large">
        <Text size="xxlarge">
          Connecting neighbors who need help with those willing to help.
        </Text>
      </Header>
      <Box align="center" alignSelf="center" responsive={true} direction="row">
        <Text size="large">
          There are many ways you can help with the fight against Covid-19. The Adopt a
          Neighbor program focuses on geographical proximity and our most vulnerable
          populations to bolster existing social webs in the community. By partnering with
          local organizations and authorities, trusted volunteers can also leverage the
          ability to curate and broadcast critical information and help coordinate rapid
          community response to emerging needs.
        </Text>
      </Box>
      <Box align="center" alignSelf="center" responsive={true} direction="row">
        <Text size="large">
          Why It Works: Geographic Proximity, Partnerships, Safety, Communication.
        </Text>
      </Box>
    </Box>

    <OnAtLeastTablet>
      <Box
        align="center"
        alignSelf="center"
        responsive={true}
        basis="full"
        direction="row"
        height="xlarge"
      >
        <WorldMap fill="horizontal" />
      </Box>
    </OnAtLeastTablet>

    <OnDesktop>
      <Box basis="full" direction="row" height="xlarge">
        Displayed on desktop layout only
      </Box>
    </OnDesktop>

    <OnMobile>
      <Box basis="full" direction="row" height="medium">
        Displayed on mobile layout only
      </Box>
    </OnMobile>
  </Grommet>
);

export default ResponsiveLayout;
