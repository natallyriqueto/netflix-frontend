import { HeaderContainer, LanguageButton, SignInButton } from './styles';
import logo from '../../../../assets/netflix-logo.png';
import { Globe, CaretDown } from 'phosphor-react';

export function Header() {
	return (
		<HeaderContainer>
			<nav>
				<img src={logo} alt="logo" />
				<div>
					<LanguageButton type="button">
						<Globe size={20} />
						English
						<CaretDown size={20} />	
					</LanguageButton>
					<SignInButton type="button">Sign In</SignInButton>
				</div>
			</nav>
		</HeaderContainer>
	);
}