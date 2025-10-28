import { Button } from '@/components/ui/button';
import GithubIcon from '@/components/icons/github';
import { Logo } from '../icons/logo';
import { cn } from '@/lib/utils';
import { AnimatedGridPattern } from '../magicui/animated-grid-pattern';

export default function CTA() {
	return (
		<section className='py-12 sm:py-16 lg:py-24 relative overflow-hidden'>
			{/* <AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				className={cn(
					"[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
					"inset-x-8 inset-y-[-30%] h-[200%] skew-y-12"
				)}
			/> */}
			<AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				className={cn(
					"[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
					"inset-x-0 inset-y-0 h-[200%]"
				)}
			/>
			<AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				className={cn(
					"[mask-image:radial-gradient(400px_circle_at_top_right,white,rgba(255,255,255,0.6),transparent)]",
					"inset-x-0 inset-y-0 h-[200%]"
				)}
			/>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center relative'>
					<div className='relative inline-block'>
						<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 sm:mb-6 relative z-10'>
							Ready to get started?
						</h2>
					</div>
					<p className='text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0'>
						Join thousands of passionate entrepreneurs already using our
						platform to build and grow their businesses.
					</p>
					<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center z-20'>
						<Button
							size='lg'
							className='px-6 sm:px-8 w-full sm:w-auto'
						>
							Get Started Free
						</Button>
						<Button
							variant='outline'
							size='lg'
							className='px-6 sm:px-8 w-full sm:w-auto'
							asChild
						>
							<a
								href='https://github.com'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-2'
							>
								<GithubIcon className='h-4 w-4' />
								Star on GitHub
							</a>
						</Button>
					</div>
				</div>
			</div>
			<div
				className='absolute bottom-0 z-10 left-1/2 -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full opacity-40 sm:opacity-60 pointer-events-none'
				style={{
					background:
						'radial-gradient(circle, transparent 0%, transparent 30%, rgb(59 130 246 / 0.1) 60%, rgb(37 99 235 / 0.6) 100%)',
				}}
			></div>
		</section>
	);
}
