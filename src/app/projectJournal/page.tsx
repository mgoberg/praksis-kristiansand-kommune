
"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Prosjektdagbok() {
  type Notat = {
    dato: string;
    kommentar: string;
  };

  const dagbokNotater: Notat[] = [
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
    {
      dato: "05.09.25",
      kommentar:
        "Dagen startet med at vi brukte tid på å diskutere ideene våre. Vi fikk også mulighet til å se en presentasjon om hvordan arkivsystemet deres fungere og kan forbedres. Etter presentasjonen hadde vi lunsj sammen med de ansatte. Resten av dagen jobbet vi med egne oppgaver i gruppen, før vi avsluttet dagen med en hyggelig ispause sammen med de ansatte.",
    },

    // Du kan legge til flere notater her
  ];

  // Helper to group notes by month
  const groupByMonth = (notes: Notat[]): Record<string, Notat[]> => {
    return notes.reduce<Record<string, Notat[]>>((acc, note) => {
      const [day, month, year] = note.dato.split(".");
      const key = `${month}.${year}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(note);
      return acc;
    }, {});
  };

  const notesByMonth = groupByMonth(dagbokNotater);
  const monthKeys = Object.keys(notesByMonth).sort((a, b) => {
    // Sort by year then month ascending (chronological)
    const [ma, ya] = a.split(".").map(Number);
    const [mb, yb] = b.split(".").map(Number);
    return ya - yb || ma - mb;
  });

  // State for toggles
  // Most recent month is the last in chronological order
  const [activeMonth, setActiveMonth] = useState<string | null>(monthKeys.length > 0 ? monthKeys[monthKeys.length - 1] : null);

  const handleMonthClick = (monthKey: string) => {
    setActiveMonth(monthKey);
  };

  // Helper to get month name
  const monthNames = [
    "Januar", "Februar", "Mars", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Desember"
  ];
  const getMonthLabel = (key: string): string => {
    const [month, year] = key.split(".");
    const mIdx = Number(month) - 1;
    return `${monthNames[mIdx]} ${year}`;
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Prosjektdagbok</h1>
        <p>
          Daglige og ukentlige notater fra praksisarbeidet hos Kristiansand kommune
        </p>
      </header>

      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap", marginBottom: "2em" }}>
        {monthKeys.map((monthKey: string) => (
          <button
            key={monthKey}
            style={{
              padding: "0.75em 1.5em",
              fontWeight: "bold",
              background: activeMonth === monthKey ? "#218838" : "#eee",
              color: activeMonth === monthKey ? "#fff" : "#222",
              border: "1px solid #ccc",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: activeMonth === monthKey ? "0 2px 8px rgba(0,0,0,0.08)" : "none"
            }}
            onClick={() => handleMonthClick(monthKey)}
          >
            {getMonthLabel(monthKey)}
          </button>
        ))}
      </div>

      <div className={styles.notater}>
        {activeMonth && notesByMonth[activeMonth] && (
          notesByMonth[activeMonth].map((notat: Notat, idx: number) => (
            <div key={idx} className={styles.notat}>
              <div className={styles.dato}>{notat.dato}</div>
              <p>{notat.kommentar}</p>
            </div>
          ))
        )}
        {!activeMonth && (
          <p style={{ color: "#888", fontStyle: "italic" }}>Velg en måned for å vise notater.</p>
        )}
      </div>
    </div>
  );
}
