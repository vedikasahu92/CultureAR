import React from "react";

function BackButton() {
  return (
    <button
      className="global-back-btn"
      type="button"
      onClick={() => window.history.back()}
    >
      ← Back
    </button>
  );
}

export default BackButton;