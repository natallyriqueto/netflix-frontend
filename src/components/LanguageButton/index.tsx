import { CaretDown, Translate } from 'phosphor-react';
import { LanguageBtn } from './styles';

export function LanguageButton() {
	return (
		<LanguageBtn type="button">
			<Translate size={20} />
				English
			<CaretDown size={16} />	
		</LanguageBtn>
	);
}