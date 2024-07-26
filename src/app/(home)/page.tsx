'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { GoogleLogo } from '@phosphor-icons/react/dist/ssr';
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
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SwitchTheme } from '@/components/switchTheme';
import Link from 'next/link';
import Image from 'next/image';

const formSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, 'A senha deve conter no mínimo 6 caracteres'),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit() {
    const { email, password } = form.getValues();
    console.log({ email, password });
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <main className="lg:w-1/2 px-5">
        <Card className="mobile:w-[90vw] xs:w-[90vw] sm:w-[85vw] md:w-[85vw] w-2/3 lg:w-full lg:h-full p-10 flex flex-col justify-center ">
          <div className="flex">
            <SwitchTheme />
          </div>
          <CardHeader className="text-center">
            <CardTitle>Fazer Login</CardTitle>
          </CardHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john.doe@email.com"
                        {...field}
                      />
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
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="******"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator className="my-3" />
              <div className="flex gap-2 justify-center">
                <Button
                  type="submit"
                  className="text-center hover:opacity-90 transition duration-300 text-lg"
                >
                  Criar conta
                </Button>

                <Button
                  type="button"
                  className="bg-red-600 hover:bg-red-600 hover:opacity-90 transition duration-300 flex items-center gap-1 text-lg"
                >
                  <GoogleLogo className="text-2xl" />
                  Google
                </Button>
              </div>
            </form>
          </Form>
          <p className="mt-4 text-center text-sm">
            Não tem conta? Faça o{' '}
            <Link
              href="/sign-up"
              className="underline"
            >
              cadastro
            </Link>
          </p>
        </Card>
      </main>

      <Image
        src="/placeholder.svg"
        className="lg:block hidden w-1/2 h-full bg-red-600 object-cover"
        width="1920"
        height="1080"
        alt="app logo"
      />
    </div>
  );
}
