"use client"

import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { UserValidation } from "@/lib/validations/user"
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
  import * as z from "zod"
import { Button } from "../ui/button"
import Image from "next/image"
import { ChangeEvent } from "react"

interface Props {
    user: {
        id: string,
        objectId: string,
        name: string,
        usernname: string,
        bio: string,
        image: string,
        
    },
    btnTitle: string
}



const AccountProfile = ({user, btnTitle } : Props) => {
    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: "",
            name: "",
            username: "",
            bio: ""
        }
    })

    const handleImage = ( e: ChangeEvent, fieldChange: (value: string) => void ) => {
        e.preventDefault()
    }

    function onSubmit(values: z.infer<typeof UserValidation>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-start">
                <FormField
                    control={form.control}
                    name="profile_photo"
                    render={({ field }) => (
                        <FormItem className="flex items-center gag-4">
                        <FormLabel className="account-form_label">
                            {field.value ? (
                                <Image
                                    src={field.value}
                                    alt="profile_photo"
                                    width={96}
                                    height={96}
                                    priority
                                    className="rounded-full object-contain"
                                />
                            ) : (
                                <Image
                                    src="/assets/profile.svg"
                                    alt="profile_photo"
                                    width={96}
                                    height={96}
                                    className="object-contain"
                                />
                            )}
                        </FormLabel>
                        <FormControl className="flex-1 text-base-semibold text-gray-200">
                            <Input
                                type="file"
                                accept="/image"
                                placeholder="Upload a photo"
                                onChange={(e) => handleImage(e, field.onChange)}
                            />
                        </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )

}

export default AccountProfile