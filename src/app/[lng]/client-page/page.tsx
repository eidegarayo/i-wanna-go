'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n/client';
import { useState } from 'react';

type PageProps = {
  params: {
    lng: string;
  };
};

export default function Page({ params: { lng } }: PageProps): JSX.Element {
  const { t } = useTranslation(lng);
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{t('client-page.title')}</h1>
      <p>{t('client-page.counter', { count: counter })}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
      </div>
      <Link href={`/${lng}`}>
        <button type="button">{t('client-page.back-to-home')}</button>
      </Link>
    </>
  );
}
