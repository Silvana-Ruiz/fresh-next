import { Inter } from 'next/font/google'
import Sidebar from '../components/sidebar'
import { Stepper } from 'react-form-stepper';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
     
     {/* <Stepper
        steps={[{ label: 'Create Trip' }, { label: 'Generate Order' }, { label: 'Choose Truck and Driver' },  { label: 'Confirm Trip' }]}
        activeStep={2}
        
      /> */}

    </main>
  )
}
