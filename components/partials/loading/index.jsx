import React from "react";
//style
import styles from "./loader.module.css";
export default function Loading() {
  return (
    <div className={styles.loaderParent}>
      <div className={styles.loader}></div>
    </div>
  );
}
