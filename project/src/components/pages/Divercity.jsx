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
            title='Divercity'
            description='Приложение для поиска интересных событий'
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}>
          <img
            className={styles.imageVertical}
            src="https://habrastorage.org/webt/w6/n1/ka/w6n1kak8lj1wwe1gh4bahh2kpxq.jpeg"
            alt="divercity"
          />
        </SmallSubsection>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Issue</h2>
            <p className={styles.text}>
              Ежедневно проходит огромное количество событий, открываются десятки ресторанов. <br/>
              Для многих людей поиск досуга является проблемой и каждый день они часами думают где поесть или куда сходить, а в итоге часто остаются дома.
            </p>
          </div>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Idea</h2>
            <p className={styles.text}>
              Создать приложение, которое помогает найти занятие на вечер и учитывает все возможные факторы, которые могут на это повлиять: настроение пользователя, его предпочтения, количество свободного времени, финансовые возможности.
            </p>
          </div>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Scope</h2>
            <ul className={styles.list}>
              <li>Сделать userflow простым и понятным пользователю любого возраста, так как нет возрастного ограничения для приложения;</li>
              <li>Сделать удобный поиск и хорошую фильтрацию событий (время, место, категорию);</li>
              <li>Добавить возможность добавлять свои события</li>
            </ul>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}>
        </SmallSubsection>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Job stories</h2>
            <p className={styles.text}>
              Было составлено 5  job stories, благодаря которым я определил важность этих функций и появились идеи по дальнейшему развитию приложения.
            </p>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection>
          <div className={cx(styles.card, styles.textModule)}>
            <h3 className={styles.subTitle}>Feature</h3>
            <p>Smart search by events, easy filters.</p>
          </div>
        </SmallSubsection>
        <BigSubsection>
          <div className={styles.cards}>
            <div className={cx(styles.card, styles.textModule)}>
              <h3 className={styles.subTitle}>Cure for boredom</h3>
              <p>Когда я хочу где-нибудь развлечься, я хочучтобы приложение подобрало подходящее мне событие или место, чтобы я остался доволен выбором и не искал события в других местах.</p>
            </div>
            <div className={cx(styles.card, styles.textModule)}>
              <h3 className={styles.subTitle}>Occasion</h3>
              <p>Когда мне нужно сводить девушку/парняна свидание, я хочу чтобы приложение показало хороший список с самыми модными и популярными ресторанами, тогда у моего спутника останется хорошее впечатление о моём вкусе.</p>
            </div>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection>
          <div className={cx(styles.card, styles.textModule)}>
            <h3 className={styles.subTitle}>Feature</h3>
            <p>Simple creation form with enough fields.</p>
          </div>
        </SmallSubsection>
        <BigSubsection>
          <div className={styles.cards}>
            <div className={cx(styles.card, styles.textModule)}>
              <h3 className={styles.subTitle}>Creating an event</h3>
              <p>Когда я хочу организовать событие/мероприятие, мне нужен простойи понятный функционал в приложении, чтобы не бросить это дело на пол пути или не уйти в другое приложение.</p>
            </div>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection>
          <div className={cx(styles.card, styles.textModule)}>
            <h3 className={styles.subTitle}>Feature</h3>
            <p>Event sharing with extra information.</p>
          </div>
        </SmallSubsection>
        <BigSubsection>
          <div className={styles.cards}>
            <div className={cx(styles.card, styles.textModule)}>
              <h3 className={styles.subTitle}>Sharing</h3>
              <p>Когда я хочу позвать друзей на концерт, который я нашёл в приложении, я хочу чтоб была возможность поделиться мероприятием, чтоб они узнали о нём всю информацию.</p>
            </div>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection>
          <div className={cx(styles.card, styles.textModule)}>
            <h3 className={styles.subTitle}>Feature</h3>
            <p>Stories on main page.</p>
          </div>
        </SmallSubsection>
        <BigSubsection>
          <div className={styles.cards}>
            <div className={cx(styles.card, styles.textModule)}>
              <h3 className={styles.subTitle}>News</h3>
              <p>Когда я захожу в приложение, я хочу видеть сториз/новости о новых местах или мероприятиях, которые могли бы меня заинтересовать.</p>
            </div>
          </div>
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <p className={styles.singleText}>
              Был проведен опрос 50 человек в возрасте от 18 до 38 лет, где изучили основные критерии выбора событий, а так же дополнительные инсайты, которые влияют на желание человека посетить место или событие.
            </p>
          </div>
        </SmallSubsection>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Polling by event selection criteria</h2>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/cy/4p/wy/cy4pwyai89huwrxmguh-ojdz-8a.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <p className={styles.singleText}>
              Самым сложным моментом было создание простого пути пользователя. Очень важно, чтобы он не терялсяв приложении и быстро находил необходимые разделы. После опросов, А-Б тестирований путь пользователя обрёл простой и функциональный вид, который решал поставленную задачу.
            </p>
          </div>
        </SmallSubsection>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.textModule}>
            <h2 className={styles.title}>Userflow</h2>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/_n/wk/rr/_nwkrr0m7m3s3sdoaqqvr0msf3s.png"
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
            src="https://habrastorage.org/webt/sf/ho/oy/sfhooymczezxh5pqdshixayvhtc.png"
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
              Основные страницы приложения это Лента, Профиль и Поиск. Поиск включает в себя тщательно проработанную страницу с фильтрами, с которой пользователь начинает свой путь.
            </p>
            <h3 className={styles.subTitle}>Filters</h3>
            <p className={styles.text}>
              В фильтрах можно выбрать настроение, город, время и категории.
              Для удобства встроен поиск и календарь в первые пункты блоков.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/yb/up/bs/ybupbszo7rrvd4b9wh28gl4lfma.png"
            alt="divercity"
            style={{paddingRight: '250px'}}
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px'}}/>
        <BigSubsection style={{paddingTop: '100px'}}>
          <div className={styles.imgs}>
            <div>
              <h3 className={styles.centerTitle}>Autorization</h3>
              <img
                className={styles.imageHorisontal}
                src="https://habrastorage.org/webt/mr/gx/lh/mrgxlh6xevxlrjh0pot7ud32omq.png"
                alt="divercity"
              />
            </div>
            <div>
              <h3 className={styles.centerTitle}>User profile</h3>
              <img
                className={styles.imageHorisontal}
                src="https://habrastorage.org/webt/z7/sl/3a/z7sl3affcxhwenmonzzvfhddjou.png"
                alt="divercity"
              />
            </div>
            <div>
              <h3 className={styles.centerTitle}>Event creating form</h3>
              <img
                className={styles.imageHorisontal}
                src="https://habrastorage.org/webt/pn/or/gy/pnorgyhiu0jesuf8yp14mxdpekg.png"
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
            <h3 className={styles.title}>Main page + Event page</h3>
            <p className={styles.text}>
              События в поиске оформлены в форме ярких карточек. Поиск доступен в виде списка и на карте.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/y4/xy/qc/y4xyqcfik2oyrzrx8jjkpothib8.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
      <section className={styles.section}>
        <SmallSubsection style={{paddingTop: '100px', paddingBottom: '100px'}}/>
        <BigSubsection style={{paddingTop: '100px', paddingBottom: '100px'}}>
          <div className={styles.textModule}>
            <h3 className={styles.title}>Search</h3>
            <p className={styles.text}>
              События в поиске оформлены в форме ярких карточек. <br/>Поиск доступен в виде списка и на карте.
            </p>
          </div>
          <img
            className={styles.imageHorisontal}
            src="https://habrastorage.org/webt/ye/ha/9h/yeha9h1cgko8o470mltuh8z74ls.png"
            alt="divercity"
          />
        </BigSubsection>
      </section>
    </main>
  );
}

export default Project;
