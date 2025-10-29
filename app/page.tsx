import { Suspense } from 'react'
import HeroSection from "@/components/home/hero"
import Features from "@/components/home/features"
import Pricing from "@/components/home/pricing"
import FAQs from "@/components/home/faqs"
import CTA from "@/components/home/cta"
import QuickSearch from "@/components/home/quick-search"
import Footer from '@/components/home/footer'

const page = () => {
  return (
    <main className='max-w-full flex flex-col min-h-full'>
      <div className='flex-1 border border-border'>
        <HeroSection />
        <div className='h-8 bg-dashed'></div>
        <Suspense fallback={<div className='text-center text-muted-foreground'>Loading search...</div>}>
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
        <div className='h-8 bg-dashed'></div>
      </div>
      <Footer />
    </main>

  );
}
export default page