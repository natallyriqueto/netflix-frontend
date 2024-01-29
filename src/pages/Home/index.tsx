import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { FrequentlyAskedQuestions } from '@/pages/Home/components/FrequentlyAskedQuestions';
import { Header } from '@/pages/Home/components/Header';
import { NetflixAdvertisement } from '@/pages/Home/components/NetflixAdvertisement';
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