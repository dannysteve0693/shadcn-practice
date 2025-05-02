'use client';
// This is a client-side component that will be used to render the form schema
// It will be used to render the form schema for the login page
// It will be used to render the form schema for the signup page
// It will be used to render the form schema for the forgot password page
// It will be used to render the form schema for the reset password page
// It will be used to render the form schema for the change password page
// It will be used to render the form schema for the update profile page

import React from 'react';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader2 } from "lucide-react"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

const formLogin = z.object({
    email: z.string().email().min(5).max(50),
    password: z.string().min(8).max(50),
})

function FormLogin() {
    const router = useRouter()

    const form = useForm<z.infer<typeof formLogin>>({
        resolver: zodResolver(formLogin),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formLogin>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log('submitted')
        console.log(values)
    }


    return (
        <Form {...form}>
            <form onSubmit={(e) => {
                e.preventDefault();
                router.push('/dashboard');
                onSubmit(form.getValues());
            }} className="space-y-3">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="danny@email.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                Just press submit.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" {...field} />
                            </FormControl>
                            <FormDescription>
                                Just press submit.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div>
                    <div className='text-end'>
                        <a href="#" className='text-gray-400'>Forgot Password?</a>
                    </div>
                </div>
                <Button
                    variant="outline"
                    type="submit"
                    className='cursor-pointer w-full'>
                    {/* <Loader2 className="animate-spin" /> */}
                    Submit</Button>
            </form>
        </Form>
    );
}

export default FormLogin;