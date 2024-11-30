import React from 'react'
import styles from "@/styles/imageBox.module.css"
import Image from 'next/image'
const ImageBox = (props : { pic:string , text : string} ) => {
  return (
    <div className={styles.Image_container}>
        <Image src={props.pic} width={200} height={200} alt="Loading" className={styles.image}/>

        <h1 className={styles.h1}>{props.text}</h1>
    </div>
  )
}

export default ImageBox
