import { CaretDown, Globe } from 'phosphor-react';
import { LanguageBtn } from './styles';

export function LanguageButton() {
	return (
		<LanguageBtn type="button">
			<Globe size={20} />
						English
			<CaretDown size={20} />	
		</LanguageBtn>
	);
}