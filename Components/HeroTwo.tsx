import React from 'react'
import style from '@/styles/heroTwo.module.css'
import Image from 'next/image'
import Slider from './Slider'
import ImageBox from './ImageBox'
const HeroTwo = () => {
  return (
   <>
   <div className={style.heroTwo}>
<h1 className={style.h1}>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
<p className={style.description}>
The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
</p>

</div>


<div className={style.images}>
  <div className={style.imgBox}><Image src="/pic1.jpeg" width={360} height={0} alt='Loading...' className={style.img}/></div>
  <div className={style.imgBox}><Image src="/words.jpg" width={360} height={0} alt='Loading...' className={style.img}/></div>
  <div className={style.imgBox}><Image src="/pic3.jpg" width={360} height={0} alt='Loading...' className={style.img}/></div>
</div>

<Slider/>

<h1 id={style.h1}>Core Courses Sequence</h1>
<div className={style.Box}>
  
  <ImageBox text='Programming Fundamentals' pic='/programming_fundamentals.49cca4e9.jpg' />
  <ImageBox text='Web2 Using next.js' pic='/webdevelopment.jpg'/>
  <ImageBox text='Earn as you learn' pic='/earn_as_your_learn.b8248a49.jpg'/>
</div>


<h1 id={style.h1} className='mt-24'>Core Courses Sequence</h1>
<div className={style.Box2}>
  
  <ImageBox text='Programming Fundamentals' pic='/programming_fundamentals.49cca4e9.jpg' />
  <ImageBox text='Web2 Using next.js' pic='/webdevelopment.jpg'/>
  <ImageBox text='Earn as you learn' pic='/earn_as_your_learn.b8248a49.jpg'/>
  <ImageBox text='Earn as you learn' pic='/earn_as_your_learn.b8248a49.jpg'/>
</div>
<div className={style.Box3}>
  
  <ImageBox text='Programming Fundamentals' pic='/programming_fundamentals.49cca4e9.jpg' />
  <ImageBox text='Web2 Using next.js' pic='/webdevelopment.jpg'/>
  
</div>
</>
  )
}

export default HeroTwo
