import GithubIcon from '@/components/icons/github';
import XIcon from '@/components/icons/x';

export default function Footer() {
	return (
		<footer className='border-t border-border border-dotted z-50 bg-background'>
			<div className='max-w-6xl mx-auto px-6 py-6'>
				<div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
					<p className='text-sm text-muted-foreground'>
						Built with ❤️ for passionate entrepreneurs. Free forever.
					</p>
					<div className='flex gap-4'>
						<a 
							href='https://github.com' 
							className='text-muted-foreground hover:text-primary transition-colors'
							aria-label='GitHub'
							target='_blank'
							rel='noopener noreferrer'
						>
							<GithubIcon />
						</a>
						<a 
							href='https://x.com' 
							className='text-muted-foreground hover:text-primary transition-colors'
							aria-label='X (Twitter)'
							target='_blank'
							rel='noopener noreferrer'
						>
							<XIcon />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
