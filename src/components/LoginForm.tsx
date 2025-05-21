import React, { useState } from 'react';
import { Button, TextInput } from 'shadcn/ui';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();
  
  const onSubmit = async (data: any) => {
    // Simulate login API call
    console.log(data);
    // onSuccess
    router.push('/product-page'); // Redirect to product page on login success
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <TextInput placeholder="Email" {...register('email')} className="w-full" />
      </div>
      <div>
        <TextInput placeholder="Password" type="password" {...register('password')} className="w-full" />
      </div>
      {loginError && <p className="text-red-500">{loginError}</p>}
      <Button type="submit" className="w-full mt-4">Login</Button>
    </form>
  );
};

export default LoginForm;