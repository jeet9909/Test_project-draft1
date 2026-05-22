'use client';

import { useState } from 'react';
import WormLoader from '@/components/WormLoader';

export default function LoaderWrapper() {
  const [done, setDone] = useState(false);
  if (done) return null;
  return <WormLoader />;
}
