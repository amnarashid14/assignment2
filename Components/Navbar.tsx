import React from 'react'
import styles from "@/styles/nav.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
const buttonclick=()=>{
console.log("True")

}

    return (
        <div className={styles.container}>
           
          
              <Image src="/logo.png"  alt="loading..." width={80} height={50} className={styles.img}/>

                <h1 className={styles.h1}>Tuition Free Education Program on Latest Technologies</h1>

                <div className={styles.links}>
                    <Link href="/" className={styles.linkItems}>Home</Link>
                    <Link href="/" className={styles.linkItems}>Apply</Link>
                    <Link href="/" className={styles.linkItems}>Jobs</Link>
                    <Link href="/" className={styles.linkItems}>Result</Link>
                    <Link href="/" className={styles.linkitems}>  
                        
                        <label className='text-[rgb(182,215,247)]'>Courses : </label>
                        <select className={styles.list}>
                            <option >Volvo</option>
                            <option >Saab</option>
                            <option  >Opel</option>
                            <option >Audi</option>
                        </select></Link>
                </div>


        </div>
      
    )
}

export default Navbar;
