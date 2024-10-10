"use client";

import { useTranslations } from "next-intl";
import React from "react";

const Client = () => {
  const t = useTranslations("HomePage");
  return <h1>{t("title", { name: "John" })} from client component</h1>;
};

export default Client;
