import styles from './style.module.scss';

import Button from './../keys/Button';

function Second(){
    

    return <div className={styles.second}>
        <div className={styles.header}>
            <h1>Як розпочати?</h1>
            <h2>Три простих дії і для того що б почати свою історію вже зараз</h2>
        </div>
        <div className={styles.content}>
            <div className={styles.content_left}>
                <div className={styles.content_left_steps}>
                    <div className={styles.content_left_step_number}>1</div>
                    <h1>
                        Придбайте GTA V<br/>
                        <h2 style={{marginBottom: '10px'}}>Виберіть і інсталюйте ліцензійну версію</h2>
                        <Button title="Steam" type="secondary" icon="steam"/>
                    </h1>
                </div>
                <div className={styles.vl}></div>
                <div className={styles.content_left_steps}>
                    <div className={styles.content_left_step_number}>2</div>
                    <h1>
                        Встановіть Alt:V<br/>
                        <h2 style={{marginBottom: '10px'}}>Завантажте та встановіть лаунчер</h2>
                        <Button title="Download" type="secondary" icon="AltV" />
                    </h1>
                    
                </div>
                <div className={styles.vl}></div>
                <div className={styles.content_left_steps}>
                    <div className={styles.content_left_step_number}>3</div>
                    <h1>
                        Запустіть лаунчер<br/>
                        <h2 style={{marginBottom: '10px'}}>Виберіть сервер Mansory і насолоджуйтеся!</h2>
                        <Button title="m-rp.com:22005" type="secondary" icon="Copy" />
                    </h1>
                    
                </div>
            </div>
            <div className={styles.content_right}>
                <div className={styles.content_right_main}>

                </div>
                <div className={styles.content_right_bottom}>
                    <div className={styles.content_right_bottom_video}>
                    
                    </div> 
                    <div className={styles.content_right_bottom_video}>
                    
                    </div> 
                    <div className={styles.content_right_bottom_video}>
                    
                    </div> 
                </div>
            </div>
        </div>
    </div>
}

export default Second;