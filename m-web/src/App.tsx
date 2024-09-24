import styles from './assets/styles/app.module.scss';
import Main from './assets/components/main/Main';
import Second from './assets/components/second/Second';
import Third from './assets/components/third/Third';
import Footer from './assets/components/footer/Footer';
import Carousel from './assets/components/carousel/Carousel';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.app}>
      {/*<Auth />*/}
      <Main cb={setShow} />
      {show && <>
        <Second/>
        <Third/>
        <Carousel />
        <Footer />
      </>}
    </div>
  );
}

export default App;
