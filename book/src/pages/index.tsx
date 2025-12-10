import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.homepageHero}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Physical AI & Humanoid Robotics
        </Heading>
        <p className="hero__subtitle">A Comprehensive Textbook on Physical AI and Humanoid Robotics</p>
        <div className={styles.authorCredits}>
          <h3>Authors & Editors:</h3>
          <ul>
            <li>[Author 1 Name], [Affiliation]</li>
            <li>[Author 2 Name], [Affiliation]</li>
            {/* Add more authors/editors as needed */}
          </ul>
        </div>
        <div className={styles.tableOfContentsPreview}>
          <h2>Table of Contents Preview</h2>
          <p>Explore the foundational concepts and advanced applications within Physical AI and Humanoid Robotics.</p>
          <ul>
            <li>**Introduction:** Overview, Historical Context</li>
            <li>**Module 1: Foundations of Physical AI:** Sensors, Actuators, Control Systems</li>
            <li>**Module 2: Humanoid Robotics Principles:** Kinematics, Dynamics, Balance Control</li>
            <li>**Module 3: AI Integration:** Perception, Learning, Decision Making</li>
            <li>**Appendix:** References, Glossary</li>
          </ul>
        </div>
        <div className={styles.bookPreview}>
          <h2>Textbook Overview</h2>
          <p>This textbook provides a comprehensive exploration of Physical AI and Humanoid Robotics. It is structured into several key modules:</p>
          <ul>
            <li><strong>Introduction</strong>: Sets the stage with an overview and historical context of the field.</li>
            <li><strong>Module 1: Foundations of Physical AI</strong>: Covers essential components like sensors, actuators, and control systems.</li>
            <li><strong>Module 2: Humanoid Robotics Principles</strong>: Delves into kinematics, dynamics, and balance control specific to humanoids.</li>
            <li><strong>Module 3: AI Integration</strong>: Explores how AI technologies, such as perception, learning, and decision-making, are integrated into physical robots.</li>
            <li><strong>Appendix</strong>: Provides supplementary materials like references and a glossary.</li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/introduction/overview">
            Start Reading
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Textbook: ${siteConfig.title}`}
      description="A Comprehensive Textbook on Physical AI and Humanoid Robotics">
      <HomepageHero />
      <main>
        {/* Additional sections for homepage can be added here */}
      </main>
    </Layout>
  );
}