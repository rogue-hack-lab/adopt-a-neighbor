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
          Neighbor program focuses on pairing up neighbors using geographical proximity
          and local knowledge of the area. By leveraging the intricate social webs already
          in the community, the program is designed to reach and serve the most vulnerable
          including our aging population and those with limited access to technology. By
          working with local authorities , program volunteers can also leverage the
          ability to curate and broadcast useful information to participants and help
          coordinate rapid community response to emerging needs.
        </Text>
      </Box>
      <Box align="center" alignSelf="center" responsive={true} direction="row">
        <Text size="large">
          Key Words: Geographic Proximity, Partnerships, Safety, Communication, Trust.
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
