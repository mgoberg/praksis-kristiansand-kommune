import Image from "next/image";
import styles from "./page.module.css";
import TeamMember from "../components/TeamMember";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.header}>
          <h1>Praksis hos Kristiansand kommune</h1>
          <p>
            På denne nettsiden vil vi dokumentere vårt praksisarbeid hos
            Kristiansand kommune.
          </p>
        </section>

        <section className={styles.content}>
          <h2>Vårt Team</h2>
          <div className={styles.teamGrid}>
            <TeamMember
              name="Frank"
              bio="Interesse for backend-utvikling og systemarkitektur."
              avatar="/Frank.jpg"
              role="Backend Utvikler & Prosjektleder"
              details="Frank er en engasjert student ved Universitetet i Agder med spesiell interesse for backend-utvikling med særlig fokus på Python og Javascript. Han er opptatt av å lage systemer som er effektive, og liker å jobbe med prosjekter som utfordrer hans tekniske ferdigheter."
              socialLinks={{
                linkedin: "https://www.linkedin.com/",
                github: "https://github.com/FrankUiA",
              }}
            />
            <TeamMember
              name="Oliver"
              bio="Interesse for full-stack utvikling med fokus på å levere fungerende og estetiske løsninger."
              avatar="/OliverBilde.jpg"
              role="Full-Stack Utvikler"
              details="Oliver studerer ved Universitetet i Agder og er opptatt av å skape helhetlige digitale løsninger. Han har erfaring med både frontend og backend, og liker å jobbe med prosjekter som kombinerer funksjonalitet og design."
              socialLinks={{
                linkedin: "https://www.linkedin.com/in/oliver-gyve/",
                github: "https://github.com/olivgyv",
              }}
            />
            <TeamMember
              name="Eline"
              bio="Interesse for frontend og UX, med fokus på å lage brukervennlige og praktiske løsninger."
              avatar="/ElineBilde.jpg"
              role="Frontend & UX Utvikler"
              details="Eline er en dedikert student ved Universitetet i Agder med fokus på frontend-utvikling og UX-design. Hun brenner for å skape intuitive og tilgjengelige brukeropplevelser, og liker å kombinere kreativitet med praktiske løsninger."
              socialLinks={{
                linkedin: "https://www.linkedin.com/in/eline-widvey/",
                github: "https://github.com/ElineWi",
              }}
            />
            <TeamMember
              name="Martin"
              bio="Brenner for full-stack utvikling med spesiell interesse for systemutvikling."
              avatar="/Martin.jpg"
              role="Full-Stack Utvikler"
              details="Martin er en engasjert og hardtarbeidende student ved Universitetet i Agder med en sterk interesse for full-stack utvikling. Han liker å jobbe med komplekse systemer og har erfaring med både frontend og backend teknologier. Martin er alltid ivrig etter å lære nye teknologier og forbedre sine ferdigheter."
              socialLinks={{
                linkedin:
                  "https://www.linkedin.com/in/martin-goberg-678534248/",
                github: "https://github.com/mgoberg",
              }}
            />
          </div>
        </section>

        <section className={styles.projectInfo}>
          <div className={styles.infoText}>
            <h2>Om Prosjektet</h2>
            <p>
              Dette praksisprosjektet er et samarbeid mellom vår gruppe fra
              Universitetet i Agder og Kristiansand Kommune. Målet er å anvende
              våre teoretiske kunnskaper i praksis og skape verdi for kommunen
              og dens innbyggere.
            </p>
            <p>
              Gjennom dette prosjektet får vi erfaring med reelle
              problemstillinger og prosjektarbeid i en profesjonell kontekst. Vi
              jobber tett med veiledere både fra universitetet og kommunen for å
              sikre faglig relevans og praktisk nytteverdi.
            </p>
              <h2> Oppgavebeskrivelse </h2>
            <p>
              Gruppen skal fungere som et agilt team som er “hyret” av Kristiansand kommune til å bidra i utvikling og forbedring av prosesser knyttet til plan- og byggesaker. Teamet skal jobbe selvstendig og ta ansvar for å identifisere prosjektideer, videreutvikle dem og gjennomføre iterativt arbeid mot ferdige leveranser.</p>
<p>Målet er å undersøke tidligere oppgaver og løsninger, og bygge videre på disse for å gjøre prosessene rundt søknader enklere, mer effektive og mer brukervennlige.

            </p>
          </div>
          <div className={styles.logoContainer}>
            <a
              href="https://www.kristiansand.kommune.no"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/L_KRS_Forenklet_byvaapen_horisontal.png"
                alt="Kristiansand Kommune Logo"
                width={250}
                height={83}
                className={styles.logo}
                priority
              />
            </a>
            <a href="https://uia.no" target="_blank" rel="noopener noreferrer">
              <Image
                src="/uia.png"
                alt="Universitetet i Agder Logo"
                width={200}
                height={100}
                className={styles.logo}
              />
            </a>
            <a
              href="https://kartai.no"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Kartai-logo_white.png"
                alt="KartAI Logo"
                width={200}
                height={100}
                className={styles.logo}
              />
            </a>
          </div>
        </section>

        <section className={styles.goals}>
          <h2>Mål og Ambisjoner</h2>
          <div className={styles.goalsList}>
            <div className={styles.goalItem}>
              <h3>Læringsmål</h3>
              <p>Kommer</p>
            </div>
            <div className={styles.goalItem}>
              <h3>Prosjektmål</h3>
              <p>Kommer</p>
            </div>
            <div className={styles.goalItem}>
              <h3>Innovasjon</h3>
              <p>Kommer</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
