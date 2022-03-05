import React from 'react';
import {Link} from 'react-router-dom';
import ProjectTitle from '../module/ProjectTitle';
import styles from './Project.module.scss';

function Project() {
  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
            <Link className={styles.button} to={'/'}>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.125 25C3.125 30.8016 5.42968 36.3656 9.53204 40.468C13.6344 44.5703 19.1984 46.875 25 46.875C30.8016 46.875 36.3656 44.5703 40.468 40.468C44.5703 36.3656 46.875 30.8016 46.875 25C46.875 19.1984 44.5703 13.6344 40.468 9.53204C36.3656 5.42968 30.8016 3.125 25 3.125C19.1984 3.125 13.6344 5.42968 9.53204 9.53204C5.42968 13.6344 3.125 19.1984 3.125 25ZM50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25ZM35.9375 23.4375C36.3519 23.4375 36.7493 23.6021 37.0424 23.8951C37.3354 24.1882 37.5 24.5856 37.5 25C37.5 25.4144 37.3354 25.8118 37.0424 26.1049C36.7493 26.3979 36.3519 26.5625 35.9375 26.5625H17.8344L24.5438 33.2687C24.689 33.414 24.8043 33.5865 24.8829 33.7763C24.9615 33.9661 25.002 34.1696 25.002 34.375C25.002 34.5804 24.9615 34.7839 24.8829 34.9737C24.8043 35.1635 24.689 35.336 24.5438 35.4813C24.3985 35.6265 24.226 35.7418 24.0362 35.8204C23.8464 35.899 23.643 35.9395 23.4375 35.9395C23.232 35.9395 23.0286 35.899 22.8388 35.8204C22.649 35.7418 22.4765 35.6265 22.3312 35.4813L12.9562 26.1063C12.8107 25.9611 12.6953 25.7887 12.6165 25.5989C12.5378 25.409 12.4972 25.2055 12.4972 25C12.4972 24.7945 12.5378 24.591 12.6165 24.4011C12.6953 24.2113 12.8107 24.0389 12.9562 23.8937L22.3312 14.5187C22.6246 14.2254 23.0226 14.0605 23.4375 14.0605C23.8524 14.0605 24.2504 14.2254 24.5438 14.5187C24.8371 14.8121 25.002 15.2101 25.002 15.625C25.002 16.0399 24.8371 16.4379 24.5438 16.7313L17.8344 23.4375H35.9375Z" fill="black"/>
              </svg>
            </Link>
          </div>
          <div className={styles.rightSubsection}>
            <ProjectTitle
              title='Coffee Dip'
              description='Приложение для заказа кофе онлайн'
              color='purple'
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
            <img
              className={styles.imageVertical}
              src="https://habrastorage.org/webt/g6/38/vi/g638vi5ntk1exww4sjqulmc3wu8.png"
              alt="divercity"
            />
          </div>
          <div className={styles.rightSubsection}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Issue</h2>
              <p className={styles.text}>
                Открывается кофейня для людей, которые любят вкусный кофе, постоянно спешат и не хотят стоять в очередях.
              </p>
            </div>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Idea</h2>
              <p className={styles.text}>
                Разработать мобильное приложение через которое можно заказать кофе / десерты / сэндвичи,  и забрать его в кофейне без очереди по номеру или коду.
              </p>
            </div>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Scope</h2>
              <ul className={styles.list}>
                <li>Сделать  путь с момента запуска приложения до подтверждения заказа максимально коротким;</li>
                <li>Добавить возможность повторения предыдущего заказа;</li>
                <li>Добавить функцию настройки времени, когда клиент сможет забрать заказ.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection} style={{paddingTop: '60px'}}>
          </div>
          <div className={styles.rightSubsection} style={{paddingTop: '60px'}}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Customer Journey Map</h2>
              <p className={styles.text}>
                During the study, a user journey map was compiled with the basic functionality of the application and possible improvements in future updates.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
          </div>
          <div className={styles.rightSubsection}>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/5e/nt/e7/5ente7sr_aj5rtu6hip9rb5idlm.png"
              alt="divercity"
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection} style={{paddingTop: '100px'}}>
          </div>
          <div className={styles.rightSubsection} style={{paddingTop: '100px'}}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Userflow</h2>
              <p className={styles.singleText}>
                Составлен подробный сценарий с возможными ошибками во время использования приложения
              </p>
            </div>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/8q/fy/hb/8qfyhb7v-lkz8u9-znjuieynrfq.png"
              alt="divercity"
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
          </div>
          <div className={styles.rightSubsection} style={{paddingTop: '100px'}}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Visual design</h2>
              <h3 className={styles.subTitle}>Registration</h3>
              <p className={styles.text}>
              Для работы приложения необходима простая регистрация с помощью номера телефона и указания имени.
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
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection} style={{paddingTop: '100px'}}>
          </div>
          <div className={styles.rightSubsection} style={{paddingTop: '100px'}}>
            <div className={styles.textModule}>
              <h3 className={styles.title}>Choose of coffee shop</h3>
              <p className={styles.text}>
                Осуществляется поиском через геолокацию, выбором места на карте либо поиск через список
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
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection} style={{paddingTop: '100px'}}>
          </div>
          <div className={styles.rightSubsection} style={{paddingTop: '100px'}}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Main page + coffee constructor</h2>
              <p className={styles.text}>
                На главной странице расположены меню, фильтры, название и адрес выбранной кофейни, а так же есть кнопка повтора предыдущего заказа.
              </p>
              <p className={styles.text}>
              При выборе кофе пользователь переходит на страницу настройки напитка, где можно выбрать объем, доп ингридиенты, сиропы и сахар
              </p>
            </div>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/uf/st/tv/ufsttvvjecucwmgxncqn_3mwloc.png"
              alt="divercity"
              style={{paddingRight: '30%'}}
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
          </div>
          <div className={styles.rightSubsection} style={{paddingTop: '100px'}}>
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
          </div>
        </section>
      </div>
    </main>
  );
}

export default Project;
