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
          <ProjectTitle
            title="GEM"
            description="Investment financial crypto platform"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px" }}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Task</h2>
            <p className={styles.text}>
              The client wants to create an investment crypto platform where
              businessmen / users who want to invest in cryptocurrencies can buy
              a ready-made strategy. In all strategies, the risks are calculated
              and the company itself can adjust the strategies according to the
              state of the market. The user only needs to create a personal
              account, deposit funds into the account and choose a strategy. The
              platform should be implemented in the form of 2 types of
              dashboards: for users/clients and for administrators.
            </p>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "50px" }}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Wireframes</h2>
            <p className={styles.singleText}>
              After studying the task, we began to look at examples of
              competitors, took a pen and paper and began to draw up the first
              wireframes.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild6238-3934-4435-b366-666163326632/-/format/webp/wire_low.png"
            alt="gem"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px" }}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Userflow</h2>
            <p className={styles.singleText}>
              Next, we have to create 2 user flows. After all iterations with
              the client, the basic functionality and user capabilities were
              greatly simplified, and the main actions with the users portfolio
              (for example, rebalancing the portfolio or confirming the
              withdrawal / deposit of funds) are performed by the admin
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild3561-3065-4037-a666-386662306431/-/format/webp/Userflow_gem.png"
            alt="gem"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px" }}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Visual design</h2>
            <p className={styles.text}>
              Below are examples of several screens including: registration,
              client and admin dashboard, chosing / creation / buying or selling
              strategies.
            </p>
          </div>
          <img
            className={styles.imageVertical}
            src="https://thumb.tildacdn.com/tild3039-6562-4262-a233-316161353362/-/format/webp/registration.png"
            alt="divercity"
          />
          <img
            className={styles.imageVertical}
            src="https://thumb.tildacdn.com/tild3264-6333-4239-b638-663532366435/-/format/webp/mainscreen.png"
            alt="divercity"
          />
          <img
            className={styles.imageVertical}
            src="https://thumb.tildacdn.com/tild6233-3665-4264-b030-663534646331/-/format/webp/Create_strat.png"
            alt="divercity"
          />
          <img
            className={styles.imageVertical}
            src="https://thumb.tildacdn.com/tild3939-6339-4839-a263-643034353937/-/format/webp/chosestrat.png"
            alt="divercity"
          />
          <img
            className={styles.imageVertical}
            src="https://thumb.tildacdn.com/tild3865-3865-4663-a636-663436336138/-/format/webp/bought_strat.png"
            alt="divercity"
          />
          <img
            className={styles.imageVertical}
            src="https://thumb.tildacdn.com/tild3336-6361-4235-b032-393134313166/-/format/webp/Admindash.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
    </main>
  );
}

export default Project;
