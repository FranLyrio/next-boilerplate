import * as S from './styles';

export type MainProps = {
	title: string;
	description: string;
};

const Main = ({ title, description }: MainProps) => (
	<S.Wrapper>
		<S.Title>{title}</S.Title>

		<S.Description>{description}</S.Description>

		<S.Illustration
			src="/img/hero-illustration.svg"
			alt="Um desenvolvedor de frente para uma tela com código"
		/>
	</S.Wrapper>
);

export default Main;
