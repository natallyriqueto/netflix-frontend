import { Card } from '../../components/Card';
import { FrequentlyAskedQuestions } from './components/FrequentlyAskedQuestions';
import { Header } from './components/Header';
import { NetflixAdvertisement } from './components/NetflixAdvertisement';
import { HomeContainer } from './style';

export function Home() {

	return (
		<HomeContainer>
			<Header />
			<Card />
			<NetflixAdvertisement />
			<FrequentlyAskedQuestions />
		</HomeContainer>
	);
}