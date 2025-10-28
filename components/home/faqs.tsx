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
					<AccordionTrigger className='p-6 text-left hover:bg-muted/50 transition-colors hover:no-underline flex justify-between items-center rounded-none'>
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
					<AccordionContent className='px-6 pb-6'>
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
			question: 'What do I get exactly?',
			answer: (
				<div className='space-y-4'>
					<p><strong>1/</strong> The complete Next.js 15 starter with all the boilerplate code you need to run an online business: payment system (Stripe & LemonSqueezy), database integration, authentication, blog, UI components, and much more.</p>
					<p>The repo is built with:</p>
					<ul className='list-disc list-inside ml-4 space-y-1'>
						<li>TypeScript</li>
						<li>/app router</li>
						<li>Modern tech stack with multiple options</li>
					</ul>
					<p><strong>2/</strong> Comprehensive documentation to help you set up your app from scratch and ship fast.</p>
					<p><strong>3/</strong> Access to our community Discord and ongoing support.</p>
					<p>All completely free - no hidden costs, no premium tiers, no catch.</p>
				</div>
			)
		},
		{
			question: 'Why is Component Chain completely free?',
			answer: (
				<div className='space-y-4'>
					<p>Component Chain is our way of giving back to the entrepreneurial and developer community.</p>
					<p>We believe great ideas shouldn\'t be limited by budget. By making this completely free and open source, we\'re helping passionate builders turn their dreams into successful startups.</p>
					<p>No venture capital, no monetization strategy - just our contribution to help you ship faster.</p>
				</div>
			)
		},
		{
			question: 'Is it really 100% free?',
			answer: (
				<div className='space-y-4'>
					<p>Yes! Component Chain is completely free and open source. You get:</p>
					<ul className='list-disc list-inside space-y-1'>
						<li>Full access to all code and components</li>
						<li>Complete documentation</li>
						<li>Community support</li>
						<li>Regular updates and improvements</li>
						<li>No licensing fees ever</li>
					</ul>
					<p>You only pay for the external services you choose to use (hosting, databases, etc.), but the codebase itself is completely free.</p>
				</div>
			)
		},
		{
			question: 'Does Component Chain work with AI (Cursor, Copilot)?',
			answer: 'Yes, Component Chain works perfectly with AI coding assistants like Cursor and GitHub Copilot. The clean, well-structured TypeScript codebase makes it easy for AI tools to understand and assist with development.'
		},
		{
			question: 'What tech stack does Component Chain use?',
			answer: 'Component Chain is built with TypeScript and Next.js 15 using the /app router. It includes multiple options for database (PostgreSQL/MongoDB), authentication systems, payments (Stripe & LemonSqueezy), email services, and much more - all pre-configured and ready to use.'
		},
		{
			question: 'Can I choose between different payment providers?',
			answer: 'Yes! Component Chain comes with both Stripe and LemonSqueezy integrations built-in. You can choose either one or use both depending on your business needs and target markets.'
		},
		{
			question: 'My tech stack is different, can I still use it?',
			answer: 'While Component Chain is built with a specific stack (Next.js, TypeScript, etc.), many concepts and components can be adapted to other frameworks. However, you\'ll get the most value using it with the intended tech stack.'
		},
		{
			question: 'Is it a website template?',
			answer: 'No, Component Chain is much more than a template. It\'s a complete boilerplate with backend functionality, database integration, payment processing, authentication, and more - everything you need to build a SaaS product.'
		},
		{
			question: 'Is Component Chain better than other boilerplates?',
			answer: 'Component Chain focuses on helping you ship fast with battle-tested code, comprehensive documentation, and ongoing support. The community and regular updates make it a solid choice for entrepreneurs who want to launch quickly.'
		},
		{
			question: 'Is Component Chain better than AI tools like Lovable or Bolt?',
			answer: 'Component Chain gives you full control over production-ready code that you own completely. While AI tools are great for prototyping, Component Chain provides enterprise-grade architecture that scales with your business.'
		},
		{
			question: 'Are there any hidden costs?',
			answer: 'Absolutely no hidden costs! Component Chain is completely free forever. You only pay for the external services you choose to use (like hosting, databases, email services, etc.), but the codebase itself has no ongoing fees or licensing costs.'
		},
		{
			question: 'How often is Component Chain updated?',
			answer: 'Component Chain is regularly updated with new features, security patches, and improvements. Updates are pushed to the repository and you\'ll be notified of major releases through our community channels.'
		},
		{
			question: 'Can I contribute to Component Chain?',
			answer: 'Yes! Since Component Chain is open source, you can contribute to it. Whether it\'s bug fixes, new features, or documentation improvements, your contributions help make Component Chain better for everyone.'
		},
		{
			question: 'What database options are available?',
			answer: 'Component Chain comes with support for both PostgreSQL and MongoDB. You can choose the database that best fits your project requirements and easily switch between them using our configuration system.'
		}
	];

	return (
		<section className=''>
			<div className='grid grid-cols-12 gap-0'>
				{/* Title Section - Left */}
				<div className='col-span-12 md:col-span-5 '>
					<div className='p-8 pr-12 md:sticky md:top-8 py-16'>
						<h2 className='text-3xl font-semibold mb-4'>Frequently Asked Questions</h2>
						<p className='text-muted-foreground'>
							Have another question? Contact us on{' '}
							<a href='#' className='text-primary hover:underline'>Twitter</a> or by{' '}
							<a href='#' className='text-primary hover:underline'>email</a>.
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
