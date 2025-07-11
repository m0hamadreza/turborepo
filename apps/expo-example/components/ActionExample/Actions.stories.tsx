import type { Meta, StoryObj } from '@storybook/react-native';
import { ActionButton } from './Actions';
import { fn } from 'storybook/test';
import { Button } from '@repo/mobile-ui/button';
const meta = {
  component: Button,
  parameters: {
    notes: `
# Button

This is a button component.
You use it like this:

\`\`\`tsx    
<Button 
      text="Press me!" 
      onPress={() => console.log('pressed')} 
/>
\`\`\`
`,
  },
} satisfies Meta<typeof ActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Press me!',
  },
};
