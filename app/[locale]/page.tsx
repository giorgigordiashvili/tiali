import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations("home");

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-12 px-4 relative">
      <div className="absolute top-6 right-6">
        <LanguageSwitcher />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <Image
          src="/logo.png"
          alt="Tiali Restaurant Logo"
          width={300}
          height={300}
          priority
          className="rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-normal">{t("title")}</h1>
          <div className="mt-6 flex flex-col gap-2 text-xl md:text-2xl opacity-90">
            <p>
              {t("address")} :{" "}
              <a
                href="https://maps.app.goo.gl/46JqqC9GZgGptPw39?g_st=ifm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity underline"
              >
                {t("addressValue")}
              </a>
            </p>
            <p>
              {t("phone")} :{" "}
              <a
                href="tel:+995568818333"
                className="hover:opacity-100 transition-opacity underline"
              >
                568 818 333
              </a>
            </p>
            <p>
              {t("instagram")} :{" "}
              <a
                href="https://www.instagram.com/tiali_ge/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity underline"
              >
                @tiali_ge
              </a>
            </p>
            <p>
              {t("facebook")} :{" "}
              <a
                href="https://www.facebook.com/tiali.ge/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity underline"
              >
                tiali.ge
              </a>
            </p>
            <p>
              {t("google")} :{" "}
              <a
                href="https://share.google/hx9AUXPc7dtVEbkwP"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity underline"
              >
                Tiali • თიალი
              </a>
            </p>
            <Link
              href="/menu"
              className="hover:opacity-100 transition-opacity underline"
            >
              {t("menu")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
