import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from '../components/Text/Text';

export default {
    title: 'Example/Text',
    component: Text,
  } as Meta;

  const Template: Story<TextProps> = (args) => <Text {...args}/>;

  export const Default = Template.bind({});
  Default.args = {
      label: 'Email',
  };

  export const withPlaceholder = Template.bind({});
  withPlaceholder.args = {
      label: 'Email',
      placeholder: 'example@email.com',
  };

  export const changeHandler = Template.bind({});
  changeHandler.args = {
      label: 'Email',
      onChange: ():void => {console.log('Hello test')}
  };

  export const Nothing = Template.bind({});
  Nothing.args = {};