import React from 'react'
import styles from '@/styles/slider.module.css'
import Image from 'next/image'

const Slider = () => {



    return (
    
        <div className={styles.slider}>
            <div className={styles.SliderImage}>
                <div className={styles.slider_Box}>
                    <Image src="/slideShow.jpg" width={100} height={100} alt="Loading" className={styles.slides} />
                    </div>
                <div className={styles.slider_Box}>
                    <Image src="/slideShow2.jpg" width={100} height={100} alt="Loading" className={styles.slides} />
                    </div>
            </div>
            <div className={styles.picChanger}>
                <div className={styles.button}></div>
                <div className={styles.button}></div>
                <div className={styles.button}></div>
                <div className={styles.button}></div>

            </div>
        </div>

        

    )
}

export default Slider
