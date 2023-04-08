import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ show, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? <div>{children}</div> : null;

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById("myportal"));
  } else {
    return null;
  }
}
