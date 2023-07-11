import { i18n } from 'i18next';
import Link from 'next/link';
import { languages } from '@/i18n/settings';
import { LangIcon } from '@/assets/icons';
import { LanguageShorthand } from '@/constants/language.constants';

export default function LangSwitcher({
  i18n,
  lng,
  path = '',
}: {
  i18n: i18n;
  lng: string;
  path?: string;
}) {
  const t = i18n.getFixedT(lng);

  return (
    <div className="relative inline-block group">
      <div
        className="flex items-center w-full gap-x-1.5 px-3 py-2"
        id="language-menu"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <LangIcon width={16} height={16} fill="fill-black" />
        <span className="text-md text-gray-90">
          {LanguageShorthand[lng as keyof typeof LanguageShorthand]}
        </span>
      </div>

      <div
        className="max-h-0 group-hover:max-h-full absolute right-0 z-10 origin-top-right overflow-hidden transition-all ease-in-out delay-150 bg-cBlue w-full gap-x-1.5 text-right"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="language-menu"
        tabIndex={-1}
      >
        <div className="py-2 px-3 w-full border-t-2 border-gray-90">
          {languages
            .filter((l) => lng !== l)
            .map((l, index) => {
              return (
                <Link
                  className="w-full block"
                  key={l}
                  href={`/${l}${path}`}
                  role="menuitem"
                  tabIndex={-1}
                >
                  {LanguageShorthand[l as keyof typeof LanguageShorthand]}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
