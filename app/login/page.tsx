import FormLogin from '@/components/client-side/form-login';
import React from 'react';
import { Button } from '@/components/ui/button';


function Page() {
    return (
        <div className='grid grid-cols-2 h-screen '>
            <div className='border-1 p-5 bg-black text-white' >Go Ai Logo</div>
            <div className='border-1 p-5 bg-white'>
                <div className='text-end border-1'>Sign Up</div>
                <div className='flex flex-col border-1 h-full items-center justify-center'>
                    <h3>Login to you account</h3>
                    <p>Enter your email and password below to login to your account</p>
                    <Button>adfasdf</Button>
                    <FormLogin />
                </div>
            </div>
        </div >
    );
}

export default Page;