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
          className="rounded-lg w-[250px] h-[250px] md:w-[300px] md:h-[300px]"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl md:text-6xl font-normal">{t("title")}</h1>
          <div className="mt-6 flex flex-col gap-3 text-2xl md:text-3xl opacity-90">
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
            <p className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              :{" "}
              <a
                href="https://www.instagram.com/tiali_ge/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity underline"
              >
                @tiali_ge
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              :{" "}
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
              Google :{" "}
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
