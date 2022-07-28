import { object, string, TypeOf } from "zod"

export const createUserSchema =  object({
    body: object({
        name: string({
            required_error: 'Name is required',
        }),
        password: string({
            required_error: 'Password is required',
        }).min(6, "Password is too short - should be atleast 6 characters"),
        passwordConfirmation: string({
            required_error: 'Confirmation Password is required',
        }),
        email: string({
            required_error: 'Email is required',
        }).email('Add a valid email'),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ['passwordConfirmation'],
    }),
});

export type CreateUserInput = Omit<
    TypeOf<typeof createUserSchema>,
    "body.passwordConfirmation"
>;
