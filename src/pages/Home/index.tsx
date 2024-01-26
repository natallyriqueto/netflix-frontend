import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { FrequentlyAskedQuestions } from '@/pages/Home/components/FrequentlyAskedQuestions';
import { Header } from '@/pages/Home/components/Header';
import { NetflixAdvertisement } from '@/pages/Home/components/NetflixAdvertisement';
import { HomeContainer } from './style';

export function Home() {

	return (
		<HomeContainer>
			<Header />
			<Hero />
			<NetflixAdvertisement />
			<FrequentlyAskedQuestions />
			<Footer />
		</HomeContainer>
	);
}