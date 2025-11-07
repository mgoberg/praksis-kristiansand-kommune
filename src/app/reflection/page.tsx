import styles from "../status-2/page.module.css";

export default function AvsluttendeRefleksjon() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>Avsluttende refleksjon</h1>
        <p>
          Avsluttende refleksjon for vårt praksisarbeid hos Kristiansand Kommune
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Oppsummering</h2>
        <p className={styles.sectionText}>
          I løpet av denne praksisperioden har vi jobbet med flere spennende
          oppgaver. Vi har fått innsyn i byggesaker sammen med en saksbehandler
          som har gitt oss forkunnskapene vi har trengt for å kunne begi oss ut
          på de andre prosjektene vi har jobbet med. Videre har vi jobbet med å
          refaktorere et gammelt bachelorprosjekt, hvor vi har forbedret
          struktur og kodekvalitet for å gjøre løsningen mer robust.
        </p>
        <p className={styles.sectionText}>
          Vi er satt sammen som et selvstendig konsulentteam her i Kristiansand
          kommune, hvor vi selv har hatt ansvar for hele arbeidsprosessen fra
          planlegging og prioritering til gjennomføring og evaluering. Dette har
          gitt oss verdifull erfaring i å samarbeide effektivt, ta beslutninger
          på egen hånd og levere resultater vi er veldig stolte av.
        </p>
        <p className={styles.sectionText}>
          Vi har videreutviklet TiltaksAid, et tidligere kjent studentprosjekt
          som har vært sentral i praksisperioden. Hensikten med prosjektet er å
          effektivisere søknadsprosessen for publikum ved å filtrere ut tiltak
          som ikke er søknadspliktige. Kodebasen var vanskelig å sette seg inn
          i, med lite dokumentasjon og avhengigheter som gjorde det krevende å
          få det til å kjøre på egne maskiner. Dette medførte mye tid i starten
          til feilsøking før vi til slutt tok avgjørelsen om å starte fra bunnen
          av. Istedenfor å videreutvikle den gamle løsningen, valgte vi å bruke
          ressurser fra det tidligere prosjektet som Supabase funksjoner og
          datasett for å bygge videre på konseptet.
        </p>
        <p className={styles.sectionText}>
          Vi har også utviklet en informasjonsportal som har som mål å forenkle
          tilgangen til informasjon om byggesøknad for brukere. Idéen oppstod da
          vi fikk en case der vi skulle sette oss i brukerenes sko og finne ut
          om det var mulig å bygge en garasje på en eiendom. Vi oppdaget raskt
          at prosessen ikke var så enkel som vi først hadde trodd. Dette førte
          til tanken om å lage en informasjonsportal som kunne gjøre prosessen
          mer forståelig og brukervennlig ved å samle og strukturere
          informasjonen om byggesøknader på en enkel og intuitiv måte.
        </p>
        <p className={styles.sectionText}>
          Underveis i praksisperioden har vi hatt gode og konstruktive samtaler
          med de som jobber her, særlig under lunsjen som vi har hver gang vi er
          her, da det ofte har bydd på faglig refleksjon. I tillegg til alle
          disse samtalene, så har vi også hatt statusmøter der vi har diskutert
          fremdrift, identifisert eventuelle utfordringer og problemer samtidig
          som vi har planlagt de neste stegene i arbeidet.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.learnings}>
          <h2>Frank</h2>
          <p>
            Praksisperioden hos Kristiansand kommune har vært både spennende og
            utfordrende. Til tross for at vi har til tider stanget hodet i
            veggen, så har det vært lærerikt og verdifullt. Jeg har jobbet som
            konsulent i et selvstendig team med andre studenter, med delt ansvar
            for å strukturere, gjennomføre og planlegge arbeidet.
          </p>
          <p>
            Prosessen har gitt lærerik innsikt i ulike teknologier med særlig
            fokus på backend, som Supabase, Docker, behandling av datasett og
            deployment pipeleines, og samtidig har jeg fått styrket forståelsen
            min for sammenhengen mellom teknologi og forretningsbehov
          </p>
          <p>
            Gjennom perioden har jeg vokst både faglig og personlig. Jeg har
            blitt tryggere på meg selv og mer selvstendig når det gjelder å
            prioritere og ta beslutninger hvor det ikke er et tydelig fasitsvar.
            Perioden har gitt meg et fint innblikk i rollen som konsulent og
            gitt meg motivasjon til å vokse videre innenfor feltet, både faglig
            og som person.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.learnings}>
          <h2>Martin</h2>
          <p>
            I denne praksiperioden har jeg fått spisset kunnskapene mine i både
            frontend og backend utvikling. Ved å skygge Frank i måten han har
            jobbet med Azure serveren så har jeg lært et knep eller to. Jeg har
            også fått jobbet med databasen til TiltaksAid som er satt opp i
            Supabase. Her har jeg lært om funksjoner i Supabase og hvordan man
            kan kalle på pre-fabrikerte spørringer inne i supabase med et RPC
            kall. Har også tilegnet meg svært verdifull arbeidserfaring ved å
            være ute i felt og jobbe sammen med Dagfinn, Rune og Sebastian.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.learnings}>
          <h2>Oliver</h2>
          <p>
            I løpet av praksisperioden i Kristiansand kommune har jeg lært mye
            om hvordan en kommune fungerer og hvilke prosesser som ligger bak
            arbeidet som gjøres for innbyggerne. Jeg har spesielt fått innsikt i
            byggesak og lært hvordan man finner og bruker relevant informasjon
            gjennom kommunens nettsider og systemer. Og hvordan vi kanskje kan
            forenkle denne prosessen for innbyggere også.
          </p>
          <p>
            Gjennom praksisen har jeg også fått et bedre innblikk i hvordan det
            er å jobbe i offentlig sektor, både når det gjelder samarbeid og
            samhandling med andre kommuner. Det har vært interessant å oppleve
            arbeidslivet på nært hold, og jeg har fått kjenne på hvordan
            imposter-syndrom kan påvirke selvtilliten når man starter på nye
            steder.
          </p>
          <p>
            Jeg har også fått erfaring med å jobbe i et selvstendig og agilt
            team, og lært hvor viktig kommunikasjon, fleksibilitet og samarbeid
            er for å løse oppgaver effektivt.
          </p>
          <p>
            Totalt sett har praksisperioden gitt meg nyttig erfaring og en bedre
            forståelse av både kommunal virksomhet og meg selv i en
            arbeidssituasjon.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.learnings}>
          <h2>Eline</h2>
          <p>
            Praksisperioden hos Kristiansand kommune har vært både spennende og
            lærerikt. Gjennom praksisen har jeg fått verdifull arbeidserfaring
            og fått kjenne på hvordan det er å være ute i jobb. Jeg har lært
            mye, blant annet om hvordan byggesøknadsprosessen fungere, hvordan
            man kan jobbe selvstendig i et team, og hvor viktig det er å be om
            hjelp når man lurer på noe. Hos kommunen har vi blitt tatt svært
            godt imot av både veilederne våre og de andre ansatte. Det har også
            vært mange hyggelige lunsjer, der vi har kunnet snakke om alt fra
            arbeidsoppgaver til gamle historie og mye mer.
          </p>
        </div>
      </section>

      <section className={styles.nextSteps}>
        <h2>Tusen takk!</h2>
        <p>
          Vi ønsker å rette en stor takk til Kristiansund kommune for at vi fikk
          ha praksisplassen vår hos dem. Det har vært en lærerik og givende
          opplevelse som har gitt oss verdifull innsikt i hvordan kommunen
          jobber i praksis. Vi vil også takke foreleserne våre, Hallgeir og
          Geir, for god veiledning, støtte og nyttige tilbakemeldinger underveis
          i prosessen. Deres engasjement og faglige kunnskap har vært til stor
          hjelp og inspirasjon gjennom hele prosjektet.
        </p>
      </section>
    </div>
  );
}
