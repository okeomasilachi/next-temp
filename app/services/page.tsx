
import { servicesMetadata } from '@/app/meta/services';
import ServicesGrid from '@/ui/Services';
import { Box } from '@chakra-ui/react';

export const metadata = servicesMetadata;

export default function page() {
  return (
    <div className='min-h-screen'>
      <Box py={20}>
        <ServicesGrid />
      </Box>
    </div>
  )
}
