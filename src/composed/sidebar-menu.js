import React, { Component } from 'react';
import { Grommet, grommet, Box, Text, List } from 'grommet';
import { Emergency, Aid, Info, Organization } from 'grommet-icons';
import theme from '../theme';

const SidebarMenu = (props) => (
  <Grommet theme={theme}>
    <Box pad="large">
      <List
        primaryKey="view"
        data={[
          { view: 'Sign Up' },
          { view: 'Community Admin Portal' },
          { view: 'About' },
        ]}
      />
    </Box>
  </Grommet>
);

export default SidebarMenu;
