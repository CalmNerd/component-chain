import { cn } from '@/lib/utils';

interface LogoProps {
	className?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	variant?: 'light' | 'dark' | 'auto';
}

const sizeClasses = {
	sm: 'w-4 h-4',
	md: 'w-6 h-6',
	lg: 'w-8 h-8',
	xl: 'w-12 h-12',
};

export function Logo({ className, size = 'md', variant = 'auto' }: LogoProps) {
	const variantClasses = {
		light: 'text-white',
		dark: 'text-black',
		auto: 'text-foreground',
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enableBackground="new 0 0 48 48"
			viewBox="0 0 48 48"
			className={cn(sizeClasses[size], variantClasses[variant], className)}
			fill="currentColor"
		>
			<polygon points="41.91 22.58 31.01 22.58 31.01 .5 6.09 25.42 16.99 25.42 16.99 47.5" />
		</svg>
	);
}
