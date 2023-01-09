import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/Logo';
import { Button } from '@/components/common';
import { useSession, signIn } from 'next-auth/react';
import Router from 'next/router';

export default function Login() {
  const { data: session } = useSession();
  //   if (session?.user) {
  //     Router.push('/');
  //   }
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Image
        src={Logo.GithubLogo}
        width={200}
        height={200}
        className="mb-10"
        alt="github"
      />
      <div onClick={() => signIn({ callbackUrl: '/' })}>
        <Button content="Đăng nhập" />
      </div>
    </div>
  );
}
