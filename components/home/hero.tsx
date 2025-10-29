import { Button } from '@/components/ui/button';
import { AuroraText } from '@/components/ui/aurora-text';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AnimatedGridPattern } from '../ui/animated-grid-pattern';
import HighlightText from '@/components/ui/highlight-text';

export default function HeroSection() {
	return (
		<section className='relative py-16 sm:py-24 md:py-28 lg:py-36'>

			<div className={cn('absolute bg-background z-10 inset-0 w-full h-full', '[mask-image:radial-gradient(600px_circle_at_center,white,rgba(255,255,255,0.8),transparent)]')}></div>

			<AnimatedGridPattern
				numSquares={10}
				maxOpacity={0.05}
				numOctaves={20}
				width={68}
				height={68}
				duration={3}
			/>
			<div className='mx-auto max-w-full z-50 relative'>
				<div className='mx-auto max-w-4xl text-center'>
					<h1 className='text-2xl sm:text-3xl font-librebaskerville md:text-5xl font-normal text-shadow-xs tracking-tight text-foreground leading-tight'>
						Find your &nbsp;
						<HighlightText><span className='font-semibold'>favourite</span></HighlightText>
						{/* &nbsp; */}
						<br className=''></br>
						<AuroraText
							colors={['#10b981', '#06b6d4', '#3b82f6']}
							speed={1.5}
						>
							component
						</AuroraText>{' '}
						{/* <br className='hidden sm:block'></br> */}
						in seconds
					</h1>

					<p className='mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl sm:max-w-2xl mx-auto text-shadow-xs px-4 text-balance sm:text-center'>
						{/* A curated list of the best Shadcn-inspired libraries, designed to help you ship faster and build better. */}
						{/* A curated list of the best Shadcn-inspired libraries, designed to help you build and ship lightning-fast. */}
						A curated list of Shadcn-inspired libraries to help you build and ship faster.
					</p>

					<div className='mt-8 sm:mt-10 flex flex-row items-center justify-center gap-4 sm:gap-x-6 z-50 px-4 sm:px-0'>
						<Button
							className='sm:w-auto text-sm sm:text-base shadow-inner shadow-black px-6 sm:px-8 py-1 sm:py-4 transition-colors text-shadow-xs'
						>
							<Link href='#'>Start Now</Link>
						</Button>

						<Button
							variant='outline'
							asChild
							className='sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-1 sm:py-4 font-medium transition-colors group'
						>
							<Link
								href='https://github.com/CalmNerd/component-chain'
								className='flex items-center justify-center gap-2'
							>
								<svg
									className='w-4 h-4 sm:w-5 sm:h-5'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
								</svg>
								<span className='hidden xs:inline'>Explore Code</span>
								<span className='xs:hidden'>GitHub</span>
								{/* <span aria-hidden='true' className='group-hover:translate-x-1 transition-transform'>→</span> */}
							</Link>
						</Button>
					</div>
				</div>
			</div>

			{/* Background decoration */}
			{/* <div className='absolute inset-0 z-0'>
				<Image
					src='/images/hero.png'
					alt=''
					width={1754}
					height={544}
					className='opacity-[0.35] w-full h-auto object-contain'
					style={{
						mixBlendMode: 'screen',
						maskImage: 'linear-gradient(black, transparent)',
					}}
					priority
				/>
			</div> */}
		</section>
	);
}
