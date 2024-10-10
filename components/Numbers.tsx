import { useFormatter, useTranslations } from "next-intl";
import React from "react";

const Numbers = () => {
  const t = useTranslations("HomePage");
  const format = useFormatter();

  return (
    <div>
      <h2 className="font-semibold">Numbers</h2>
      <p>
        Inline number:{" "}
        {format.number(499.9, { style: "currency", currency: "USD" })}
      </p>
      <p>
        Number embedded on string:{" "}
        {t(
          "price",
          { price: 32000.99 },
          {
            number: {
              currency: {
                style: "currency",
                currency: "USD",
              },
            },
          }
        )}
      </p>
      <hr />
    </div>
  );
};

export default Numbers;
