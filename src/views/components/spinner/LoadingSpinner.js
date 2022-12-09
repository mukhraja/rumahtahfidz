import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="loading-spinner"></div>
    </div>
  );
}
