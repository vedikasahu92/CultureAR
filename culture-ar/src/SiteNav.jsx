import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

export default function SiteNav({ dark = false }) {
  const { t } = useTranslation();

  return (
    <nav className="navbar" style={dark ? { background: "#222" } : undefined}>
      <div className="logo"><span>✦</span> {t("siteName")}</div>
      <div className="nav-links">
        <Link to="/">{t("home")}</Link>
        <Link to="/explore">{t("explore")}</Link>
        <Link to="/ar">{t("scanner")}</Link>
        <Link to="/tourplan">{t("tourPlan")}</Link>
        <a href="/#about">{t("about")}</a>
      </div>
      <div className="nav-actions">
        <select
          className="language"
          aria-label={t("chooseLanguage")}
          value={i18n.language}
          onChange={(event) => i18n.changeLanguage(event.target.value)}
        >
          <option value="en">🌐 EN</option>
          <option value="hi">🌐 हिंदी</option>
          <option value="bn">🌐 বাংলা</option>
          <option value="ta">🌐 தமிழ்</option>
          <option value="te">🌐 తెలుగు</option>
          <option value="mr">🌐 मराठी</option>
          <option value="gu">🌐 ગુજરાતી</option>
          <option value="kn">🌐 ಕನ್ನಡ</option>
          <option value="ml">🌐 മലയാളം</option>
          <option value="pa">🌐 ਪੰਜਾਬੀ</option>
          <option value="od">🌐 ଓଡ଼ିଆ</option>
        </select>
        <Link to="/login" className="login-btn">{t("login")}</Link>
      </div>
    </nav>
  );
}