import React from 'react';
import styles from './Project.module.scss';

function Project() {
  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.leftSubsection}>
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
      </div>
    </main>
  );
}

export default Project;
