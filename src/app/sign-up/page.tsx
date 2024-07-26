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

const cpfRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
const formSchema = z.object({
  fullName: z.string().min(5, 'Por favor digite o seu nome completo'),
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, 'A senha deve conter no mínimo 6 caracteres'),
  taxId: z.string().regex(cpfRegex, 'CPF invalido'),
});

export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      taxId: '',
    },
  });

  function onSubmit() {
    const { fullName, taxId, email, password } = form.getValues();
    console.log({ email, fullName, password, taxId });
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center gap-4">
      <div className="small-mobile:w-[90vw] mobile:w-[85vw] w-2/3 desktop:w-2/5 self-center flex ">
        <SwitchTheme />
      </div>

      <main className="flex justify-center">
        <Card className="small-mobile:w-[90vw] mobile:w-[85vw] w-2/3 desktop:w-2/5 p-10 flex flex-col">
          <CardHeader className="text-center">
            <CardTitle>Criar Conta</CardTitle>
          </CardHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="taxId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="XXX.XXX.XX-XX"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
              <div className="flex flex-col gap-2">
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
        </Card>
      </main>
    </div>
  );
}
