import { HeaderContainer, Nav, SignInButton } from './styles';
import logo from '@/assets/netflix-logo.png';
import { LanguageButton } from '@/components/LanguageButton';

export function Header() {
	return (
		<HeaderContainer>
			<Nav>
				<img src={logo} alt="logo" />
				<div>
					<LanguageButton />
					<SignInButton type="button">Sign In</SignInButton>
				</div>
			</Nav>
		</HeaderContainer>
	);
}