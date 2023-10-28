import Image from 'next/image'
import { Dancing_Script, Inter, Poppins, Wix_Madefor_Display } from 'next/font/google'
import Homepage from '@/components/Homepage'
import OMMSTUDIOS from '@/layouts/OMMSTUDIOS'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets:["latin"], weight:["100","200","300","400","500","600","700","800","900"]})
export const dancing = Dancing_Script({subsets:["latin"], weight:["400","500","600", "700"]})
const madefor = Wix_Madefor_Display({subsets:["latin"],weight:["400","500","600","700","800"]})
export default function Home() {
  const seo ={
    pageTitle:"OMM Pictures - Professional Photo Studio Services",
     description: "OMM Pictures is a professional photo studio offering high-quality photography services for weddings, events, portraits, and more. Contact us to capture your special moments.",
      url:"https://www.ommpictures.in"
  }
  return (
    <main
      className={` ${madefor.className}`}
    >
     <OMMSTUDIOS seo={seo}>
     <Homepage />
     </OMMSTUDIOS>
    </main>
  )
}
