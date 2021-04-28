import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const onClick = Template.bind({});
onClick.args = {
  onClick: () => {
    alert('Clicked');
  },
  label: 'Click me',
  primary: true,
}

export const Square = Template.bind({});
Square.args = {
  label: 'Square',
  rounded: false,
}

export const Color = Template.bind({});
Color.args = {
  backgroundColor: 'Green',
  label: 'Color',
  primary: true,
}