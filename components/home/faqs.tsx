'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';

interface FAQItemProps {
	question: string;
	answer: React.ReactNode | string;
	index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='border-b border-border border-dotted'>
			<Accordion 
				type='single' 
				collapsible 
				className='w-full'
				value={isOpen ? `item-${index}` : ''}
				onValueChange={(value) => setIsOpen(value === `item-${index}`)}
			>
				<AccordionItem value={`item-${index}`} className='border-none'>
					<AccordionTrigger className='p-6 cursor-pointer text-left hover:bg-muted/50 transition-colors hover:no-underline flex justify-between items-center rounded-none'>
						<h3 className='font-medium text-sm leading-relaxed pr-4'>{question}</h3>
						<div className='flex-shrink-0'>
							<svg 
								className='h-4 w-4 transition-transform duration-200 ease-in-out' 
								viewBox='0 0 16 16' 
								fill='none'
							>
								<path
									d='M8 4v8'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									className={`transition-all origin-center duration-200 ${
										isOpen 
											? 'rotate-90' 
											: 'rotate-0'
									}`}
								/>
								<path
									d='M4 8h8'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									className='transition-all duration-200'
								/>
							</svg>
						</div>
					</AccordionTrigger>
					<AccordionContent className='px-6 py-3'>
						<div className='text-muted-foreground text-sm leading-relaxed'>
							{answer}
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default function FAQs() {
	const faqs = [
		{
			question: 'What is component-awesome?',
			answer: (
				<div className='space-y-4'>
					<p><strong>component-awesome</strong> is a curated directory of the best Shadcn-inspired component libraries. It helps developers discover high-quality UI component libraries quickly and efficiently.</p>
					<p>You can:</p>
					<ul className='list-disc list-inside ml-4 space-y-1'>
						<li>Search and filter libraries by framework, tags, or keywords</li>
						<li>View GitHub stats, descriptions, and links</li>
						<li>Discover new libraries as they\'re added</li>
						<li>Submit your own component library</li>
					</ul>
					<p>All completely free - no signup required, no hidden costs, no catch.</p>
				</div>
			)
		},
		{
			question: 'Why is component-awesome completely free?',
			answer: (
				<div className='space-y-4'>
					<p>component-awesome is our way of giving back to the developer community.</p>
					<p>We believe finding the right component libraries shouldn\'t be time-consuming or difficult. By making this completely free and open source, we\'re helping developers discover amazing components faster.</p>
					<p>No monetization strategy - just our contribution to help developers build better projects.</p>
				</div>
			)
		},
		{
			question: 'Is it really 100% free?',
			answer: (
				<div className='space-y-4'>
					<p>Yes! component-awesome is completely free and open source. You get:</p>
					<ul className='list-disc list-inside space-y-1'>
						<li>Full access to browse all libraries</li>
						<li>Advanced search and filtering</li>
						<li>No signup required</li>
						<li>Regular updates with new libraries</li>
						<li>No licensing fees ever</li>
					</ul>
					<p>You can browse, search, and discover libraries completely free - no account needed!</p>
				</div>
			)
		},
		{
			question: 'How do I search for libraries?',
			answer: 'You can search by library name, description, or tags. Use the advanced filters to narrow down by framework (React, Vue, etc.), tags, or other criteria. The quick search on the homepage lets you instantly find libraries as you type.'
		},
		{
			question: 'What types of libraries are included?',
			answer: 'We focus on Shadcn-inspired component libraries - beautiful, modern UI component collections that help developers build better interfaces faster. Libraries are curated for quality, active maintenance, and useful features.'
		},
		{
			question: 'Can I submit my own library?',
			answer: 'Yes! We welcome submissions from the community. You can submit your component library through our submission process. All libraries are reviewed to ensure quality and relevance before being added to the directory.'
		},
		{
			question: 'How do libraries get added?',
			answer: 'Libraries are added through community submissions and our own research. We review each library to ensure it meets our quality standards - active maintenance, good documentation, useful components, and Shadcn-inspired design principles.'
		},
		{
			question: 'Is this a component library itself?',
			answer: 'No, component-awesome is a directory and discovery platform. We help you find component libraries, but the actual libraries are maintained by their respective authors. Each library listing includes direct links to the library\'s GitHub and website.'
		},
		{
			question: 'How is this different from other directories?',
			answer: 'component-awesome focuses specifically on Shadcn-inspired libraries with a beautiful, curated interface. We emphasize quality over quantity and make it easy to discover exactly what you need through powerful search and filtering.'
		},
		{
			question: 'Are the libraries free to use?',
			answer: 'Each library has its own license terms. Most libraries in our directory are open source and free, but we recommend checking the individual library\'s license before using it in your projects. Links to each library\'s repository are provided for easy verification.'
		},
		{
			question: 'Are there any hidden costs?',
			answer: 'Absolutely no hidden costs! component-awesome is completely free forever. You can browse, search, and discover libraries without any fees. The libraries themselves may have their own terms, but accessing our directory is always free.'
		},
		{
			question: 'How often is the directory updated?',
			answer: 'component-awesome is regularly updated with new libraries as they\'re discovered and submitted. We also update library information when GitHub stats change or new features are added. Check back regularly to discover the latest additions!'
		},
		{
			question: 'Can I contribute to component-awesome?',
			answer: 'Yes! Since component-awesome is open source, you can contribute in many ways: submit libraries, suggest improvements, report issues, or contribute code. Your contributions help make component-awesome better for everyone.'
		},
		{
			question: 'What frameworks are supported?',
			answer: 'We include libraries for various frameworks including React, Vue, Angular, Svelte, and more. Use the framework filter to find libraries specific to your preferred technology stack.'
		}
	];

	return (
		<section className=''>
			<div className='grid grid-cols-12 gap-0'>
				{/* Title Section - Left */}
				<div className='col-span-12 md:col-span-5 '>
					<div className='p-8 pr-12 md:sticky md:top-8 py-16'>
						<h2 className='font-librebaskerville text-3xl font-semibold mb-4'>Frequently Asked Questions</h2>
						<p className='text-muted-foreground'>
							Have another question? Contact us on{' '}
							<a href='https://x.com/Calmnrd' className='text-primary hover:underline'>Twitter</a> or reach out{' '}
							<a href='https://www.mohitsingh.space/' className='text-primary hover:underline'>here</a>.
						</p>
					</div>
				</div>

				{/* FAQs Section - Right */}
				<div className='col-span-12 md:col-span-7 border-l border-border'>
					<div className='space-y-0'>
						{faqs.map((faq, index) => (
							<FAQItem
								key={index}
								question={faq.question}
								answer={faq.answer}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
