import React from 'react'
import styles from "@/styles/footer.module.css"
import { FaFacebook , FaTwitter , FaYoutube , FaInstagram , FaTiktok} from 'react-icons/fa6'
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link"
const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.box_one}>
        <h1 className={styles.h1}>Core Courses</h1>
        <ul>
          <li><Link href="/">Programming Fundamentals</Link></li>
          <li><Link href="/">Web2 Using NextJS</Link>
</li>
          <li><Link href="/">Earn as You Learn</Link></li>
        </ul>
      </div>
      <div className={styles.box_two}>

        <h1 className={styles.h1}>Core Courses</h1>
        <ul>
          <li><Link href="/">Web 3 and Metaverse</Link></li>
          <li><Link href="/">Cloud-Native Computing</Link></li>
          <li><Link href="/">Artificial Intelligence (AI) and Deep Learning</Link></li>
          <li><Link href="/">Ambient Computing and IoT</Link></li>
          <li><Link href="/">Genomics and Bioinformatics</Link></li>
          <li><Link href="/">Network Programmability and Automation</Link></li>
        </ul>
      </div>
      <div className={styles.box_three}>
      <h1 className={styles.h1}>  Social Links</h1>
      <div className={styles.icon_box}>
    <div className={styles.icons}><Link href=""><FaFacebook  /></Link></div>
    <div className={styles.icons}><Link href=""><FaYoutube /></Link></div>
    <div className={styles.icons}>  <Link href=""><FaTwitter /></Link></div>
    <div className={styles.icons}><Link href=""><FaInstagram /></Link></div>
    <div className={styles.icons}><Link href=""><FaTiktok /></Link></div>
    </div>

<div className={styles.mail_box}>
 
  <MdOutlineEmail className={styles.icons}/>
 <Link href="/"><p className={styles.mail}>education@governorsindh.com</p></Link>
      </div>

      </div>

    </footer>
  )
}

export default Footer
