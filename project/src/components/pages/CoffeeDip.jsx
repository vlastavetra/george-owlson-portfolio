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
            title='Coffee Dip'
            description='Mobile app for ordering coffee to go'
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}>
          <img
            className={styles.imageVertical}
            src="https://habrastorage.org/webt/g6/38/vi/g638vi5ntk1exww4sjqulmc3wu8.png"
            alt="divercity"
          />
        </SmallSubsection>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Issue</h2>
            <p className={styles.text}>
              A coffee shop is opening soon for people who love delicious coffee, are always in a hurry and don&apos;t want to waste time by standing in queues
            </p>
          </div>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Idea</h2>
            <p className={styles.text}>
              Create a mobile application for order a coffee / desserts / sandwiches and pick it up at a coffee shop without a queue by number or code.
            </p>
          </div>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Conditions</h2>
            <ul className={styles.list}>
              <li>User path from start the application to to the order&apos;s confirmation as short as possible;</li>
              <li>Repeat the previous order available in one click;</li>
              <li>User can set pickup time.</li>
            </ul>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '60px'}}/>
        <BigSubsection style={{paddingTop: '60px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Customer Journey Map</h2>
            <p className={styles.text}>
              During the study, a user journey map was compiled with the basic functionality of the application and possible improvements in future updates.
            </p>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection>
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/ji/ay/c6/jiayc6vlyi0yiv99yi07nsskshc.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Userflow</h2>
            <p className={styles.singleText}>
              Created a detailed scenario with possible errors while using the application.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/n-/fc/5r/n-fc5rpligt2rrqiw2bfpubundm.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Visual design</h2>
            <h3 className={styles.subTitle}>Registration</h3>
            <p className={styles.text}>
              For the application&apos;s work, a simple registration is required using a phone number and specifying a name.
            </p>
          </div>
          <div className={styles.imgs}>
            <div>
              <h3 className={styles.centerTitle}>Step 1</h3>
              <img
                className={styles.imageHorisontal}
                src="https://habrastorage.org/webt/iz/uy/_f/izuy_fzt8z3qls4fs4p0nkmgnxk.png"
                alt="divercity"
              />
            </div>
            <div>
              <h3 className={styles.centerTitle}>Step 2</h3>
              <img
                className={styles.imageHorisontal}
                src="https://habrastorage.org/webt/q-/gx/h5/q-gxh5muktpvvqlx_rzfurwaphs.png"
                alt="divercity"
              />
            </div>
            <div>
              <h3 className={styles.centerTitle}>Step 3</h3>
              <img
                className={styles.imageHorisontal}
                src="https://habrastorage.org/webt/mb/md/r7/mbmdr7t-cxecuyu-bkt84boxpde.png"
                alt="divercity"
              />
            </div>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h3 className={styles.title}>Choose of coffee shop</h3>
            <p className={styles.text}>
              It&apos;s carried out by searching through geolocation, selecting a place on the map, or searching through a list.
            </p>
          </div>
          <div className={styles.imgs}>
            <div>
              <img
                className={styles.imageHorisontal}
                src="https://habrastorage.org/webt/nb/xo/ag/nbxoagqpnqzcl9sweltuqyt-bx0.png"
                alt="divercity"
              />
            </div>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Main page + coffee constructor</h2>
            <p className={styles.text}>
              On the main page there are menus, filters, the name and address of the selected coffee shop, and there is also a button to repeat the previous order.
            </p>
            <p className={styles.text}>
              When choosing a coffee, the user goes to the customize drink page, where he can select the volume, additional ingredients, syrups and sugar.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/uf/st/tv/ufsttvvjecucwmgxncqn_3mwloc.png"
            alt="divercity"
            style={{paddingRight: '30%'}}
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.imgs}>
            <div>
              <h3 className={styles.centerTitle}>Basket and payment</h3>
              <img
                className={styles.imageHorisontal}
                src="https://habrastorage.org/webt/8j/v0/ln/8jv0lnft9le4igtic7oyeev8upy.png"
                alt="divercity"
              />
            </div>
            <div>
              <h3 className={styles.centerTitle}>Order information</h3>
              <img
                className={styles.imageHorisontal}
                src="https://habrastorage.org/webt/g4/pc/a-/g4pca-7zp4npvjttr6ral36qzni.png"
                alt="divercity"
              />
            </div>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px', paddingBottom: '100px'}}/>
        <BigSubsection style={{paddingTop: '100px', paddingBottom: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>UI Kit</h2>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/dl/1f/ss/dl1fsssj44bssgmyhgcdjctsirq.png"
            alt="divercity"
            style={{paddingBottom: '30px'}}
          />
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/gg/bn/sh/ggbnshkuxvtgbh00wfa07usrngm.png"
            alt="divercity"
            style={{paddingBottom: '30px'}}
          />
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/rp/pa/x4/rppax4nyjt3gkqqwrtusq_siqbk.png"
            alt="divercity"
            style={{paddingBottom: '30px'}}
          />
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/jr/xb/xf/jrxbxfc-dw2gragreasi7crdkja.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
    </main>
  );
}

export default Project;
