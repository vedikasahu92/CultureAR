import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            role,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setMessage(t("loginSuccess"));

        console.log("Logged in user:", data.user);
      } else {
        setMessage(data.message || t("loginFailed"));
      }
    } catch (error) {
      console.error(error);
      setMessage(t("serverFailed"));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <button
          type="button"
          style={styles.backButton}
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
        <select
          style={styles.language}
          value={i18n.language}
          aria-label={t("chooseLanguage")}
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
        <h1>✦ Culture Explorer</h1>

        <h2>{t("login")}</h2>
        <p>{t("welcomeBack")}</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder={t("passwordPlaceholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            style={styles.input}
            aria-label="Login as"
          >
            <option value="user">Login as User</option>
            <option value="guide">Login as Guide</option>
          </select>

          <button type="submit" style={styles.button}>
            {t("login")}
          </button>
        </form>
        <p style={{ marginTop: "20px" }}>
  {t("noAccount")} {" "}
  <a
    href="/signup"
    style={{
      color: "#d96b27",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    {t("signUp")}
  </a>
</p>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f1e8",
  },

  card: {
    width: "350px",
    padding: "40px",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    border: "none",
    borderRadius: "8px",
    background: "#333",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },

  message: {
    marginTop: "15px",
    fontWeight: "bold",
  },

  language: {
    padding: "8px 10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff",
    marginBottom: "16px",
  },

  backButton: {
    display: "block",
    marginBottom: "18px",
    padding: 0,
    background: "transparent",
    color: "#c15c3d",
    fontWeight: "600",
  },
};

export default Login;