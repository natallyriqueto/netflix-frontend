import { 
	AdvertisementContent, 
	AdvertisementContainer 
} from './styles';


interface advertisementContentType {
	title: string;
	description: string;
	imgName: string;
}

const advertisementTextContent: advertisementContentType[] = [
	{
		title: 'Enjoy on your TV',
		description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
		imgName: 'advertisement-tv.png' 
	},
	{
		title:'Watch everywhere',
		description:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' ,
		imgName: 'watch-everywhere-img.png'
	},
	{
		title:'Create profiles for kids',
		description:'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.', 
		imgName: 'kids-profile-img.png'
	},
	{
		title:'Download your shows to watch offline',
		description:'Only available on ad-free plans.', 
		imgName: 'watch-offline-img.jpg' 	
	},
];

export function NetflixAdvertisement() {
	const imgPath = 'src/assets/';

	return (
		<AdvertisementContainer>
			{advertisementTextContent.map(item => {
				return (
					<AdvertisementContent>
						<div>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
						</div>
						<div>
							<img src={imgPath + item.imgName} alt="tv"/>
						</div>
					</AdvertisementContent>
				);
			})}
		</AdvertisementContainer>
	);
}