import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--visai-primary button--lg"
            to="/inference-api"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="VISAI API Documentation">
      <Head>
        <meta
          property="og:image"
          content="https://visai-ai.github.io/visai-inference-api-doc/assets/images/visai_logo_bg-187adad4c0115713b82b9d5b5bec16dc.png"
        />
        <meta property="og:description" content={siteConfig.tagline} />
        <meta property="twitter:title" content={siteConfig.title} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:image"
          content="https://visai-ai.github.io/visai-inference-api-doc/assets/images/visai_logo_bg-187adad4c0115713b82b9d5b5bec16dc.png"
        />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
