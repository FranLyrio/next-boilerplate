import Main, { MainProps } from 'components/Main';

export default function Home(props: MainProps) {
	return <Main {...props} />;
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Next Boilerplate',
			description:
				'A simple project starter to work with TypeScript, React, Next.js and Styled Components'
		}
	};
}
