import Image from "next/image";
import styles from "./page.module.css";
import TeamMember from "../components/TeamMember";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.header}>
          <h1>Praksis hos Kristiansand Kommune</h1>
          <p>
            På denne nettsiden vil vi dokumentere vårt praksisarbeid hos
            Kristiansand Kommune.
          </p>
        </section>

        <section className={styles.content}>
          <h2>Vårt Team</h2>
          <div className={styles.teamGrid}>
            <TeamMember
              name="Frank"
              bio="Skriv litt om deg"
              role="Student ved UiA"
              details="Frank er en engasjert student ved Universitetet i Agder med interesse... [FYLL INN HER FRANK]"
              socialLinks={{
                linkedin: "https://www.linkedin.com/",
                github: "https://github.com/",
              }}
            />
            <TeamMember
              name="Oliver"
              bio="Interesse for Full-stack utvikling med fokus på å levere fungerende og estetiske løsninger."
              avatar="/OliverBilde.jpg"
              role="Student ved UiA"
              details="Oliver studerer ved Universitetet i Agder og er opptatt av å skape helhetlige digitale løsninger. Han har erfaring med både frontend og backend, og liker å jobbe med prosjekter som kombinerer funksjonalitet og design."
              socialLinks={{
                linkedin: "https://www.linkedin.com/",
                github: "https://github.com/",
              }}
            />
            <TeamMember
              name="Eline"
              bio="Interesse for frontend og UX, med fokus på å lage brukervennlige og praktiske løsninger."
              avatar="/ElineBilde.jpg"
              role="Student ved UiA"
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
              role="Student ved UiA"
              details="Martin er en allsidig utvikler med bakgrunn fra Universitetet i Agder. Han har kompetanse innen både frontend og backend, og er spesielt interessert i systemutvikling og API'er."
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

            <b>KartAI</b>
            <p>
              Skrive noe om KartAI og de forskjellige prosjektene vi skal jobbe
              med? Dette kan skrives mer om på onsdag.
            </p>
          </div>
          <div className={styles.logoContainer}>
            <Image
              src="/L_KRS_Forenklet_byvaapen_horisontal.png"
              alt="Kristiansand Kommune Logo"
              width={250}
              height={83}
              className={styles.logo}
              priority
            />
            <Image
              src="/uia.png"
              alt="Universitetet i Agder Logo"
              width={200}
              height={100}
              className={styles.logo}
            />
            <Image
              src="/Kartai-logo_white.png"
              alt="KartAI Logo"
              width={200}
              height={100}
              className={styles.logo}
            />
          </div>
        </section>

        <section className={styles.goals}>
          <h2>Mål og Ambisjoner</h2>
          <div className={styles.goalsList}>
            <div className={styles.goalItem}>
              <h3>Læringsmål</h3>
              <p>Skrive litt om våre læringsmål</p>
            </div>
            <div className={styles.goalItem}>
              <h3>Prosjektmål</h3>
              <p>Hva ønsker vi å oppnå med prosjektet?</p>
            </div>
            <div className={styles.goalItem}>
              <h3>Innovasjon</h3>
              <p>Hvordan bidrar vår praksis til innovasjon i kommunen?</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
