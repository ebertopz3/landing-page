import Head from 'next/head'
import MoreInfo from '../components/more-info';
import FormShopping from '../components/form-shopping';
import Rhinoplasty from '../components/rhinoplasty';
import WhyDoYou from '../components/why-do-you';
import TheWay from '../components/the-way';
import TheIntervention from '../components/the-intervention';
export default function Home() {
  return (
    <div className='w-full '>
      <Head>
        <title>Landing page</title>
        <meta name="Home" content="This is Home page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/circe" rel="stylesheet" />
      </Head>
      <div className='w-full'>
        <MoreInfo />
        
        <WhyDoYou />
        
        <TheWay />
        
        <Rhinoplasty />
  
        <TheIntervention />
        
        <FormShopping />
      </div>
    
    </div>
  )
}
