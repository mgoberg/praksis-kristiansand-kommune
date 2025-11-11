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
    {
      dato: "09.09.25",
      kommentar:
        "I dag jobbet vi først med Status 1-presentasjonen, hvor vi samlet og strukturerte det vi har gjort så langt i prosjektet. Etter dette hadde vi en felles lunsj med de ansatte, som ga en fin mulighet til å diskutere prosjektet mer uformelt. Resten av dagen fortsatte vi med egne oppgaver i gruppen.",
    },
    {
      dato: "12.09.25",
      kommentar:
        "Vi leverte først Status 1 oppgaven på Canvas, før vi lagde en presentasjon til et statusmøtet vi skal ha med kommunen neste uke. Vi tok oss også tid til en uformell prat om klassisk musikk, før vi hadde lunsj sammen med de ansatte. Resten av dagen jobbet vi videre med egne oppgaver, før vi tok helg etter en produktiv uke.",
    },
    {
      dato: "16.09.25",
      kommentar:
        "Dagen startet med at vi ferdigstilte forberedelsene til Status 1 presentasjonen vi skal holde på fredag i faget. Etter lunsj brukte vi tiden på å diskutere TiltaksAid og hvordan løsningen kan videreutvikles, før vi forberedte oss til statusmøtet med Kristiansand kommune klokken 14. På møtet presenterte vi hvordan vi har organisert oss i gruppen, arbeidsfordelingen, hvilke problemstillinger vi har valgt å fokusere på, samt hva vi har gjort så langt og planene videre. Underveis fikk vi gode tilbakemeldinger, som vi i etterkant diskuterte og planla hvordan vi kan følge opp videre.",
    },
    {
      dato: "23.09.25",
      kommentar:
        "Først hadde vi en samtale med veileder Dagfinn, der han ga innspill og presenterte nye ideer som kan brukes i det videre arbeidet. Deretter jobbet vi videre med egne oppgaver: Martin og Frank fokuserte på TiltaksAid, mens Eline og Oliver påjobbet videre med prototypen for Informasjonsportalen. Vi tok lunsj sammen med de ansatte før vi fortsatte arbeidet med oppgavene våre frem til 14:45.",
    },
    {
      dato: "26.09.25",
      kommentar:
        "Eline og Oliver begynte å utvikle Informasjonsportalen, der de satte opp prosjektet og organiserte mappestrukturen, mens Frank fullførte regningen av bruksareal på TiltaksAid. Etter lunsj fortsatte vi arbeidet med oppgavene vi hadde startet på tidligere, før vi til slutt diskuterte møtet vi skal ha med Oslo kommune neste uke, der de vil presentere sin Veiviser og vi får mulighet til å stille spørsmål.",
    },
    {
      dato: "30.09.25",
      kommentar:
        "Dagen startet med en kort samtale med veileder Dagfinn om det kommende møtet med Oslo kommune. Deretter jobbet vi videre med våre egne oppgaver frem til lunsj. Etter lunsj hadde vi et møte med Oslo kommune, som varte i omtrent 1 time og 30 minutter. Oslo kommune presenterte sin Veiviser, og vi fikk samtidig mulighet til å vise frem hva vi har jobbet med. Møtet inkluderte også en diskusjon om muligheten for et mulig samarbeid med Oslo kommune. Etter møtet diskuterte vi kort innholdet og delte våre refleksjoner, før vi avsluttet dagen.",
    },
    {
      dato: "03.10.25",
      kommentar:
        "Dagen startet med et møte med Trondheim kommune, som varte i omtrent halvannen time. Møtet hadde mye av samme struktur som det vi tidligere hadde med Oslo kommune, der Trondheim presenterte sin tilnærming og vi fikk mulighet til å vise frem hva vi har jobbet med. Etter lunsj jobbet vi videre med våre egne oppgaver og hadde ellers en rolig dag.",
    },
    {
      dato: "07.10.25",
      kommentar:
        "Vi begynte dagen med å jobbe videre der vi slapp forrige uke. Etter hvert kom Mari innom og vi fikk vist henne tanken bak informasjonsportalen. Hun likte ideen og ga oss konkret tilbakemelding som vi skal ta med videre i arbeidet. Etter lunsj fortsatte vi å jobbe med egne oppgaver.",
    },
    {
      dato: "10.10.25",
      kommentar:
        "Dagen startet med at Oliver og Eline jobbet videre med informasjonsportalen, mens Martin fortsatte arbeidet med TiltaksAid. Under lunsjen hadde vi en hyggelig prat med en av veilederne våre, der vi fikk nyttige tips om arbeidslivet og høre mer om deres erfaringer. Etter lunsj kom Frank innom, og vi fortsatte å jobbe videre med våre oppgaver. Før vi avsluttet dagen, ble vi overrasket med marsipankake fra de ansatte, en hyggelig avslutning på uka.",
    },
    {
      dato: "14.10.25",
      kommentar:
        "Dagfinn kom innom for å forklare en ny oppgave vi kan se på, som kan fungere som et forarbeid til en av bacheloroppgavene. Vi diskuterte oppgaven og vurderte om vi kommer til å ha tid til å jobbe med den i løpet av praksisperioden. Etter lunsj fortsatte vi med egne oppgaver, samtidig som vi begynte å tenke litt på hvordan vi eventuelt kunne gripe an den nye oppgaven dersom vi får tid.",
    },
    {
      dato: "17.10.25",
      kommentar:
        "Vi startet dagen med å lage status 2-side på praksisnettsiden vår, der vi oppsummerte hva vi har gjort så langt i perioden. Resten av dagen fortsatte vi med våre egne oppgaver.",
    },
    {
      dato: "21.10.25",
      kommentar:
        "Dagen gikk i hovedsak til videre arbeid med informasjonsportalen og TiltaksAid. Vi prøvde også å integrere TiltaksAid inn i portalen. Under lunsjen hadde vi en lang og interessant samtale med Dagfinn om både praksisprosjektet og andre spennende temaer. Etter lunsj fortsatte vi med våre egne oppgaver.",
    },
    {
      dato: "24.10.25",
      kommentar:
        "Dagen ble brukt til videre arbeid med egne oppgaver. Vi avtalte også et møte med Mari neste uke for å planlegge en workshop knyttet til informasjonsportalen.",
    },
    {
      dato: "28.10.25",
      kommentar:
        "Dagen startet med at vi lagde presentasjonen til status 2, der vi oppsummerte arbeidet så langt i praksisperioden. Senere hadde Eline og Oliver et møte med saksbehandlerne Mari og Renate for å diskutere informasjonsportalen. De fikk nyttige innspill og konkrete forslag til videre utvikling. Resten av dagen ble brukt til å jobbe videre med egne oppgaver.",
    },
    {
      dato: "04.11.25",
      kommentar:
        "Dagen startet med arbeid på egne oppgaver før vi tok lunsj sammen med de ansatte. Etter lunsj hadde vi et statusmøte med kommunen, der vi fikk vist frem hva vi har jobbet med så langt i praksisperioden. Vi fikk gode tilbakemeldinger på arbeidet, og samtalen dreide også inn på mulige bacheloroppgaver vi kan skrive i samarbeid med dem.",
    },

    {
      dato: "07.11.25",
      kommentar:
        "Vi begynte dagen med å skrive den avsluttende refleksjonen til nettsiden og leverte oppgaven i Canvas. Deretter planla vi hvordan filmingen til Expo-filmen skal gjennomføres på tirsdag. Etter lunsj fortsatte vi med egne oppgaver resten av dagen.",
    },
    {
      dato: "01.11.25",
      kommentar:
        "Dagen startet med filming av Expo-filmen, der vi fikk med et lite innslag fra Dagfinn. Etter lunsj jobbet vi videre med egne oppgaver, blant annet “Forarbeid før du søker”-siden på informasjonsportalen, mens Frank redigerte filmen.",
    },
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
  const [activeMonth, setActiveMonth] = useState<string | null>(
    monthKeys.length > 0 ? monthKeys[monthKeys.length - 1] : null
  );

  const handleMonthClick = (monthKey: string) => {
    setActiveMonth(monthKey);
  };

  // Helper to get month name
  const monthNames = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember",
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
          Daglige og ukentlige notater fra praksisarbeidet hos Kristiansand
          kommune
        </p>
      </header>

      <div
        style={{
          display: "flex",
          gap: "1em",
          flexWrap: "wrap",
          marginBottom: "2em",
        }}
      >
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
              boxShadow:
                activeMonth === monthKey
                  ? "0 2px 8px rgba(0,0,0,0.08)"
                  : "none",
            }}
            onClick={() => handleMonthClick(monthKey)}
          >
            {getMonthLabel(monthKey)}
          </button>
        ))}
      </div>

      <div className={styles.notater}>
        {activeMonth &&
          notesByMonth[activeMonth] &&
          notesByMonth[activeMonth].map((notat: Notat, idx: number) => (
            <div key={idx} className={styles.notat}>
              <div className={styles.dato}>{notat.dato}</div>
              <p>{notat.kommentar}</p>
            </div>
          ))}
        {!activeMonth && (
          <p style={{ color: "#888", fontStyle: "italic" }}>
            Velg en måned for å vise notater.
          </p>
        )}
      </div>
    </div>
  );
}
