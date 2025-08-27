import styles from "./page.module.css";

export default function Prosjektdagbok() {
  const dagbokNotater = [
    {
      dato: "22.08.25",
      kommentar:
        "I dag var vi på en meet and greet med Kristiansand kommune fra kl. 09.15 til 11.30. Dagen startet med at vi fikk utdelt nøkkelkort, før vi ble introdusert til de ansatte vi skal samarbeide med. Alle i gruppen presenterte seg kort og fortalte om egne interesser og hva de kunne tenke seg å jobbe med. Deretter fikk vi en presentasjon av tidligere bacheloroppgaver som kan være relevante å bygge videre på. Gruppen vår fikk også mulighet til å dele tanker om hvilke prosjekter vi kunne tenke oss å arbeide med. Til slutt fikk vi en omvisning i bygget og på arbeidsplassen vi skal bruke, før vi avsluttet dagen med felles lunsj sammen med de ansatte.",
    },
    {
      dato: "27.08.25",
      kommentar: "Kommer!",
    },

    // Du kan legge til flere notater her
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Prosjektdagbok</h1>
        <p>
          Daglige og ukentlige notater fra praksisarbeidet hos Kristiansand
          kommune
        </p>
      </header>

      <div className={styles.notater}>
        {dagbokNotater.map((notat, index) => (
          <div key={index} className={styles.notat}>
            <div className={styles.dato}>{notat.dato}</div>
            <p>{notat.kommentar}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
