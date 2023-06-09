import { Card } from '../../components/Card';
import { Header } from './components/Header';
import { HomeContainer } from './style';

export function Home() {

	return (
		<HomeContainer>
			<Header />
			<Card />
		</HomeContainer>
	);
}