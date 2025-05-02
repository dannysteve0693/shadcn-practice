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

const formLogin = z.object({
    email: z.string().email().min(5).max(50),
    password: z.string().min(8).max(50),
})

function FormLogin() {
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
            <form onSubmit={(e) => { console.log("kdkdkdk") }} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your Email.
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
                            <FormLabel>password</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your Password.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <Button
                    variant="outline"
                    type="submit"
                    className=''>
                    {/* <Loader2 className="animate-spin" /> */}
                    Submit</Button>
            </form>
        </Form>
    );
}

export default FormLogin;