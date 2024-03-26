"use client";
import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    // Проверяем, что код выполняется только в продакшн
    if (process.env.NODE_ENV === "production") {
      // Импортируем необходимый клиент
      (function (wbow) {
        var d = document,
          s = d.createElement("script"),
          l = d.scripts[d.scripts.length - 1];
        s.settings = wbow || {};
        s.src =
          "//dishonestseat.com/b/X/VVs.dnGMlv0/YyW/dBi-YDWt5ausZvXEIz/EeamM9/u/ZUUPlikvPqTRU_ylNJzGUO3jMcDBg/tpNCTGIj3RNKT/cTwOOMQq";
        s.async = true;
        l.parentNode.insertBefore(s, l);
      })({});

      // Yandex.Metrika counter
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym"
      );

      ym(96633373, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      });
    }
  }, []);

  return (
    <footer>
      <div className="wrapper">
        <div className="fmenu">
          <a className="fmenuitem" href="/doks">
            Политика конфиденциальности
          </a>
          <a className="fmenuitem" href="/contacts">
            Контакты
          </a>
        </div>
        <div className="fmenu firstletterlogo">
          <a href="/">
            <span>calcoffee.ru</span>
          </a>{" "}
          © 2024
        </div>
      </div>
    </footer>
  );
}

export default Footer;
