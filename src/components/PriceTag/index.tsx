import { CaretRight } from 'phosphor-react';
import { 
	ImageContainer, 
	PriceTagContainer, 
	PriceTagContent, 
	TextContent 
} from './styles';
import popCorn from '@/assets/popcorn.png';

export function PriceTag() {
	return (
		<PriceTagContainer>
			<PriceTagContent>
				<ImageContainer>
					<img src={popCorn} alt="popcorn image" />
				</ImageContainer>
				<TextContent>
					<h2>The Netflix you love for just $6.99.</h2>
					<p>Get the Standard with ads plan.</p>
					<a href='#'>
                        Learn More
						<CaretRight size={24} />
					</a>
				</TextContent>
				
			</PriceTagContent>
		</PriceTagContainer>
	);
}