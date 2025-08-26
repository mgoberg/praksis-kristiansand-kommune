"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import styles from "./TeamMember.module.css";
import modalStyles from "./Modal.module.css";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

interface SocialLinks {
  linkedin?: string;
  github?: string;
}

interface TeamMemberProps {
  name: string;
  bio: string;
  avatar?: string;
  role?: string;
  socialLinks?: SocialLinks;
  details?: string;
}

const TeamMember = ({
  name,
  bio,
  avatar,
  role,
  socialLinks,
  details,
}: TeamMemberProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.teamMember} onClick={openModal}>
        <div className={styles.memberAvatar}>
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={100}
              height={100}
              className={styles.memberImage}
            />
          ) : (
            <div className={styles.avatarPlaceholder}>{name.charAt(0)}</div>
          )}
        </div>
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={modalStyles.personProfile}>
          <div className={modalStyles.profileHeader}>
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={150}
                height={150}
                className={modalStyles.profileImage}
              />
            ) : (
              <div className={modalStyles.avatarPlaceholder}>
                {name.charAt(0)}
              </div>
            )}
            <h2 className={modalStyles.profileName}>{name}</h2>
            {role && <p className={styles.profileRole}>{role}</p>}
          </div>

          <p className={modalStyles.profileBio}>{bio}</p>

          {details && (
            <div className={modalStyles.profileDetails}>
              <h3 className={modalStyles.detailsTitle}>Litt mer om {name}</h3>
              <p>{details}</p>
            </div>
          )}

          {socialLinks && (
            <div className={modalStyles.socialLinks}>
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${modalStyles.socialLink} ${modalStyles.linkedin}`}
                >
                  <BiLogoLinkedin />
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${modalStyles.socialLink} ${modalStyles.github}`}
                >
                  <BiLogoGithub />
                </a>
              )}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default TeamMember;
