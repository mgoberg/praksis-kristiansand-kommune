import styles from "./page.module.css";

export default function Status1() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>Status 1</h1>
        <p>
          Første statusrapport for vårt praksisarbeid hos Kristiansand kommune
        </p>
      </section>

      {/* Om Arbeidsplassen section */}
      <section className={styles.workplace}>
        <h2>Om Kristiansand kommune</h2>
        <p>
          Kristiansand kommune er en av Norges største kommuner med over
          110,000 innbyggere. Kommunen har et bredt spekter av tjenester og
          avdelinger som jobber for å sikre god livskvalitet for sine innbyggere.
        </p>
        <p>Vi jobber i en avdeling av kommunen som heter By- og stedsutvikling, her har de ansvar for reguleringsplaner, byggesaker, kart, eiendomskatt og oppmålingsforretning.</p>
        <p>Avdelingen består av et tverrfaglig team med ingeniører, planleggere og arkitekter som samarbeider for å utvikle og forbedre byens infrastruktur og offentlige rom.</p>
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

        <div className={styles["gallery-container"]}>
          <section className={styles.gallery}>
            <img src="/Dag2.png" alt="Dag 1" />
            <img src="/2.sep.jpg" alt="Dag 2" />
            <img src="/Dag2.png" alt="Dag 3" />
            <img src="/Dag2.png" alt="Dag 4" />
            <img src="/Dag2.png" alt="Dag 5" />
            <img src="/Dag2.png" alt="Dag 6" />
          </section>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>September 2025</div>
          <div className={styles.timelineContent}>
            <h2>Våre arbeidsoppgaver</h2>
            <p>Kommer!</p>
            <div className={styles.challenges}>
              <h3>Viktige milepæler:</h3>
              <ul>
                <li>Satt oss inn i byggesaker</li>
                <li>Fått oversikten over pågående prosjekter</li>
                <li></li>
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
