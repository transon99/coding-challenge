import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/Logo';
import { Button } from '@/components/common';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Image src={Logo.GithubLogo} width={200} height={200} className="mb-10" />
      <div onClick={() => signIn()}>
        <Button content="Đăng nhập" />
      </div>
    </div>
  );
}
