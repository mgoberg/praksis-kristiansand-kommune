"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Modal from "../../components/Modal";

interface ImageModalProps {
  src: string;
  alt: string;
  caption?: string;
  isOpen: boolean;
  onClose: () => void;
}

// Component for image modal
const ImageModal = ({ src, alt, caption, isOpen, onClose }: ImageModalProps) => {
  if (!isOpen) return null;
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.imageModalContent}>
        <img src={src} alt={alt} className={styles.enlargedImage} />
        {caption && <div className={styles.imageCaption}>{caption}</div>}
      </div>
    </Modal>
  );
};

export default function Status1() {
  // State for modal
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>("");
  const [modalCaption, setModalCaption] = useState<string>("");
  
  // Function to open modal
  const openImageModal = (src: string, alt: string, caption: string) => {
    setModalImage(src);
    setModalAlt(alt);
    setModalCaption(caption);
  };
  
  // Function to close modal
  const closeImageModal = () => {
    setModalImage(null);
  };
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
            <img 
              src="/Dag2.png" 
              alt="Dag 1" 
              onClick={() => openImageModal("/Dag2.png", "Dag 1", "Gruppemøte der vi diskuterte ulike prosjektmuligheter, fordelte roller og planla arbeidet vårt.")}
              style={{ cursor: "pointer" }}
            />
            <img 
              src="/Diskusjon.jpg" 
              alt="Dag 2" 
              onClick={() => openImageModal("/Diskusjon.jpg", "Dag 2", "Teamet diskuterer ideer og løsninger for prosjektet vårt.")}
              style={{ cursor: "pointer" }}
            />
            <img 
              src="/matBilde.jpg" 
              alt="Dag 3" 
              onClick={() => openImageModal("/matBilde.jpg", "Dag 3", "Uten mat og drikke, duger helten ikke! Lunsjpause i den flotte kantina :)")}
              style={{ cursor: "pointer" }}
            />
            <img 
              src="/2.sep.jpg" 
              alt="Dag 4" 
              onClick={() => openImageModal("/2.sep.jpg", "Dag 4", "Vi jobbet videre med prosjektideer og gjorde oss klare for en pitch til de ansatte.")}
              style={{ cursor: "pointer" }}
            />
            <img 
              src="/PCBilde.jpg" 
              alt="Dag 5" 
              onClick={() => openImageModal("/PCBilde.jpg", "Dag 5", "Koding og utvikling av løsninger.")}
              style={{ cursor: "pointer" }}
            />
            <img 
              src="/frank_selfie.jpg" 
              alt="Dag 6" 
              onClick={() => openImageModal("/frank_selfie.jpg", "Dag 6", "Frank finner alltids tiden til en liten selfie. -Frank")}
              style={{ cursor: "pointer" }}
            />
            <img 
              src="/gang_bilde.jpg" 
              alt="Dag 7" 
              onClick={() => openImageModal("/gang_bilde.jpg", "Dag 7", "Gangene i bygget der vi jobber.")}
              style={{ cursor: "pointer" }}
            />
            <img 
              src="/plan_bilde.jpg" 
              alt="Dag 8" 
              onClick={() => openImageModal("/plan_bilde.jpg", "Dag 8", "Reguleringsplan fra 19-pil og bue.")}
              style={{ cursor: "pointer" }}
            />
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
      
      {/* Image Modal */}
      <ImageModal
        src={modalImage || ""}
        alt={modalAlt}
        caption={modalCaption}
        isOpen={modalImage !== null}
        onClose={closeImageModal}
      />
    </div>
  );
}
