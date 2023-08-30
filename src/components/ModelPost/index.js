import styles from "./ModelPost.module.css";

export default function ModelPost({ photoCover, children, title }) {
  return (
    <article className={styles.modelPostContainer}>
      <div
        className={styles.photoCover}
        style={{ backgroundImage: `url(${photoCover})` }}
      ></div>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.postContentContainer}>{children}</div>
    </article>
  );
}
