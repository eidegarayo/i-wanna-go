import Link from 'next/link';
import { asyncUseTranslation } from '@/i18n';
import { languages, fallbackLng } from '@/i18n/settings';

type PageProps = {
  params: {
    lng: string;
  };
};

export default async function Page({
  params: { lng },
}: PageProps): Promise<React.JSX.Element> {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await asyncUseTranslation(lng);

  return (
    <>
      <h1>{t('index.title')}</h1>
      <Link href={`/${lng}/second-page`}>{t('index.to-second-page')}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t('index.to-client-page')}</Link>
    </>
  );
}
