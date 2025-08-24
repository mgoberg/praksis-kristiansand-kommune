import styles from "./page.module.css";

export default function Status1() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>Status 1</h1>
        <p>
          Første statusrapport for vårt praksisarbeid hos Kristiansand Kommune
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>August 2025</div>
          <div className={styles.timelineContent}>
            <h2>Oppstartsfase</h2>
            <p>
              I denne første fasen har vi fokusert på å bli kjent med
              Kristiansand Kommune og deres organisasjon. Vi har hatt innledende
              møter og satt opp prosjektstrukturen for vårt arbeid.
            </p>
            <div className={styles.milestones}>
              <h3>Viktige milepæler:</h3>
              <ul>
                <li>Etablert prosjektgruppe og rolleavklaring</li>
                <li>Gjennomført oppstartsmøte med kommunen</li>
                <li>Definert prosjektets omfang og mål</li>
                <li>Laget fremdriftsplan for praksisperioden</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>September 2025</div>
          <div className={styles.timelineContent}>
            <h2>Kommer!</h2>
            <p>Kommer!</p>
            <div className={styles.challenges}>
              <h3>Kommer!</h3>
              <ul>
                <li>Kommer!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.conclusion}>
        <h2>Kommer!</h2>
        <p>Kommer!</p>
      </section>
    </div>
  );
}
