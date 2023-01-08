import Link from 'next/link';
import { BiUserCircle } from 'react-icons/bi';
import { MdShoppingCart } from 'react-icons/md';
import NavBar from './NavBar';

export function Header() {
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
          <div className="flex">
            <p className="px-2 border-r-2">Login</p>
            <p className="px-2">Register</p>
          </div>

          {/* <div>
            <BiUserCircle />
          </div> */}
        </div>
      </header>
    </>
  );
}
