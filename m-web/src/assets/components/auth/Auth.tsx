import styles from './style.module.scss';
import React, { MouseEvent, useState } from 'react';

function Button(){

    const mouseEnter = (e: any) =>{
        const el = e.currentTarget.querySelector('svg');
        //console.log(el);
        if(el !== null){
            e.preventDefault();
            el.classList.add(styles.filter);
            setTimeout(() => {
                el.classList.add(styles.filterremove);
                el.classList.remove(styles.filter);
            },1000);
        }
    }

    //let uuid = uuid();
    const [size, setSize] = useState(40);
    const [sizesvg, setSizeSVG] = useState(24);

    function addSize() {
        setSize(size+1);
    }

    function minusSize() {
        setSize(size-1);
    }

    function addSizeSVG() {
        setSizeSVG(sizesvg+1);
    }

    function minusSizeSVG() {
        setSizeSVG(sizesvg-1);
    }
    
    const listItems = [...Array(1700)].map((item, index) => 
    <div className={styles.item} onMouseEnter={mouseEnter} style={{width: size+'px', height: size+'px'}}>
        {index%2 === 0 && <svg key={item} width={sizesvg} height={sizesvg} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93891 9.97455L4.14147 13.2238L8.21387 10.3261L6.44191 9.06528L4.74566 7.85833L2.06852 5.95344V10.5507L0 14.3198V3.94817L1.63388 3.10547L5.75339 6.03666L5.7545 6.03465L7.45075 7.2416L7.44964 7.24361L9.99783 9.05674L11.7 7.84556L12.7083 9.66688L11.7818 10.3261L15.8542 13.2238L13.5538 9.06528L12.546 7.24361L11.6982 5.711L9.99783 2.63727L7.95462 6.33077L6.25837 5.12382L9.09282 0H10.9028L13.2993 4.3321L14.2423 6.03666L15.25 7.85833L17.9271 12.6972L19.9957 16.4421V16.704L18.3618 17.5467L9.99783 11.5955L1.63388 17.5467L0 16.704V16.4695L2.06852 12.6978L2.25194 12.3662L4.24323 8.76657L5.93891 9.97455ZM19.9957 14.303V3.94817L18.3618 3.10547L15.0878 5.43507L16.0966 7.25593L17.9271 5.95344V10.5581L19.9957 14.303Z"/>
        </svg>}
    </div>)
    return <div className={styles.main}>
        <button onClick={addSize}>+</button>
        <button onClick={minusSize}>-</button>
        <span style={{color: 'white', fontSize: '48px'}}>SIZE: {size}</span><br/>
        <button onClick={addSizeSVG}>+</button>
        <button onClick={minusSizeSVG}>-</button>
        <span style={{color: 'white', fontSize: '48px'}}>SIZESVG: {sizesvg}</span>
        {listItems}
    </div>
}

export default Button;