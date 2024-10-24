import Link from "next/link";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";

const HeaderApp = () => {
  return (
    <div className="mb-3">
      <nav className="bg-gray-100 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="group">
            <div className="relative flex items-center">
              <AiFillHome size="2em" />
              <span className="absolute left-0 top-full mt-1 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded shadow-md">
                Início
              </span>
            </div>
          </Link>

          <div className="flex items-center">
            <Image
              alt="logo Sam Pet"
              src="/logo.png"
              width={70}
              height={60}
              className="inline-block align-top"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
export default HeaderApp