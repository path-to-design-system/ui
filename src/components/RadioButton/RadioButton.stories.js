import React, { useState } from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import RadioButton from '.';
import FormGroup from '../FormGroup';
import InputGroup from '../InputGroup';

export default {
  title: 'Components/Forms/RadioButton',
  component: RadioButton,
  parameters: {
    componentSubtitle: 'RadioButton',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <RadioButton {...args} />;

Regular.args = {
  labelText: 'Radio button',
};

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const VerticalGrouping = (args) => {
  const [gender, setgender] = useState('');

  const handleOnchange = (e) => {
    setgender(e);
  };

  return (
    <InputGroup
      name="input-group"
      helperText="select one"
      labelText="Please select your gender"
      vertical>
      <RadioButton
        {...args}
        value="female"
        id="female"
        labelText="Female"
        name="female"
        checked={gender === 'female'}
        onChange={handleOnchange}
      />
      <RadioButton
        {...args}
        value="male"
        labelText="Male"
        id="male"
        name="male"
        checked={gender === 'male'}
        onChange={handleOnchange}
      />
      <RadioButton
        {...args}
        value="other"
        labelText="Other"
        id="other"
        name="other"
        checked={gender === 'other'}
        onChange={handleOnchange}
      />
    </InputGroup>
  );
};

export const HorizontalGrouping = (args) => (
  <InputGroup
    name="input-group"
    helperText="select one"
    labelText="Please select your age range">
    <RadioButton
      name="radiob"
      value="standard"
      id="radiob-1"
      labelText="Below 20"
    />
    <RadioButton
      name="radiob"
      value="default-selected"
      id="radiob-2"
      labelText="20-50"
    />
    <RadioButton
      name="radiob"
      value="disabled"
      id="radiob-3"
      labelText="Above 50"
    />
  </InputGroup>
);
