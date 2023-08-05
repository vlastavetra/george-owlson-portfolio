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
            title="SpeedVPN"
            description="Mobile application for managing VPN service"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "50px" }}>
          <div className={styles.textModule}>
            <p className={styles.text}>
              Our VPN designed to provide users with enhanced privacy and
              unrestricted online access. Our VPN offers two distinct options to
              cater to a wide range of user needs, ensuring a seamless and
              secure browsing experience for all.
            </p>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "30px" }}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Option 1: Premium Subscription</h3>
            <p className={styles.singleText}>
              For users seeking an ad-free and premium experience, our VPN
              offers a paid subscription model.
              <br />
              With this option, users gain access to an array of exclusive
              benefits and features.
              <br />
              As example: Speed Test & Check location with IP.
            </p>
          </div>
          <img
            className={styles.imageHorisontalSmall}
            src="https://framerusercontent.com/modules/0U4ldaYIXRPhWIppYfAj/cLLaNdaOrgaMTbUaectn/assets/1024/h4vzn6VGcJjcGxeE16tdOrMTrvo.png"
            alt="gem"
          />
          <div className={styles.textModule} style={{ paddingTop: "80px" }}>
            <h3 className={styles.subTitle}>
              Option 2: Free Usage with Advertisements
            </h3>
            <p className={styles.singleText}>
              Recognizing the diverse needs of our users, we also offer a free
              version of our VPN. This option allows users to access restricted
              content without paying a subscription fee.
              <br />
              However, free users are required to watch advertisements, which
              fund their usage.
              <br />
              Also, a free user is limited in the number of countries that he
              can choose.
            </p>
          </div>
          <img
            className={styles.imageHorisontalSmall}
            src="https://framerusercontent.com/images/m13XBhdSdqK1PwkNHT6n0zgabl4.png"
            alt=""
          />
          <div
            className={styles.textModule}
            style={{ paddingTop: "0px", marginTop: "-30px" }}
          >
            <p className={styles.singleText}>
              Main screen have 4 different animated states: Not connected,
              Connecting, Disconnecting and Error for situations when servers
              are down or user have problems with internet connection.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://framerusercontent.com/images/uyxl16SFS27z3Y9fDlfN5eKFrUo.jpg"
            alt=""
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px" }}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Userflow</h2>
            <p className={styles.singleText}>
              To understand the structure of the application in more detail, I
              made a user flow. Starting from the main screen, the user can
              seamlessly navigate through the application, effortlessly reaching
              their desired menu item in just two clicks. This streamlined
              approach ensures a smooth and intuitive user experience,
              minimizing unnecessary steps and maximizing user satisfaction.
              <br />
              <br />
              By analyzing the user flow, it becomes evident that the
              application's design prioritizes accessibility and simplicity,
              allowing users to quickly and efficiently access the full range of
              features available.
              <br />
              <br />
              Understanding the user flow not only highlights the application's
              overall usability but also serves as a valuable tool for
              identifying potential areas of improvement and optimizing the user
              journey even further.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://framerusercontent.com/images/DKZ22bKjWElP9NtGJYOl1jfeOM.jpg"
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
              We worked simultaneously on two flow and immediately tested
              prototypes on potential users.
              <br />
              Initially, we planned to make an absolutely black and white
              application, with one accent color, but the more screens appeared,
              the clearer it became that everything merges together. When we got
              to the creation of the subscription purchase page, where it was
              necessary to show all the benefits with icons, the standard linear
              icons did not fit at all, and then the product manager and I
              decided to experiment with color and shapes, and I created a set
              of illustration icons which perfectly fits to black and white
              background.
            </p>
          </div>
          <img
            className={styles.imageVertical}
            src="https://framerusercontent.com/images/WS2wO21s8qRmr465yKnCYJIAm4w.png"
            alt=""
          />
          <img
            className={styles.imageVertical}
            src="https://framerusercontent.com/images/StOudDbU7ayUnw9KfcGlMXSzrL8.jpg"
            alt=""
            style={{ paddingTop: "20px" }}
          />
          <div className={styles.textModule}>
            <p className={styles.text} style={{ paddingTop: "60px" }}>
              Since this is already the 3rd VPN product in our company, we
              wanted to experiment with the appearance so that it differs from
              most competitors on the market and at the same time follows the
              trends of modern applications.
              <br />
              <br />
              We weren’t in a hurry to create the logo, because we understood
              that any changes in the design of the application would greatly
              affect the logo, but during the process I tried different
              variants. I wanted it to be a logo that would live without changes
              for a long time, which means that you need to carefully study the
              market, follow trends and, preferably, overtake them.
              <br />
              <br />
              It's a fun fact that 2 weeks after the launch of our SpeedVPN, a
              new social network “threads” appeared with a black design, and
              twitter began to change after it.
            </p>
          </div>
          <img
            className={styles.imageVertical}
            src="https://framerusercontent.com/images/2wWDBK05rlSvUF0fedhvEgKfnk.jpg"
            alt=""
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection />
        <BigSubsection style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Conclusion</h3>
            <p className={styles.text}>
              In summary, our study of the pre-release SpeedVPN has given us
              valuable insights into how users interact with the app. Despite
              not being officially released, the app already shows promise in
              terms of user-friendliness and efficiency.
            </p>
          </div>
          <img
            className={styles.imageVertical}
            src="https://framerusercontent.com/images/n5T9dGoHESkrLSXzGLDzRBc.jpg"
            alt=""
          />
        </BigSubsection>
      </section>
    </main>
  );
}

export default Project;
