import { ComponentMeta, ComponentStory } from '@storybook/react';
import Main from '.';

export default {
	title: 'Main',
	component: Main
} as ComponentMeta<typeof Main>;

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />;
Basic.args = {
	title: 'Welcome!',
	description:
		'A simple project starter to work with TypeScript, React, Next.js and Styled Components'
};
