import Image from "next/image";
import styles from "./page.module.css";

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
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>👩‍🎓</div>
              <h3>Frank</h3>
              <p>Skriv litt om deg</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>👨‍🎓</div>
              <h3>Oliver</h3>
              <p>Skriv litt om deg</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>👩‍🎓</div>
              <h3>Eline</h3>
              <p>Skriv litt om deg</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>👨‍🎓</div>
              <h3>Martin</h3>
              <p>
                Brenner for full-stack utvikling med spesiell interesse for
                systemutvikling.
              </p>
            </div>
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
