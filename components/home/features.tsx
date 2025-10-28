'use client';
import { Shield, Database, Mail, CreditCard, Palette, Search } from 'lucide-react';
import { motion } from 'motion/react';
import HighlightText from '../ui/highlight-text';

export default function Features() {
	const features = [
		{
			icon: Shield,
			title: 'Authentication',
			description: 'Secure user authentication with multiple providers',
		},
		{
			icon: Database,
			title: 'Database',
			description: 'Modern database with optimized queries and migrations',
		},
		{
			icon: Mail,
			title: 'Emails',
			description: 'Transactional emails, webhooks, and forward management',
		},
		{
			icon: CreditCard,
			title: 'Payments',
			description: 'Integrated payment processing with multiple gateways',
		},
		{
			icon: Palette,
			title: 'Styling',
			description: 'Beautiful UI components with customizable themes',
		},
		{
			icon: Search,
			title: 'SEO',
			description: 'Search engine optimization with meta tags and sitemaps',
		},
	];

	return (
		<section className='pt-16'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16 px-4 sm:px-6 lg:px-8'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl mb-4'>
						Everything you need to{' '}
						<HighlightText>ship fast</HighlightText>
					</h2>
					<p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
						Built-in authentication, database, emails, and more. Focus on your
						product, not the infrastructure.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-border'>
					{features.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<div
								key={index}
								className='group relative p-4 sm:p-6 border-l border-t border-border bg-background hover:bg-muted/50 transition-colors duration-200'
							>
								{/* Icon */}
								<div className='inline-flex p-2 sm:p-3 border border-border bg-muted mb-3 sm:mb-4'>
									<Icon className='w-5 h-5 sm:w-6 sm:h-6' />
								</div>

								{/* Content */}
								<h3 className='text-lg sm:text-xl font-semibold mb-2 px-1 sm:px-0'>{feature.title}</h3>
								<p className='text-sm sm:text-base text-muted-foreground leading-relaxed px-1 sm:px-0'>
									{feature.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}





interface Feature {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	description: string;
}

interface FeaturesProps {
	title?: string;
	subtitle?: string;
	features: Feature[];
	className?: string;
}

export type { Feature, FeaturesProps };
