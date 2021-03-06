import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {MainExampleComponent} from './Main';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'Layout/General',
  component: MainExampleComponent,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ComponentProps<typeof MainExampleComponent>> = args => (
  <MainExampleComponent {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*๐ The args you need here will depend on your component */
};
