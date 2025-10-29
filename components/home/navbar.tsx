'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';
// import { Menu, SendIcon, X } from 'lucide-react';
import { useTheme } from "next-themes"
import { ThemeToggleIcon } from '../icons/icons';

export default function Navbar() {
	// const [isOpen, setIsOpen] = useState(false);
	const { setTheme, theme } = useTheme()
	// const navigationItems = [
	// 	{ href: '/docs', label: 'Documentation' },
	// 	{
	// 		href: 'https://github.com/CalmNerd/component-chain',
	// 		label: 'Templates',
	// 	},
	// 	{ href: '/builder', label: 'Builder' },
	// 	{ href: '/blog', label: 'Blog' },
	// 	{ href: '/showcase', label: 'Showcase' },
	// 	{ href: '/sponsors', label: 'Sponsors' },
	// ];

	return (
		<header
			id='nd-nav'
			className='fixed py-1 top-0 z-[9999] -left-2 right-0 backdrop-blur-lg border-b transition-colors'
			aria-label='Main'
		>
			<div className='max-w-6xl px-2 mx-auto'>
				<nav className='flex h-14 w-full items-center'>
					{/* Logo */}
					<Link
						className='inline-flex items-center gap-2.5 font-semibold'
						href='/'
					>
						<Logo size='xl' />
						<span className='hidden sm:inline-block font-semibold text-sm sm:text-xl tracking-tighter font-librebaskerville'>Component Chain</span>
					</Link>

					{/* Desktop Navigation */}
					{/* <ul className='hidden lg:flex flex-row items-center gap-2 px-6'>
						{navigationItems.slice(0, 3).map((item) => (
							<li key={item.href}>
								<Button
									variant='ghost'
									size='sm'
									asChild
								>
									<Link href={item.href}>{item.label}</Link>
								</Button>
							</li>
						))}
					</ul> */}

					{/* Right Side Actions */}
					<div className='flex flex-row items-center justify-end gap-1.5 flex-1'>
						{/* Try it Now Button - Hidden on mobile, shown in menu */}
						<Button
							size='sm'
							variant='ghost'
							asChild
						>
							<Link href='#'>Submit Library</Link>
						</Button>

						<div className='h-4 w-px bg-border'></div>

						<div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className='cursor-pointer'>
							<ThemeToggleIcon className='size-5' />
						</div>

						{/* GitHub Link */}
						{/* <Button
							variant='ghost'
							size='sm'
							asChild
							className='inline-flex'
						>
							<Link
								href='https://github.com/CalmNerd/component-chain'
								rel='noreferrer noopener'
								target='_blank'
							>
								<GithubIcon className='size-5' />
							</Link>
						</Button> */}

						{/* Mobile Menu */}
						{/* <Sheet
							open={isOpen}
							onOpenChange={setIsOpen}
						>
							<SheetTrigger asChild>
								<Button
									variant='ghost'
									size='sm'
									className='lg:hidden'
								>
									{isOpen ? (
										<X className='size-5' />
									) : (
										<Menu className='size-5' />
									)}
									<span className='sr-only'>
										{isOpen ? 'Close Menu' : 'Open Menu'}
									</span>
								</Button>
							</SheetTrigger>
							<SheetContent
								side='right'
								className='w-[300px] sm:w-[400px] mt-16'
							>
								<SheetHeader>
									<SheetTitle className='text-xl'>Menu</SheetTitle>
								</SheetHeader>
								<div className='flex flex-col gap-4 px-4'>
									<Button
										size='sm'
										variant='ghost'
										className='justify-start rounded-none'
										asChild
									>
										<Link
											href='#'
											onClick={() => setIsOpen(false)}
										>
											<SendIcon className='size-4 mr-1' />
											Submit a Library
										</Link>
									</Button>
									<Button
										variant='ghost'
										className='justify-start rounded-none'
										asChild
									>
										<Link
											href='https://github.com/CalmNerd/component-chain'
											rel='noreferrer noopener'
											target='_blank'
											onClick={() => setIsOpen(false)}
										>
											<GithubIcon className='size-4 mr-1' />
											GitHub
										</Link>
									</Button>
								</div>
							</SheetContent>
						</Sheet> */}
					</div>
				</nav>
			</div>
		</header>
	);
}
