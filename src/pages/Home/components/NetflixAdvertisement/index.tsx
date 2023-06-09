import { AdvertisementContent } from './styles';

interface PropsData {
    title: string;
    description: string;
    imgName: string;
}

export function NetflixAdvertisement({ title, description, imgName}: PropsData) {
	return (
		<AdvertisementContent>
			<section>
				<h1>{title}</h1>
				<p>{description}</p>
			</section>
			<section>
			    <img src={imgName} alt="tv"/>
			</section>
		</AdvertisementContent>
	);
}