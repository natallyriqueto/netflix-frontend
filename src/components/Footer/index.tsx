import { LanguageButton } from '@/components/LanguageButton';
import { FooterContainer, List } from './styles';

export function Footer() {
	interface footerLinksType {
		title: string;
		link: string
	}

	const footerLinks: footerLinksType[] = [
		{
			title: 'FAQ',
			link: 'https://help.netflix.com/en/node/412'
		},
		{
			title: 'Media Center',
			link: 'https://media.netflix.com/en/'
		},
		{
			title: 'Netflix Shop',
			link: 'https://www.netflix.shop/'
		},
		{
			title: 'Ways to Watch',
			link: 'https://devices.netflix.com/en/'
		}, 
		{
			title: 'Cookie Preferences',
			link: 'https://www.netflix.com/#'
		},
		{
			title: 'Speed Test',
			link: 'https://www.netflix.com/#'
		},
		{
			title: 'Do not sell or share my personal information',
			link: 'https://www.netflix.com/#'
		},
		{
			title: 'Help Center',
			link: 'https://www.netflix.com/#'
		},
		{
			title: 'Investor Relations',
			link: 'https://www.netflix.com/#'
		},
		{
			title: 'Reedem Gift Cards',
			link: 'https://www.netflix.com/#'
		},
		{
			title: 'Terms of Use',
			link: 'https://devices.netflix.com/en/'
		}, 
		{
			title: 'Corporate Information',
			link: 'https://devices.netflix.com/en/'
		}, 
		{
			title: 'Legal Notices',
			link: 'https://devices.netflix.com/en/'
		}, 
		{
			title: 'Account',
			link: 'https://devices.netflix.com/en/'
		}, 
		{
			title: 'Jobs',
			link: 'https://devices.netflix.com/en/'
		}, 
		{
			title: 'Buy Gift Cards',
			link: 'https://devices.netflix.com/en/'
		}, 
		{
			title: 'Privacy',
			link: 'https://devices.netflix.com/en/'
		}, 
		{
			title: 'Contact Us',
			link: 'https://devices.netflix.com/en/'
		}, 
		{
			title: 'Only on Netflix',
			link: 'https://devices.netflix.com/en/'
		}
	];

	return (
		<FooterContainer>
			<p>Questions? Call 1-844-505-2993</p>
			<List>
				{footerLinks.map(item => 
					(
						<li key={item.title}>
							<a 
								key={item.title} 
								href={item.link}>
								{item.title}
							</a>  
						</li>
					))}
			</List>
			<LanguageButton />
		</FooterContainer>
	);
}