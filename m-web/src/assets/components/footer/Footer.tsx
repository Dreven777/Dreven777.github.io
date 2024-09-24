import styles from './style.module.scss';
import logo from './../../images/logo_green.svg';
import mastercard from './../../images/mastercard.png';
import visa from './../../images/visa.png';

function Footer(){

    return <div className={styles.main}>
        <div className={styles.footerbox}>
            <div className={styles.navigation}>
                <span className={styles.header}>Гравцям</span>
                <div className={styles.navigation_part}>Новини</div>
                <div className={styles.navigation_part}>Форум</div>
                <div className={styles.navigation_part}>Почати гру</div>
                <div className={styles.navigation_part}>Пожертвувати</div>
            </div>
            <div className={styles.navigation}>
                <span className={styles.header}>Гравцям</span>
                <div className={styles.navigation_part}>Умови використання</div>
                <div className={styles.navigation_part}>Користувацька угода</div>
                <div className={styles.navigation_part}>Правила оплати</div>
            </div>
            <div className={styles.info}>
                <h1>Mansory <img src={logo} alt="logo"/></h1>
                <h2>Mansory - Не пов’язаний із Take-Two, Rockstar North Interactive,<br/>
                чи будь-яким іншим правовласником і не підтримується ними. <br/> 
                Усі використані торгові марки належать відповідним власникам.</h2>
                <h3>helper@mansory.com <img src={mastercard} alt="mastercard"/> <img src={visa} alt="visa"/></h3>
            </div>
        </div>
        <div className={styles.bottom_text}>
            Mansory Game © Всі права захищені
        </div>
    </div>
}

export default Footer;