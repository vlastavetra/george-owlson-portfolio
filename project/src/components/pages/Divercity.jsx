import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Divercity.module.scss';

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
            <h1 className={styles.projectTitle}>Divercity</h1>
            <span className={styles.description}>Приложение для поиска интересных событий</span>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src="https://habrastorage.org/webt/w6/n1/ka/w6n1kak8lj1wwe1gh4bahh2kpxq.jpeg"
                alt="divercity"
              />
            </div>
          </div>
          <div className={styles.rightSubsection}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Проблема</h2>
              <p className={styles.text}>
                Ежедневно проходит огромное количество событий, открываются десятки ресторанов. <br/>
                Для многих людей поиск досуга является проблемой и каждый день они часами думают где поесть или куда сходить, а в итоге часто остаются дома.
              </p>
            </div>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Описание</h2>
              <p className={styles.text}>
                Создать приложение, которое помогает найти занятие на вечер и учитывает все возможные факторы, которые могут на это повлиять: настроение пользователя, его предпочтения, количество свободного времени, финансовые возможности.
              </p>
            </div>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Условия</h2>
              <ul className={styles.list}>
                <li>Сделать userflow простым и понятным пользователю любого возраста, так как нет возрастного ограничения для приложения;</li>
                <li>Сделать удобный поиск и хорошую фильтрацию событий (время, место, категорию);</li>
                <li>Добавить возможность добавлять свои события</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>

          </div>
          <div className={styles.rightSubsection}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Job stories</h2>
              <p className={styles.text}>
                Было составлено 5  job stories, благодаря которым я определил важность этих функций и появились идеи по дальнейшему развитию приложения.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.centerSubsection}>
            <div className={styles.imageContainerFull}>
              <img
                className={styles.imageFull}
                src="https://habrastorage.org/webt/wy/xg/4o/wyxg4opnkyle-dncme-k5xrb9ja.png"
                alt="divercity"
              />
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
            <div className={styles.textModule}>
              <p className={styles.text}>
                Был проведен опрос 50 человек в возрасте от 18 до 38 лет, где изучили основные критерии выбора событий, а так же дополнительные инсайты, которые влияют на желание человека посетить место или событие.
              </p>
            </div>
          </div>
          <div className={styles.rightSubsection}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Опрос по критериям выбора событий</h2>
              <img
                className={styles.imageHorisontal}
                src="https://habrastorage.org/webt/zc/8k/bq/zc8kbq7ug1ltgrd-w-kkab0x6wk.jpeg"
                alt="divercity"
              />
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.centerSubsection}>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/7g/sa/pv/7gsapv8izgigbjemjtzc2vq6rae.jpeg"
              alt="divercity"
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.centerSubsection}>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/2t/ri/pn/2tripnehairmmjzdbuh6o6ht0fs.jpeg"
              alt="divercity"
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src="https://habrastorage.org/webt/qo/2g/9g/qo2g9gkrwlgzcth6lujrxq9-ouq.jpeg"
                alt="divercity"
              />
            </div>
          </div>
          <div className={styles.rightSubsection}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Визуальный дизайн</h2>
              <h3 className={styles.subTitle}>Меню</h3>
              <p className={styles.text}>
                Основные страницы приложения это Лента, Профиль и Поиск. Поиск включает в себя тщательно проработанную страницу с фильтрами, с которой пользователь начинает свой путь.
              </p>
              <h3 className={styles.subTitle}>Фильтры</h3>
              <p className={styles.text}>
                В фильтрах можно выбрать настроение, город, время и категории.
                Для удобства встроен поиск и календарь в первые пункты блоков.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.centerSubsection}>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/nd/ce/4h/ndce4hvhbytpx72k90labbxq-na.jpeg"
              alt="divercity"
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
          </div>
          <div className={styles.rightSubsection}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Поиск</h2>
              <p className={styles.text}>
              События в поиске оформлены в форме ярких карточек. <br/>Поиск доступен в виде списка и на карте.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.centerSubsection}>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/xc/0k/lp/xc0klpqm8oyn3aj9kdowiuncvse.jpeg"
              alt="divercity"
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
          </div>
          <div className={styles.rightSubsection}>
            <div className={styles.textModule}>
              <h2 className={styles.title}>Главная + Страница события</h2>
              <p className={styles.text}>
                События в поиске оформлены в форме ярких карточек. Поиск доступен в виде списка и на карте.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.centerSubsection}>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/_r/8u/57/_r8u57d_lf0bsmu9d3zjwjijs2i.jpeg"
              alt="divercity"
            />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.centerSubsection}>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/gk/_b/et/gk_betceyltkbge7_am-mv-mrd8.jpeg"
              alt="divercity"
            />
          </div>
          <div className={styles.centerSubsection}>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/lq/q4/fp/lqq4fp5f1tznuzuterzs0wr5-l4.jpeg"
              alt="divercity"
            />
          </div>
          <div className={styles.centerSubsection}>
            <img
              className={styles.imageHorisontal}
              src="https://habrastorage.org/webt/s1/m3/yx/s1m3yxjbhf8q2opcpt2wjzqhlqu.jpeg"
              alt="divercity"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Project;
