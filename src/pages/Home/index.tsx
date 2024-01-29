import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { FrequentlyAskedQuestions } from '@/components/FrequentlyAskedQuestions';
import { Header } from '@/components/Header';
import { NetflixAdvertisement } from '@/components/NetflixAdvertisement';
import { HomeContainer } from './style';
import { PriceTag } from '@/components/PriceTag';

export function Home() {

	return (
		<HomeContainer>
			<Header />
			<Hero />
			<PriceTag />
			<NetflixAdvertisement />
			<FrequentlyAskedQuestions />
			<Footer />
		</HomeContainer>
	);
}