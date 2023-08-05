import React from "react";
import { Link } from "react-router-dom";
import ProjectTitle from "../module/ProjectTitle";
import SmallSubsection from "../module/SmallSubsection";
import BigSubsection from "../module/BigSubsection";
import styles from "./Project.module.scss";

function Project() {
  return (
    <main className={styles.root}>
      <div className={styles.fixed}>
        <Link className={styles.link} to={"/"}>
          <svg
            className={styles.arrow}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m6.71677 40c-1.31021-2.736-3.39113-5.2794-6.242771-7.6301v-2.0231c1.233141.5781 2.312141 1.1561 3.236991 1.7341.92486.5395 1.69557 1.079 2.31214 1.6185v-33.6994h2.42775v33.6994c.6551-.5395 1.44509-1.079 2.36992-1.6185.9249-.578 1.9846-1.156 3.1792-1.7341v2.0231c-2.8131 2.3507-4.89402 4.8941-6.24276 7.6301z"
              fill="#000"
            />
          </svg>
          Back to main
        </Link>
      </div>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "50px" }}>
          <ProjectTitle title="Graphics" description="" />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px" }}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>About</h2>
            <p className={styles.text}>
              Below are several graphic posters, keyvisuals and retouch images
              that I&apos;ve made.
            </p>
            <h3 className={styles.subTitle}>McDonald&apos;s + ZIQ</h3>
          </div>
          <div className={styles.twoImgs}>
            <img
              className={styles.imageHorisontal}
              src="https://thumb.tildacdn.com/tild3762-3065-4931-b936-303161373563/-/format/webp/rockstar_popstar_v3.jpg"
              alt="divercity"
            />
            <img
              className={styles.imageHorisontal}
              src="https://thumb.tildacdn.com/tild3139-6231-4539-b433-306665303238/-/format/webp/ZIC_engine_label_v1d.jpg"
              alt="divercity"
            />
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px" }}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Nissan / Qashqai KV</h3>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild6132-6434-4230-b732-303536663639/-/format/webp/shutterstock_1225073.jpg"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px" }}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Nissan / Qashqai salon retouch</h3>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild3364-6664-4364-b834-333730363730/-/format/webp/QQ_2020_Cacao_QQ0519.jpg"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px" }}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Datsun / Broshure KV</h3>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild3139-3861-4237-b138-396365343033/-/format/webp/Datsun-04_10_ALT_r.jpg"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px" }}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Lokomotiv / Posters</h3>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild6366-3635-4464-b335-316533313539/-/format/webp/Loko_posters.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px" }}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Adidas / Pulse HD</h3>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild3237-6131-4436-b035-376264656236/-/format/webp/pulsheHD_KV_4.jpg"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Gazpromneft / Loyalty program</h3>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild3434-3930-4235-b238-386366386265/-/format/webp/GPN__.jpg"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Cola-Cola / Cans desing</h3>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild3032-3337-4930-a337-326164663133/-/format/webp/CC_3cans_mockup.jpeg"
            alt="divercity"
          />
        </BigSubsection>
      </section>
    </main>
  );
}

export default Project;
