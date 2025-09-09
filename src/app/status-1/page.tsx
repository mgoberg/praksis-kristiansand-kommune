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
          Kristiansand kommune er en av Norges største kommuner med over 110,000
          innbyggere. Kommunen har et bredt spekter av tjenester og avdelinger
          som jobber for å sikre god livskvalitet for sine innbyggere.
        </p>
        <p>
          Vi jobber i en avdeling av kommunen som heter By- og stedsutvikling,
          her har de ansvar for reguleringsplaner, byggesaker, kart,
          eiendomskatt og oppmålingsforretning.
        </p>
        <p>
          Avdelingen består av et tverrfaglig team med ingeniører, planleggere
          og arkitekter som samarbeider for å utvikle og forbedre byens
          infrastruktur og offentlige rom.
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

        <div className={styles["gallery-container"]}>
          <section className={styles.gallery}>
            <img src="/Dag2.png" alt="Dag 1" />
            <img src="/Diskusjon.jpg" alt="Dag 2" />
            <img src="/matBilde.jpg" alt="Dag 3" />
            <img src="/2.sep.jpg" alt="Dag 4" />
            <img src="/PCBilde.jpg" alt="Dag 5" />
            <img src="/frank_selfie.jpg" alt="Dag 6" />
            <img src="/gang_bilde.jpg" alt="Dag 7" />
            <img src="/plan_bilde.jpg" alt="Dag 8" />
          </section>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>September 2025</div>
          <div className={styles.timelineContent}>
            <h2>Våre arbeidsoppgaver</h2>
            <p>
              Etter å ha sett på løsninger utviklet av tidligere
              bachelorgrupper, og satt oss inn i hvordan byggeprosessen
              fungerer, har vi valgt å fokusere på to ulike tilnærminger:
            </p>
            <div className={styles.challenges}>
              <h3>Hovedløsninger:</h3>
              <ul>
                <li>
                  Løsning 1: Forbedre hvordan informasjon vises og gjøres
                  tilgjengelig for brukere som for eksempel skal søke om
                  byggetillatelse.
                </li>
                <li>
                  Løsning 2: Videreutvikle en tidligere oppgave kalt TiltaksAid.
                </li>
              </ul>
            </div>
            <p>
              Vi har organisert arbeidet slik at alle får fordype seg i områder
              de er mest interesserte i og ønsker å utforske videre:
            </p>
            <li>Eline: Ansvar for logg, møtereferat, research til Løsning 1</li>
            <li>
              Oliver: Fokus på hvordan dagens situasjon er og førsteutkast av
              prototype
            </li>
            <li>
              Frank: Prosjektleder, dialog med ansatte, sette opp
              utviklingsmiljøer
            </li>
            <li>
              Martin: Fokus på sette seg inn i tidligere prosjekter og forbedre
              TiltaksAid
            </li>
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
