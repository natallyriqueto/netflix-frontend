import { Register } from '@/components/Register';
import { HeroContainer, HeroContent, HeroOverlay } from './style';

export function Hero() {
	return (
		<HeroContainer>
			<HeroOverlay />
			<HeroContent>
				<h1>Unlimited movies, tv shows, and more</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<Register />
			</HeroContent>
		</HeroContainer>
	);
}