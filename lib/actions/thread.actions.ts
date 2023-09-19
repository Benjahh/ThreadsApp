"use server"

import { Interface } from "readline";
import { connectToDB } from "../mongoose";
import Thread from "../models/thread.model";
import User from "../models/user.model";
import { revalidatePath } from "next/cache";

interface Params {
    text: string,
    author: string,
    communityId: string | null,
    path: string
}

export async function createThread({ text, author, communityId, path}: Params){
    try {
        connectToDB()

        const createdThread = await Thread.create({
            text,
            author,
            communityId: null,
        })

        await User.findById(author, {
            $push : {threads: createdThread._id}
        })

        revalidatePath(path)
    } catch (error: any) {
        throw new Error(`Error in creating thread ${error.message}`)
    }
}