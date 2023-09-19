import * as z from "zod";

export const ThreadValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  thread: z
    .string()
    .nonempty()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  accountId: z
    .string()
});

export const CommentValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    thread: z
      .string()
      .nonempty()
      .min(3, { message: "Minimum 3 characters." })
      .max(30, { message: "Maximum 30 caracters." }),
  });