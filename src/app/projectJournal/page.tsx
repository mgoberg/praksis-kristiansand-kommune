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
      kommentar:
        "Dagen startet med at gruppen ble tildelt en case for å sette oss inn i hvordan søkeprosessen fungerer for byggesaker. Videre hadde vi et kort veiledningsmøte på 15 minutter for å få veiledning om casen og innsikt i hvordan prosessen oppleves for vanlige folk. Etter veiledningsmøtet hadde vi lunsjpause med de ansatte, før vi definerte tydelige roller innad i gruppen. Til slutt satte vi oss inn i repositoryen med tidligere oppgaver og prøvde å få alt til å fungere på alle sine maskiner.",
    },
    {
      dato: "29.08.25",
      kommentar:
        "Dagen startet med at vi utarbeidet en gruppekontakt og en samarbeidsavtale for å tydeliggjøre roller og forventninger i gruppen. Deretter jobbet vi med å få alle prosjektene til å kjøre på hver enkelt sin maskin, slik at alle hadde lik tilgang til materialet. Vi hadde deretter en hyggelig lunsj med fredagspizza sammen med de ansatte. Resten av dagen brukte vi på å diskutere ulike ideer til prosjektet, før vi presenterte og forklarte forslagene våre til de ansatte for å få innspill.",
    },
    {
      dato: "02.09.25",
      kommentar:
        "I dag gjennomgikk vi de ulike ideene vi har jobbet med så langt, og kom frem til en felles løsning for å forbedre informasjonsflyten innen plan og bygg, slik at brukerne lettere kan få oversikt over nødvendig informasjon. Vi presenterte løsningen for de interne ansatte og fikk tilbakemelding om at vi kunne fortsette på dette sporet. Etter møtet fordelte vi oppgaver internt i gruppen: Frank satte opp programmeringsmiljøet, Oliver og Eline begynte å tegne skisser og kartlegge dagens situasjon, mens Martin jobbet med å få “Utstillingsvindu”, en tidligere oppgave, opp og kjøre på maskinen sin. Etter lunsj fortsatte vi med de tildelte oppgavene og jobbet videre med å konkretisere løsningen.",
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
