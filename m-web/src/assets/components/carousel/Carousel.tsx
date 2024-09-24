import styles from './style.module.scss';
import mainimage from './main.png';
import list from './list.png';

function Carousel(){

    return <div className={styles.main}>
        <h1>Захопи момент</h1>
        <h2>Відкрийте для себе різноманітність ігрового процесу через нашу галерею скріншотів. <br/>
        Від ризикованих пограбувань до тихих вечорів на березі океану, у світі Mansory</h2>
        <div className={styles.mainPic}>
            <img src={mainimage} alt=""/>
        </div>
        <div className={styles.imagelist}>
            <img src={list} alt=""/>
            <img src={list} alt=""/>
            <img src={list} alt=""/>
            <img src={list} alt=""/>
            <img src={list} alt=""/>
            <img src={list} alt=""/>
        </div>
    </div>
}

export default Carousel;