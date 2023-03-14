import styles from "./Logo.module.css";

export default function ChatLogo() {
  return (
    <div className="flex">
      <div className={`${styles.chat_icon} ${styles.chat_front}`}>
        <div className={`${styles.chat_dot} ${styles.dot_1}`}></div>
        <div className={`${styles.chat_dot} ${styles.dot_2}`}></div>
        <div className={`${styles.chat_dot} ${styles.dot_3}`}></div>
      </div>
      <div
        className={`${styles.chat_icon} ${styles.chat_behind}`}
      >
        <div className={`${styles.chat_dot}`}></div>
        <div className={`${styles.chat_dot}`}></div>
        <div className={`${styles.chat_dot}`}></div>
      </div>
    </div>
  );
}
