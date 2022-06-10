import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './InputWithError.stories';

const { DefaultStory, ErrorStory } = composeStories(stories);

test('render test DefaultStory', () => {
  render(<DefaultStory />);
});

test('render test ErrorStory', () => {
  render(<ErrorStory />);
});

// 참고
// https://storybook.js.org/addons/@storybook/testing-react/
