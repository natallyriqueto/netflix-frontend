import { RegisterButton, Form, RegisterInput,  RegisterContainer } from './styles.ts';
import { CaretRight } from 'phosphor-react';

export function Register() {
	return (
		<RegisterContainer>
			<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
			<Form>
				<RegisterInput type="text" placeholder='Email address' />
				<RegisterButton type='button'>
					Get Started
					<CaretRight />
				</RegisterButton>
			</Form>
		</RegisterContainer>
	);
}