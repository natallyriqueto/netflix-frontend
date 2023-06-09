import { Card } from '../../components/Card';
import { Header } from './components/Header';
import { NetflixAdvertisement } from './components/NetflixAdvertisement';
import { HomeContainer } from './style';
import AdvertisementTvImg from '../../assets/advertisement-tv.png';
import WatchEverywhereImg from '../../assets/watch-everywhere-img.png';
import KidsProfileImg from '../../assets/kids-profile-img.png';
import WatchOfflineImg from '../../assets/watch-offline-img.jpg';

export function Home() {

	return (
		<HomeContainer>
			<Header />
			<Card />
			<NetflixAdvertisement 
				title="Enjoy on your TV" 
				description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." 
				imgName={AdvertisementTvImg} 
			/>
			<NetflixAdvertisement 
				title="Watch everywhere" 
				description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." 
				imgName={WatchEverywhereImg} 
			/>
			<NetflixAdvertisement 
				title="Create profiles for kids" 
				description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." 
				imgName={KidsProfileImg} 
			/>
			<NetflixAdvertisement 
				title="Download your shows to watch offline" 
				description="Only available on ad-free plans." 
				imgName={WatchOfflineImg} 
			/>
		</HomeContainer>
	);
}