import React from "react";
import { Helmet } from "react-helmet";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Machine Translation",
    src: require("/img/translation_logo.webp").default,
    href: "/inference-api/machine-translation-ai-marketplace",
    description: (
      <>AI can translate between Thai-English and English-Thai on documents.</>
    ),
  },
  {
    title: "OCR General Document",
    src: require("/img/ocr_logo.webp").default,
    href: "/inference-api/ocr-general-document-ai-marketplace",
    description: (
      <>
        AI can read images of documents such as PDF, PNG, and JPG and convert
        them into text.
      </>
    ),
  },
  {
    title: "Sentiment Analysis",
    src: require("/img/sentiment_analysis_logo.webp").default,
    href: "/inference-api/sentiment-analysis-product-review",
    description: (
      <>
        AI can classify emotions from text into 3 categories: positive, neutral,
        or negative.
      </>
    ),
  },
  {
    title: "Speech Segmentation",
    src: require("/img/speech_segmentaion_logo.webp").default,
    href: "/inference-api/speech-segmentation-ai-marketplace",
    description: (
      <>
        AI can detect human speech from other sounds and is widely used in
        voice-activated apps.
      </>
    ),
  },
  {
    title: "Speech to Text",
    src: require("/img/asr_logo.webp").default,
    href: "/inference-api/speech-to-text-ai-marketplace",
    description: (
      <>
        AI can transcribe speech into text, supporting multiple file types such
        as mp3, wav, and flac.
      </>
    ),
  },
  {
    title: "Text Classification",
    src: require("/img/text_classification_logo.webp").default,
    href: "/inference-api/text-classification-product-review",
    description: (
      <>
        AI categorizes text content by classifying topics or identifying
        responsible staff mentioned in the text.
      </>
    ),
  },
  {
    title: "Word Tokenization",
    src: require("/img/word-tokenization_logo.webp").default,
    href: "/inference-api/word-tokenization-ai-marketplace",
    description: (
      <>
        AI can split sentences into words for use in text search, keyword
        extraction, and data retrieval.
      </>
    ),
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
            <Feature key={idx} {...props}></Feature>
          ))}
        </div>
      </div>
    </section>
  );
}
