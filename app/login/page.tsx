import FormLogin from '@/components/client-side/form-login';
import React from 'react';
import { Button } from '@/components/ui/button';


function Page() {
    return (
        <div className='grid grid-cols-2 h-screen '>
            <div className='p-5 bg-black text-white' >Go Ai Logo</div>
            <div className=' p-5 bg-white'>
                <div className='text-end '>Sign Up</div>
                <div className='flex flex-col  h-full items-center justify-center'>
                    <div className='w-1/2 text-center'>
                        <h3 className='text-xl font-bold'>Login to you account</h3>
                        <p className='font-light'>Enter your email and password below to login to your account</p>

                    </div>
                    <div className='mt-5 w-full max-w-sm'>
                        <FormLogin />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Page;