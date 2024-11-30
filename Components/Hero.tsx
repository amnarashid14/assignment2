import React from 'react'
import styles from '@/styles/hero.module.css'
import Image from 'next/image'
import style from '@/styles/heroTwo.module.css'
const Hero = () => {
  return (
  <>
<div className={styles.hero}>
  <div className={styles.subhero}>
<div className={styles.main1}>

  <h1 className={styles.h1}>Governor Sindh</h1>
  <p className={styles.p1}>Kamran Khan Tessori</p>
 <br/>
  <h3 className={styles.h3}>
    Certified Cloud Applied Generative AI Engineer (GenEng) 
  </h3>
 <br/>

  <p className={styles.p2}>Earn up to $5,000/month <br/>
  Now Admissions are open in Hyderabad </p>

  <button className={styles.button}>Apply Now</button>
  {/* <p className={styles.p4}>562, 143
    <br/>Accepted Applications
  </p> */}


</div>
<div className={styles.main2}> <Image src="/Untitled (25).png" width={400} height={250} alt='Loading..' className={styles.imgmain}/></div>
</div>
</div>





</>
  )
}

export default Hero
