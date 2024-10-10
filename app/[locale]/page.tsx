import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import Client from "@/components/Client";
import Numbers from "@/components/Numbers";
import Dates from "@/components/Dates";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <Numbers />
      <Dates />
      <Client />
      {t("message", { count: 3580 })}
      {t.rich("rich_text", {
        highlight: (chunks) => <span className="bg-yellow-300">{chunks}</span>,
      })}
      <h2>{t("nested.text")}</h2>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
