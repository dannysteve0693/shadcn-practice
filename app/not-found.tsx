import Link from 'next/link'
import Image from 'next/image'
import {Button} from '@/components/ui/button'

import NotFoundImage from '@/public/not-found.svg'

export default function NotFound() {
  return (
    <div className='container h-screen mx-auto grid grid-cols content-center justify-center text-center gap-4'>
        <Image
            src={NotFoundImage}
            alt="Picture of the not found"
        />  

        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Button asChild>
            <Link href="/">
                Return Home
            </Link>
        </Button>
    </div>
  )
}
