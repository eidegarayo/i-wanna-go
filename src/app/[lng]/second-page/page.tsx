import React from 'react';
import Link from 'next/link';
import { asyncUseTranslation } from '@/i18n';

type PageProps = {
  params: {
    lng: string;
  };
};

export default async function Page({
  params: { lng },
}: PageProps): Promise<React.JSX.Element> {
  const { t } = await asyncUseTranslation(lng);

  return (
    <>
      <h1>{t('second-page.title')}</h1>
      <Link href={`/${lng}`}>{t('second-page.back-to-home')}</Link>
    </>
  );
}
