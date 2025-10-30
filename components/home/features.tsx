'use client';
import { Shield, Database, Mail, CreditCard, Palette, Search } from 'lucide-react';
import HighlightText from '../ui/highlight-text';

export default function Features() {
	const features = [
		{
			icon: Search,
			title: 'Powerful Search',
			description: 'Find component libraries quickly with advanced filtering and search capabilities',
		},
		{
			icon: Palette,
			title: 'Curated Collection',
			description: 'Hand-picked selection of the best Shadcn-inspired component libraries',
		},
		{
			icon: Shield,
			title: 'Verified Libraries',
			description: 'All libraries are verified and tested for quality and reliability',
		},
		{
			icon: Database,
			title: 'Comprehensive Info',
			description: 'GitHub stats, tags, frameworks, and links all in one place',
		},
		{
			icon: Mail,
			title: 'Stay Updated',
			description: 'Discover new libraries as they\'re added to the collection',
		},
		{
			icon: CreditCard,
			title: 'Free Forever',
			description: 'Completely free to browse and discover - no signup required',
		},
	];

	return (
		<section className='pt-16'>
			<div className='max-w-full mx-auto'>
				<div className='text-center mb-16 px-4 sm:px-6 lg:px-8'>
					<h2 className='font-librebaskerville text-2xl sm:text-3xl md:text-4xl mb-4'>
						Everything you need to{' '}
						<HighlightText>build faster</HighlightText>
					</h2>
					<p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
						Discover and explore the best component libraries. Find the perfect
						components for your next project without the hassle.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-border'>
					{features.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<div
								key={index}
								className='group relative p-4 sm:p-6 border-l border-t border-border bg-background hover:bg-muted/50 hover:transition-colors'
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
