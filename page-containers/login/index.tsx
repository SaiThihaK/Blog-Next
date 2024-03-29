'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { saveUserInfo } from '@/lib/utils';

const loginFormSchema = z.object({
  // name: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'password should be minimum 8 characters' }),
});

const Login: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // const socialAction = (action: string) => {
  //   setLoading(true);
  //   signIn(action, { redirect: false })
  //     .then((callback) => {
  //       if (callback?.error) return;
  //       if (callback?.ok) return router.push("/");
  //     })
  //     .finally(() => setLoading(false));
  // };

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    startTransition(async () => {
      const user = await signIn('credentials', values);
      if (user) {
        router.push('/admin');
      }
    });
  };

  return (
    <div className="flex items-center justify-center h-[100dvh]">
      <div className="bg-softBackground p-[20px] md:px-[40px]  md:py-[40px] lg:py-[50px] lg:px-[50px] w-full md:w-[400px] lg:w-[450px] xl:w-[500px] flex flex-col gap-[16px]">
        <h1 className="text-center">Welcome Back!</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-[16px] w-full"
          >
            {/* <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter user name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter  email" {...field} />
                  </FormControl>
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
                    <Input placeholder="Please enter  password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending} className="w-full">
              Log In
            </Button>
          </form>
        </Form>
        {/* <div className="flex items-center gap-2">
          <div className="h-[0.8px] flex-1 bg-slate-400"></div>
          <span>or</span>
          <div className="h-[0.8px] flex-1 bg-slate-400"></div>
        </div>
        <GoogleLoginButton
          disabled={loading}
          onClick={() => {
            socialAction("google");
          }}
          className="auth-btn"
        >
          Continue With Google
        </GoogleLoginButton> */}
        {/* <GithubLoginButton className="auth-btn">
          Continue With Github
        </GithubLoginButton> */}
      </div>
    </div>
  );
};

export default Login;
