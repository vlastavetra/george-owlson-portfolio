import React from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import ProjectTitle from '../module/ProjectTitle';
import SmallSubsection from '../module/SmallSubsection';
import BigSubsection from '../module/BigSubsection';
import styles from './Project.module.scss';

function Project() {
  return (
    <main className={styles.root}>
      <div className={styles.fixed}>
        <Link className={styles.link} to={'/'}>
          <svg className={styles.arrow} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m6.71677 40c-1.31021-2.736-3.39113-5.2794-6.242771-7.6301v-2.0231c1.233141.5781 2.312141 1.1561 3.236991 1.7341.92486.5395 1.69557 1.079 2.31214 1.6185v-33.6994h2.42775v33.6994c.6551-.5395 1.44509-1.079 2.36992-1.6185.9249-.578 1.9846-1.156 3.1792-1.7341v2.0231c-2.8131 2.3507-4.89402 4.8941-6.24276 7.6301z" fill="#000"/>
          </svg>
          Back to main
        </Link>
      </div>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '80px'}}>
          <ProjectTitle
            title='Divercity'
            description='Application for finding interesting events'
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}>
        </SmallSubsection>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.twoCollumn}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Problem</h2>
              <p className={styles.text}>
              A huge number of events take place daily, dozens of restaurants open.
              For many people, finding leisure is a problem and every day they spend hours thinking about where to eat or where to go, and in the end they often stay at home.
              </p>
              <h2 className={styles.title}>Idea</h2>
              <p className={styles.text}>
              Create an application that helps you find something to do in the evening and consider all the possible factors that can affect this: the user&apos;s mood, his preferences, the amount of free time, financial possibilities.
              </p>
              <h2 className={styles.title}>Conditions</h2>
              <ul className={styles.list}>
                <li>Make userflow simple and understandable to a user of any age, as there is no age limit for the application</li>
                <li>Make a convenient search and good filtering of events (time, place, category)</li>
                <li>Add the ability to create your own events</li>
              </ul>
            </div>
            <img
              className={styles.imageHorisontal}
              src="https://thumb.tildacdn.com/tild3835-3935-4238-b334-326437313430/-/format/webp/Divercity_hi.png"
              alt="divercity"
            />
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Job stories</h2>
            <p className={styles.text}>
              5 job stories were compiled, which formed an idea of the required functions and the further development of the application.
            </p>
          </div>
          <div className={styles.twoCollumn}>
            <div className={cx(styles.card, styles.textModule)}>
              <h3 className={styles.subTitle}>– Search</h3>
              <p>When I want to have fun somewhere, I want the app to find the right event or place for me so that I&apos;m happy with the choice and not looking for events in other places.</p>
              <h3 className={styles.subTitle}>– Recomendations</h3>
              <p>When I need to take a girl/boyfriend on a date, I want the app to show a good list with the trendiest and most popular restaurants, then my companion will have a good impression of my taste.</p>
            </div>
            <div className={cx(styles.card, styles.cardDark, styles.textModule)}>
              <h3 className={styles.subTitle}>To do:</h3>
              <p>Organize a convenient, quick and understandable search / filtering by events and places.</p>
            </div>
          </div>
          <div className={styles.twoCollumn}>
            <div className={cx(styles.card, styles.textModule)}>
              <h3 className={styles.subTitle}>– Creating an event</h3>
              <p>When I want to organize an event / event, I need simple and understandable functionality in the application so as not to leave this business halfway or go to another application.</p>
            </div>
            <div className={cx(styles.card, styles.cardDark, styles.textModule)}>
              <h3 className={styles.subTitle}>To do:</h3>
              <p>Create a convenient form for creating an event.</p>
            </div>
          </div>
          <div className={styles.twoCollumn}>
            <div className={cx(styles.card, styles.textModule)}>
              <h3 className={styles.subTitle}>– Sharing</h3>
              <p>When I want to invite my friends to a concert that I found in the app, I want to be able to share the event so that they know all the information about it.</p>
            </div>
            <div className={cx(styles.card, styles.cardDark, styles.textModule)}>
              <h3 className={styles.subTitle}>To do:</h3>
              <p>Add the ability to share an event, as well as make detailed event cards.</p>
            </div>
          </div>
          <div className={styles.twoCollumn}>
            <div className={cx(styles.card, styles.textModule)}>
              <h3 className={styles.subTitle}>– News/Stories</h3>
              <p>When I log into the app, I want to see stories/news about new places or activities that might be of interest to me.</p>
            </div>
            <div className={cx(styles.card, styles.cardDark, styles.textModule)}>
              <h3 className={styles.subTitle}>To do:</h3>
              <p>Add stories on main page.</p>
            </div>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Polling by event selection criteria</h2>
            <p className={styles.singleText}>
              A survey was conducted of 50 people aged from 18 to 38 years old, where we studied the main criteria for choosing events, as well as additional insights that affect a person&apos;s desire to visit a place or event.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild3035-3034-4262-a263-646532363164/-/format/webp/Frame_5_1.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Userflow</h2>
            <p className={styles.singleText}>
              The hardest part was creating a simple user flow. It is very important that user does not get lost in the application and quickly finds the necessary sections. After polls, A-B testing, the user&apos;s path acquired a simple and functional form that solved the task.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild3966-3534-4164-b631-323935333366/-/format/webp/Userflow.png"
            alt="divercity"
            style={{paddingRight: '100px'}}
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Prototype</h2>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild6362-6661-4132-b963-313566623835/-/format/webp/Divercity_prototype.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Visual design</h2>
            <h3 className={styles.subTitle}>Menu</h3>
            <p className={styles.text}>
              The main tabs of the application are Feed, Profile and Search. The search includes a carefully designed page with filters, from which the user begins his journey.
            </p>
            <h3 className={styles.subTitle}>Filters</h3>
            <p className={styles.text}>
              In the filters, you can select mood, city, time and categories. For convenience, a search and a calendar are built into the first paragraphs of the blocks.
            </p>
          </div>
          <img
            className={styles.imageVertical}
            src="https://thumb.tildacdn.com/tild3635-3765-4439-b065-633834663436/-/format/webp/Filters.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h3 className={styles.title}>Feed + Event page</h3>
            <p className={styles.text}>
            The main page has a stories with news, relevant events and recommendations. The cards show how many people are going to attend the event. On the event page, all the necessary information with the exact time, location, description and map.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild6634-3465-4536-b830-343064643739/-/format/webp/Frame_178_1.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h3 className={styles.title}>Search</h3>
            <p className={styles.text}>
            Events in the search are designed in the form of bright cards. The search is available in the form of a list and on the map.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://thumb.tildacdn.com/tild3563-6165-4965-a339-343362306132/-/format/webp/Group_162.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection/>
        <BigSubsection style={{paddingTop: '100px', paddingBottom: '100px'}}>
          <div className={styles.imgs}>
            <div>
              <h3 className={styles.centerTitle}>Autorization</h3>
              <img
                className={styles.imageHorisontal}
                src="https://thumb.tildacdn.com/tild3231-6265-4366-b236-616332613736/-/format/webp/_1.png"
                alt="divercity"
              />
            </div>
            <div>
              <h3 className={styles.centerTitle}>User profile</h3>
              <img
                className={styles.imageHorisontal}
                src="https://thumb.tildacdn.com/tild3863-6265-4035-a630-383539363132/-/format/webp/_1.png"
                alt="divercity"
              />
            </div>
            <div>
              <h3 className={styles.centerTitle}>Event creating form</h3>
              <img
                className={styles.imageHorisontal}
                src="https://thumb.tildacdn.com/tild6564-6338-4362-a239-313636373432/-/format/webp/__1.png"
                alt="divercity"
              />
            </div>
          </div>
        </BigSubsection>
      </section>
    </main>
  );
}

export default Project;
