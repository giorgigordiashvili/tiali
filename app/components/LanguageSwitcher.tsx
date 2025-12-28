"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "ka") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-4 text-2xl md:text-3xl">
      <button
        onClick={() => switchLocale("en")}
        className={`transition-opacity ${
          locale === "en" ? "opacity-100 underline" : "opacity-60 hover:opacity-100"
        }`}
      >
        EN
      </button>
      <span className="opacity-40">|</span>
      <button
        onClick={() => switchLocale("ka")}
        className={`transition-opacity ${
          locale === "ka" ? "opacity-100 underline" : "opacity-60 hover:opacity-100"
        }`}
      >
        KA
      </button>
    </div>
  );
}
