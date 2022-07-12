import { render, screen } from '@testing-library/react';

import Main from '.';

const props = {
	title: 'Title',
	description: 'Description'
};

describe('<Main />', () => {
	it('should render the heading', () => {
		const { container } = render(<Main {...props} />);

		const heading = screen.getByRole('heading', { name: props.title });

		expect(heading).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render the colors correctly', () => {
		const { container } = render(<Main {...props} />);

		expect(container.firstChild).toHaveStyle({ backgroundColor: '#06092b' });
	});
});
