import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

export function Header() {
  const { data: session } = useSession();
  return (
    <>
      <header className="bg-transparent">
        <div className="h-[70px] p-3 flex justify-between items-center container">
          <div className="flex ">
            <Link href="/" passHref>
              <p className="text-2xl font-bold text-white">CODING WEB</p>
            </Link>
            <div className=" ml-6 hidden lg:block">
              <div className="flex">
                <Link href="/" passHref>
                  <p className="text-xl text-white mx-3">Đề thi</p>
                </Link>

                <Link href="/" passHref>
                  <p className="text-xl text-white mx-3">Kết quả thi</p>
                </Link>
                <Link href="/" passHref>
                  <p className="text-xl text-white mx-3">Blogs</p>
                </Link>
                <Link href="/" passHref>
                  <p className="text-xl text-white mx-3">Xếp hạng</p>
                </Link>
              </div>
            </div>
          </div>
          {session?.user ? (
            <div className="flex items-center">
              <Image
                src={session?.user?.image}
                alt="avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
              <Link href="/">
                <p className="px-2 border-r-2">{session?.user?.name}</p>
              </Link>

              <p onClick={() => signOut()} className="px-2 cursor-pointer">
                LognOut
              </p>
            </div>
          ) : (
            <div className="flex">
              <Link href="/login">
                <p className="px-2 cursor-pointer">Login</p>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
