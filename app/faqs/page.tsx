import FAQPage from '@/ui/FAQPage'
import { faqMetadata } from '@/app/meta/faq';

export const metadata = faqMetadata;

export default function page() {
  return (
    <div className='min-h-screen'>
        <FAQPage />
    </div>
  )
}
