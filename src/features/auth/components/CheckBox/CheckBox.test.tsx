import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CheckBox.stories';

const { DefaultStory } = composeStories(stories);

test('render test DefaultStory', () => {
  render(<DefaultStory />);
});
