import React from 'react';
import {Link} from 'react-router-dom';
import ProjectTitle from '../module/ProjectTitle';
import SmallSubsection from '../module/SmallSubsection';
import BigSubsection from '../module/BigSubsection';
import styles from './Project.module.scss';

function Project() {
  return (
    <main className={styles.root}>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '40px'}}>
          <Link className={styles.link} to={'/'}>
            <svg className={styles.arrow} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m6.71677 40c-1.31021-2.736-3.39113-5.2794-6.242771-7.6301v-2.0231c1.233141.5781 2.312141 1.1561 3.236991 1.7341.92486.5395 1.69557 1.079 2.31214 1.6185v-33.6994h2.42775v33.6994c.6551-.5395 1.44509-1.079 2.36992-1.6185.9249-.578 1.9846-1.156 3.1792-1.7341v2.0231c-2.8131 2.3507-4.89402 4.8941-6.24276 7.6301z" fill="#000"/>
            </svg>
            Back to main
          </Link>
        </SmallSubsection>
        <BigSubsection style={{paddingTop: '80px'}}>
          <ProjectTitle
            title='Alcon'
            description='Design of the Czech site Alcon'
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}>
        </SmallSubsection>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>About</h2>
            <p className={styles.text}>
            The task is to develop an information site where users can learn everything about lenses and care products for them.
            I was engaged in the design of the site and graphic elements.
            </p>
            <h3 className={styles.subTitle}>Main page</h3>
          </div>

          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild6133-3166-4763-b462-366130323537/-/format/webp/Mainpage_Alcon_UPD_r.jpg"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}>
        </SmallSubsection>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Lens order form</h3>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild6333-6139-4166-a638-393063393639/-/format/webp/Get_A_Trial_v1.jpg"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>FAQ</h3>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild6433-3635-4633-b235-346432303638/-/format/webp/Alcon_FAQ_page_r2.jpg"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px', paddingBottom: '100px'}}/>
        <BigSubsection style={{paddingTop: '100px', paddingBottom: '100px'}}>
          <div className={styles.textModule}>
            <h3 className={styles.subTitle}>Admin dashboard</h3>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild6539-6233-4036-b637-616339366131/-/format/webp/Alcon-PA-Edit-ECP_v2.jpg"
            alt="divercity"
          />
        </BigSubsection>
      </section>
    </main>
  );
}

export default Project;