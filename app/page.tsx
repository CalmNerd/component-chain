import { Suspense } from 'react'
import HeroSection from "@/components/home/hero"
import Features from "@/components/home/features"
import Pricing from "@/components/home/pricing"
import FAQs from "@/components/home/faqs"
import CTA from "@/components/home/cta"
import QuickSearch from "@/components/home/quick-search"

type Props = {}

const page = (props: Props) => {
  return (
    <main className='mt-16 mb-12 max-w-full  mx-auto border border-border'>
      <HeroSection />
      <div className='h-8 bg-dashed'></div>
      <Suspense fallback={<div className='py-20 text-center text-muted-foreground'>Loading search...</div>}>
        <QuickSearch />
      </Suspense>
      <div className='h-8 bg-dashed'></div>
      <Features />
      <div className='h-8 bg-dashed'></div>
      <Pricing />
      <div className='h-8 bg-dashed'></div>
      <FAQs />
      <div className='h-8 bg-dashed'></div>
      <CTA />
    </main>

  );
}
export default page