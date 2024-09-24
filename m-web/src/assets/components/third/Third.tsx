import styles from './style.module.scss';

import info_1 from './../../images/info-1.png';
import arrow_left from './../../images/arrow-left.png';
import arrow_right from './../../images/arrow-right.svg';

function Third(){
    

    return <div className={styles.Third}>
        <h1>Що таке Mansory RP?</h1>
        <div className={styles.content}>
            <div className={styles.content_part_1}>
                <div><img src={info_1} alt=""/></div>
                <div>
                    <h1>Захопливий світ Mansory RP</h1>
                    <h2>Унікальний RP сервер на платформі GTA V відкриє перед вами двері<br/>
                    в захопливий світ США, повний неймовірних пригод і можливостей.<br/>
                    Незалежно від того, чому ви віддаєте перевагу - PVP чи PVE, ми<br/>
                    створили баланс, щоб задовольнити кожного</h2>
                </div>
            </div>
            <div className={styles.arrow_box}>
                <img src={arrow_right} alt="arrow"/>
            </div>
            <div className={styles.content_part_2}>
                <div><img src={info_1} alt=""/></div>
                <div>
                    <h1>Захопливий світ Mansory RP</h1>
                    <h2>Унікальний RP сервер на платформі GTA V відкриє перед вами двері<br/>
                    в захопливий світ США, повний неймовірних пригод і можливостей.<br/>
                    Незалежно від того, чому ви віддаєте перевагу - PVP чи PVE, ми<br/>
                    створили баланс, щоб задовольнити кожного</h2>
                </div>
            </div>
            <div className={styles.arrow_box}>
                <img src={arrow_left} alt="arrow"/>
            </div>
            <div className={styles.content_part_1}>
                <div><img src={info_1} alt=""/></div>
                <div>
                    <h1>Захопливий світ Mansory RP</h1>
                    <h2>Унікальний RP сервер на платформі GTA V відкриє перед вами двері<br/>
                    в захопливий світ США, повний неймовірних пригод і можливостей.<br/>
                    Незалежно від того, чому ви віддаєте перевагу - PVP чи PVE, ми<br/>
                    створили баланс, щоб задовольнити кожного</h2>
                </div>
            </div>
        </div>
    </div>
}

export default Third;