"use client";
import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    // Проверяем, что код выполняется только в продакшн
    if (process.env.NODE_ENV === "production") {
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

      // Добавляем скрипт glizauvo.net
      (function (d, z, s) {
        s.src = "https://" + d + "/401/" + z;
        try {
          (document.body || document.documentElement).appendChild(s);
        } catch (e) {}
      })("glizauvo.net", 7243075, document.createElement("script"));
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
