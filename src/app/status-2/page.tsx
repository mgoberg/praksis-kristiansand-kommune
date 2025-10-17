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

      <section className={styles.nextSteps}>
        <h2>Plan og Bygg</h2>
        <p>
          Plan og bygg i kommunen har ansvar for arealplanlegging, byggesaker og
          tilsyn. Avdelingen sørger for at utbygging skjer i tråd med lover,
          forskrifter og bærekraftige prinsipper, og bidrar til å utvikle gode
          og trygge bomiljøer.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.accomplishments}>
          <h2>Hva jobber vi med?</h2>
          <ul className={styles.accomplishmentsList}>
            <li>
              <div className={styles.accomplishmentIcon}>✓</div>
              <div className={styles.accomplishmentContent}>
                <h3>Sette opp Azure VM</h3>
                <p>
                  Det tas i brukt Github Actions med Github Container Registry
                  (GHCR) som tar i bruk Traefik som reverse proxy og Github
                  workflows. En commit til main branch trigger Github Actions
                  til å bygge et nytt image og pusher det til GHCR som VM
                  serveren puller og kjører gjennom docker i en container. Da
                  containeren er klar ordner Traefik trafikken til et domene.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.accomplishmentIcon}>✓</div>
              <div className={styles.accomplishmentContent}>
                <h3>Mockup for den neste bachelor gruppen</h3>
                <p>
                  Har utarbeidet en enkel mockup basert på DIBKs veiviser for å
                  sjekke om man oppfyller kriteriene for å søke dersom man skal
                  bygge på eiendommen sin. Mockupen skal fungere som en enkel
                  veileder for å hjelpe den neste bachelorgruppen å komme i
                  gang.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.accomplishmentIcon}>→</div>
              <div className={styles.accomplishmentContent}>
                <h3>Videreutvikle TiltaksAid</h3>
                <p>
                  TiltaksAid ble rullet tilbake til en tidligere versjon,
                  bestående av HTML, JS og CSS. Her har vi refaktorert
                  prosjektet og portet det over til React-rammeverket. Vi har
                  lagt inn et matrikkel-lag og et FKB bakgrunnslag for å
                  tydeliggjøre bebyggelser. Videre har vi laget en kontekst meny
                  hvor man kan skille hvilke kontekst man ønsker å bygge i. Vi
                  har også laget diverse kort for visning av informasjon om
                  eiendommen og utregning av bruksareal og bebygd areal.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.accomplishmentIcon}>→</div>
              <div className={styles.accomplishmentContent}>
                <h3>Informasjonsportal</h3>
                <p>
                  En mer oversiktlig nettside for kommunens byggesaksavdeling.
                  Det er planlagt å kunne legge inn tiltaksAid direkte på siden.
                  Nettsiden bruker tre nedtrekksmenyer for å gjøre det enklere å
                  finne frem til riktig informasjon under «Byggesak», og for å
                  gi et bedre overblikk. Sidene under byggesak er redesignet for
                  å gjøre dem lettere å lese og navigere i.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.learnings}>
          <h2>Læring og innsikt</h2>
          <p>
            Gjennom prosjektet har vi fått verdifull erfaring og innsikt i både
            faglige prosesser og samarbeid i tverrfaglige team. Her er noen av
            de viktigste læringene våre.
          </p>
          <div className={styles.keyInsights}>
            <div className={styles.insightItem}>
              <h3>Faglig kompetanser</h3>
              <p>
                Vi har lært mye om hvordan byggesøknadsprosesser fungerer og
                hvilke kriterier som går under dette.
              </p>
            </div>
            <div className={styles.insightItem}>
              <h3>Samarbeid i team</h3>
              <p>
                Vi har lært å samhandle i et tverrfaglig team med ulike
                spesialiserte kompetanser (eks. jurister, IT, byplanleggere
                osv.)
              </p>
            </div>
            <div className={styles.insightItem}>
              <h3>Eget arbeid</h3>
              <p>Være selvstendig og jobbe sammen som et team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.nextSteps}>
        <h2>Bidrag og veien videre</h2>
        <p>
          Gjennom prosjektet har gruppen bidratt med nye ideer, engasjement og
          godt samarbeid. Vi har utviklet konseptet for tiltaksAid og en
          informasjonsportal som skal gjøre byggesaksprosessen mer oversiktlig
          og brukervennlig. Underveis har vi gitt tilbakemeldinger på Dagfinns
          presentasjoner, delt erfaringer og hatt gode samtaler som har bidratt
          til videreutvikling av prosjektet og styrket samarbeidet i teamet.
        </p>
        <p>
          Videre ønsker vi å wrappe opp prosjektet og sikre god dokumentasjon
          slik at det kan danne et solid grunnlag for eventuell videre
          utvikling. Vi har også laget en mockup som kan brukes som inspirasjon
          og utgangspunkt for fremtidige bachelorgrupper som ønsker å bygge
          videre på prosjektet.
        </p>
      </section>
    </div>
  );
}
