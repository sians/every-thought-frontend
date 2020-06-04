import React from 'react';
import { action } from '@storybook/addon-actions';

import SideBar from './index'

export default {
  component: SideBar,
  title: 'Sidebar',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
    onClick: action('onClick'),
}

export const Default = () => <SideBar />;
