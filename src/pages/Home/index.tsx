import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { FrequentlyAskedQuestions } from './components/FrequentlyAskedQuestions';
import { Header } from './components/Header';
import { NetflixAdvertisement } from './components/NetflixAdvertisement';
import { PageBreak } from './components/NetflixAdvertisement/styles';
import { HomeContainer } from './style';

export function Home() {

	return (
		<HomeContainer>
			<Header />
			<Card />
			<NetflixAdvertisement />
			<FrequentlyAskedQuestions />
			<PageBreak />
			<Footer />
		</HomeContainer>
	);
}