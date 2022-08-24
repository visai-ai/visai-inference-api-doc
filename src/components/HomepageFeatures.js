import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Machine Translation",
    src: require("../../static/img/translation_logo.webp").default,
    href: "/inference-api/introduction",
    description: <>Translate from one language to another.</>,
  },
  {
    title: "OCR General Document",
    src: require("../../static/img/ocr_logo.webp").default,
    href: "/inference-api/introduction-1",
    description: (
      <>
        Extracting textual information from image into a machine-readable text.
      </>
    ),
  },
  {
    title: "Sentiment Analysis",
    src: require("../../static/img/sentiment_analysis_logo.webp").default,
    href: "/inference-api/introduction-2",
    description: (
      <>Text contextual extraction to determine people's feelings.</>
    ),
  },
  {
    title: "Speech to Text",
    src: require("../../static/img/asr_logo.webp").default,
    href: "/inference-api/introduction-3",
    description: <>Transcribing speech into text using deep neural networks.</>,
  },
  {
    title: "Word Tokenization",
    src: require("../../static/img/word-tokenization_logo.webp").default,
    href: "/inference-api/introduction-4",
    description: <>Splitting sentences of text into words.</>,
  },
];

function Feature({ src, title, href, description }) {
  return (
    <div className={clsx("col col--4")}>
      <Link className={styles.featuresLink} to={href}>
        <div className="text--center">
          <img src={src} className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h2 className={styles.title}>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
