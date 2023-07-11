import { dir } from 'i18next';
import { asyncUseTranslation } from '@/i18n';
import { languages } from '@/i18n/settings';
import LangSwitcher from '@/components/LangSwitcher';

type RootLayoutProps = {
  children: React.ReactNode;
  params: { lng: string };
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps): Promise<React.JSX.Element> {
  const { i18n } = await asyncUseTranslation(lng);

  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <LangSwitcher lng={lng} i18n={i18n} />
        {children}
      </body>
    </html>
  );
}
