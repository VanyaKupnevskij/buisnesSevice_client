import styles from './style.module.scss';
import pageGlobalStyles from '../../../pageGlobalStyle.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import SideNavbar from '../../../../components/SideNavbar';

import collection_item1Image from './images/content/collection-item1.jpg';
import collection_item2Image from './images/content/collection-item2.jpg';
import collection_item3Image from './images/content/collection-item3.jpg';
import collection_item4Image from './images/content/collection-item4.jpg';
import collection_item5Image from './images/content/collection-item5.jpg';

import work_icon1Image from './images/work-icon1.svg';
import work_icon2Image from './images/work-icon2.svg';
import work_icon3Image from './images/work-icon3.svg';

import slider_imgImage from './images/content/slider-img1.png';

function MainPage() {
  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="home" />

        <div className={pageGlobalStyles.content}>
          <h1
            className={pageGlobalStyles.title}
            style={{ visibility: 'hidden', position: 'fixed' }}>
            Головна
          </h1>
          <div className={styles.content_inner}>
            <div className={styles.wrapper}>
              <main className={styles.main}>
                <section className={styles.top}>
                  <div className={styles.top__inner}>
                    <div className={styles.top__slider}>
                      <div className={styles.top__slider_item}>
                        <div className={styles.top__slider_info}>
                          <h2 className={styles.top__slider_title}>Нагни бізнес!</h2>
                          <p className={styles.top__slider_text}>
                            Deep v you probably haven't heard of them banh mi synth actually
                            affogato. Aesthetic lyft ethical drinking vinegar austint
                          </p>
                        </div>
                        <img
                          className={styles.top__slider_img}
                          src={slider_imgImage}
                          alt="image slider"
                        />
                      </div>
                      <div className={styles.top__slider_item}>
                        <div className={styles.top__slider_info}>
                          <h2 className={styles.top__slider_title}>Нагни бізнес!</h2>
                          <p className={styles.top__slider_text}>
                            Deep v you probably haven't heard of them banh mi synth actually
                            affogato. Aesthetic lyft ethical drinking vinegar austint
                          </p>
                        </div>
                        <img
                          className={styles.top__slider_img}
                          src={slider_imgImage}
                          alt="image slider"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section className={styles.new_collection}>
                  <div className={styles.container_fluid}>
                    <h3 className={styles.new_collection__title}>Furniture new collection</h3>
                    <p className={styles.new_collection__text}>
                      Deep v you probably haven't heard of them banh mi synth actually affogato.
                      Aesthetic lyft ethical drinking vinegar austint
                    </p>
                    <div className={styles.collection}>
                      <a className={styles.collection__item} href="#">
                        <img
                          className={styles.collection__img}
                          src={collection_item1Image}
                          alt="collection image"
                        />
                        <div className={styles.collection__info}>
                          <h6 className={styles.collection__info_title}>
                            Truffaut literally trust
                          </h6>
                          <p className={styles.collection__info_text}>
                            Living room furntiture | Chair
                          </p>
                        </div>
                      </a>
                      <a className={styles.collection__item} href="#">
                        <img
                          className={styles.collection__img}
                          src={collection_item2Image}
                          alt="collection image"
                        />
                        <div className={styles.collection__info}>
                          <h6 className={styles.collection__info_title}>
                            Truffaut literally trust
                          </h6>
                          <p className={styles.collection__info_text}>
                            Living room furntiture | Chair
                          </p>
                        </div>
                      </a>
                      <a className={styles.collection__item} href="#">
                        <img
                          className={styles.collection__img}
                          src={collection_item3Image}
                          alt="collection image"
                        />
                        <div className={styles.collection__info}>
                          <h6 className={styles.collection__info_title}>
                            Truffaut literally trust
                          </h6>
                          <p className={styles.collection__info_text}>
                            Living room furntiture | Chair
                          </p>
                        </div>
                      </a>
                      <a className={styles.collection__item} href="#">
                        <img
                          className={styles.collection__img}
                          src={collection_item4Image}
                          alt="collection image"
                        />
                        <div className={styles.collection__info}>
                          <h6 className={styles.collection__info_title}>
                            Truffaut literally trust
                          </h6>
                          <p className={styles.collection__info_text}>
                            Living room furntiture | Chair
                          </p>
                        </div>
                      </a>
                      <a className={styles.collection__item} href="#">
                        <img
                          className={styles.collection__img}
                          src={collection_item5Image}
                          alt="collection image"
                        />
                        <div className={styles.collection__info}>
                          <h6 className={styles.collection__info_title}>
                            Truffaut literally trust
                          </h6>
                          <p className={styles.collection__info_text}>
                            Living room furntiture | Chair
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>

                <section className={styles.decor}>
                  <div className={styles.container}>
                    <h2 className={styles.decor__title}>
                      Aesthetic <br />
                      ethical drinking
                    </h2>
                    <p className={styles.decor__text}>
                      Deep v you probably haven't heard of them banh mi synth actually affogato.
                      Artlyft ethical the one drinking vinegar austint
                    </p>
                  </div>
                </section>

                <section className={styles.how_work}>
                  <div className={styles.container}>
                    <h3 className={styles.how_work__title}>How it works</h3>
                    <div className={styles.how_work__items}>
                      <div className={styles.how_work__items_box}>
                        <div
                          className={`${styles.how_work__item} ${styles.how_work__item__consultation}`}>
                          <img className={styles.how_work__item_img} src={work_icon1Image} alt="" />
                          <h6 className={styles.how_work__item_title}>Designer Consultation</h6>
                          <p className={styles.how_work__item_text}>
                            Kinfolk scenester authentic craft beer truffaut irony intelligentsia
                            YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
                          </p>
                        </div>
                        <div
                          className={`${styles.how_work__item} ${styles.how_work__item__production}`}>
                          <img className={styles.how_work__item_img} src={work_icon3Image} alt="" />
                          <h6 className={styles.how_work__item_title}>Production</h6>
                          <p className={styles.how_work__item_text}>
                            Everyday carry actually neutra authentic kogi shabby chic
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${styles.how_work__item} ${styles.how_work__item__measurements}`}>
                        <img className={styles.how_work__item_img} src={work_icon2Image} alt="" />
                        <h6 className={styles.how_work__item_title}>Measurements</h6>
                        <p className={styles.how_work__item_text}>
                          Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo
                          viral cliche
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
