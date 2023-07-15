import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import Homepage from '@/components/Homepage'
import OMMSTUDIOS from '@/layouts/OMMSTUDIOS'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets:["latin"], weight:["100","200","300","400","500","600","700","800","900"]})

export default function Home() {
  return (
    <main
      className={` ${poppins.className}`}
    >
     <OMMSTUDIOS>
     <Homepage />
     </OMMSTUDIOS>
    </main>
  )
}
