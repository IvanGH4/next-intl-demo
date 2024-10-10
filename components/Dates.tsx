import { useTranslations } from "next-intl";
import React from "react";

const Dates = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      <p>
        Date from string:{" "}
        {t(
          "ordered",
          { orderDate: new Date("2020-11-20T10:36:01.516Z") },
          {
            dateTime: {
              short: {
                day: "numeric",
                month: "short",
                year: "numeric",
              },
            },
          }
        )}
      </p>
      <hr />
    </div>
  );
};

export default Dates;
