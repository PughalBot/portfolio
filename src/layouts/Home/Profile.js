import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
  <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
    <DecoderText text="Hi there," start={visible} delay={500} />
  </Heading>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    I'm Pughal, a Full-Stack Developer from Chennai with experience in building 
    scalable web applications using <strong>React, Angular, Node.js, Express, 
    MongoDB, MySQL,</strong> and <strong>AWS</strong>. I enjoy creating 
    responsive user interfaces, optimizing backend systems, and deploying 
    applications to the cloud. You can find my professional profile on{' '}
    <Link href="https://www.linkedin.com/in/pughal/">LinkedIn</Link>.
  </Text>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    My projects span <strong>e-commerce platforms, real-time applications, and 
    portfolio websites</strong>, with a strong focus on frontend excellence and 
    full-stack integration. Explore my work on{' '}
    <Link href="https://github.com/PughalBot">GitHub</Link>, and feel free to 
    reach out if you'd like to collaborate on exciting projects or innovative ideas.
  </Text>
</Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Pughalesh Lakshmanan standing in a Photo Leaning on a porsche cayman car in the streets of malaysia"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
