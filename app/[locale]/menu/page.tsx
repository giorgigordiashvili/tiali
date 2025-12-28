import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import PDFViewer from "../../components/PDFViewer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "menu" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function MenuPage({ params }: Props) {
  const { locale } = await params;
  const menuFile = locale === "en" ? "/menu-english.pdf" : "/menu.pdf";

  return (
    <main className="min-h-[100dvh] w-full flex flex-col">
      <div className="flex justify-between items-center p-4 sticky top-0 bg-[#903240] z-10">
        <Link href="/" className="text-xl hover:opacity-80 transition-opacity">
          &larr; Tiali
        </Link>
        <LanguageSwitcher />
      </div>
      <div className="flex-1 overflow-auto px-4">
        <PDFViewer file={menuFile} />
      </div>
    </main>
  );
}
