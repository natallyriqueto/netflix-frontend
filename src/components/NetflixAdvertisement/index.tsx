import { 
	AdvertisementContent, 
	AdvertisementContainer, 
	ImageContainer
} from './styles';
import advertisementIMG from '@/assets/advertisement-tv.png';
import devicesIMG from '@/assets/watch-everywhere-img.png';
import profileIMG from '@/assets/profiles-img.png';
import watchOfflineIMG from '@/assets/watch-offline-img.jpg';


interface advertisementContentType {
	title: string;
	description: string;
	img: string;
}

const advertisementTextContent: advertisementContentType[] = [
	{
		title: 'Enjoy on your TV',
		description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
		img: advertisementIMG 
	},
	{
		title:'Watch everywhere',
		description:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' ,
		img: devicesIMG
	},
	{
		title:'Create profiles for kids',
		description:'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.', 
		img: profileIMG
	},
	{
		title:'Download your shows to watch offline',
		description:'Only available on ad-free plans.', 
		img: watchOfflineIMG
	},
];

export function NetflixAdvertisement() {
	return (
		<AdvertisementContainer>
			{advertisementTextContent.map(item => {
				return (
					<AdvertisementContent key={item.title}>
						<div>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
						</div>
						<ImageContainer>
							<img src={item.img} alt="advertisements image"/>
						</ImageContainer>
					</AdvertisementContent>
				);
			})}
		</AdvertisementContainer>
	);
}