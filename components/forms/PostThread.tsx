
"use client"

import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { ThreadValidation } from "@/lib/validations/thread"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Textarea } from "@/components/ui/textarea"
  import * as z from "zod"
import { Button } from "../ui/button"
import Image from "next/image"
import { updateUser } from "@/lib/actions/user.actions"
import { usePathname, useRouter } from "next/navigation"
import path from "path"

interface Props {
    user: {
        id: string,
        objectId: string,
        name: string,
        username: string,
        bio: string,
        image: string,
        
    },
    btnTitle: string
} 

function PostThread({userId} : {userId: string}){


    const router = useRouter()
    const pathname = usePathname()


    const form = useForm({
        resolver: zodResolver(ThreadValidation),
        defaultValues: {
            thread: "",
            accountId: userId
        }
    })

    return (
        <Form {...form}>
        <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-start gap-10">
        </form>
        </Form>
    )
}

export default PostThread