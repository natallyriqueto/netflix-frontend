import { HeaderContainer, SignInButton } from './styles';
import logo from '@/assets/netflix-logo.png';
import { LanguageButton } from '@/components/LanguageButton';

export function Header() {
	return (
		<HeaderContainer>
			<nav>
				<img src={logo} alt="logo" />
				<div>
					<LanguageButton />
					<SignInButton type="button">Sign In</SignInButton>
				</div>
			</nav>
		</HeaderContainer>
	);
}