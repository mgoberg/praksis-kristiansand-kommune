import styles from "./page.module.css";

export default function Status2() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>Status 2</h1>
        <p>
          Andre statusrapport for vårt praksisarbeid hos Kristiansand Kommune
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.progressOverview}>
          <h2>WIP Progressbar</h2>
          <div className={styles.progressBar}>
            <div className={styles.progressBarFill} style={{ width: "15%" }}>
              <span>15% fullført</span>
            </div>
          </div>
        </div>

        <div className={styles.accomplishments}>
          <h2>Hva vi har oppnådd</h2>
          <ul className={styles.accomplishmentsList}>
            <li>
              <div className={styles.accomplishmentIcon}>✓</div>
              <div className={styles.accomplishmentContent}>
                <h3>Mål 1</h3>
                <p>Kommer!</p>
              </div>
            </li>
            <li>
              <div className={styles.accomplishmentIcon}>✓</div>
              <div className={styles.accomplishmentContent}>
                <h3>Mål 2</h3>
                <p>Kommer!</p>
              </div>
            </li>
            <li>
              <div className={styles.accomplishmentIcon}>→</div>
              <div className={styles.accomplishmentContent}>
                <h3>Mål 3</h3>
                <p>Kommer!</p>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.learnings}>
          <h2>Læring og innsikt</h2>
          <p>Kommer!</p>
          <div className={styles.keyInsights}>
            <div className={styles.insightItem}>
              <h3>Kommer!</h3>
              <p>Kommer!</p>
            </div>
            <div className={styles.insightItem}>
              <h3>Kommer!</h3>
              <p>Kommer!</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nextSteps}>
        <h2>Kommer!</h2>
        <p>Kommer!</p>
        <ul>
          <li>Kommer!</li>
          <li>Kommer!</li>
          <li>Kommer!</li>
          <li>Kommer!</li>
        </ul>
      </section>
    </div>
  );
}
