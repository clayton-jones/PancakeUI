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
  label: 'Button',
  mode: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  mode: 'secondary',
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default'
}

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
  mode: 'primary'
}

export const Square = Template.bind({});
Square.args = {
  label: 'Square',
  rounded: false,
}

export const Affirmative = Template.bind({});
Affirmative.args = {
  label: 'Affirmative',
  mode: 'affirmative',
}

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  mode: 'error',
}