import React from 'react';
import {
  Grommet as GrommetIcon,
  FacebookOption,
  Instagram,
  Twitter,
  Github,
  Favorite,
  Accessibility,
} from 'grommet-icons';
import { Anchor, Box, Footer, grommet, Grommet, Text } from 'grommet';
import { OnMobile, OnAtLeastTablet, OnDesktsop } from '../responsive-ui-utils';
import theme from '../theme';

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Chat with us on Facebook"
      href="https://www.facebook.com/Adopt-a-Neighbor-110843700582498"
      icon={<FacebookOption color="brand" />}
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/AdoptNeighbor"
      icon={<Twitter color="brand" />}
    />
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://github.com/rogue-hack-lab/adopt-a-neighbor"
      icon={<Github color="brand" />}
    />
  </Box>
);

const Social = () => (
  <Grommet theme={theme}>
    <Footer background="light-4" pad="small">
      <Box align="center" direction="row" gap="xsmall">
        <GrommetIcon color="brand" size="medium" />
        <Text alignSelf="center" color="brand" size="small">
          Adopt a Neighbor
        </Text>
      </Box>
      <Media />
      <Text textAlign="center" size="xsmall">
        Legal
      </Text>
    </Footer>
  </Grommet>
);

const FooterBar = () => (
  <OnAtLeastTablet>
    <Social />
  </OnAtLeastTablet>
);

export default FooterBar;
