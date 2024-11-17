'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  const goToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Go to nextjs.org →x
      <button onClick={goToDashboard}>Go to Deneme</button>
    </div>
  );
}
