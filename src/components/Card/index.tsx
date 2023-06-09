import { Register } from '../Register';
import { CardContainer, CardOverlay } from './style';

export function Card() {
	return (
		<CardContainer>
			<CardOverlay />
			<section>
				<h1>Unlimited movies, tv shows and more</h1>
				<h3>Watch anywhere. Cancel anytime.</h3>
				<Register />
			</section>
		</CardContainer>
	);
}