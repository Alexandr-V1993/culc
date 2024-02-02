import React from "react";

function Footer() {
  return (
    <footer>
      <div class="wrapper">
        <div class="fmenu">
          <a class="fmenuitem" href="/doks">
            Политика конфиденциальности
          </a>
          <a class="fmenuitem" href="#">
            Контакты
          </a>
        </div>
        <div class="fmenu firstletterlogo">
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
