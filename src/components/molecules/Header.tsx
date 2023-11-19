import Image from "next/image";
import Link from "next/link";
import DropMenu from "./DropMenuHeader";
import { FadeIn } from "../animations/AnimationTemplate";
import { useRouter } from "next/router";
import { MotionDiv } from "../animations/MotionDiv";

const Header = () => {
  
  const router = useRouter();

    const isActiveLink = (path:String) => {
      return router.pathname === path ? "active-link" : "";
    };
  return (
    <MotionDiv>
      <div>
        <header className="header-comp lg:px-20 ps-3  py-4 flex items-center justify-between w-full fixed top-0 gap-10 h-[100px] z-50 border-b lg:border-b-0 border-primary shadow-sm">
          <div className="flex gap-6 items-center lg:border-b w-full h-[100px] border-primary">
            <FadeIn>
              <Image
                src="/assets/general/Seacart__Logo Long_Color.png"
                alt="Logo"
                className="w-full lg:h-12 mr-4 p-1 object-cover h-7"
                width={200}
                height={200}
              />
            </FadeIn>

            <nav className="hidden lg:flex gap-4 text-gray-800">
              <FadeIn>
                <Link
                  href="/"
                  className={`hover:text-gray-300 rounded-lg px-4 py-2  ${
                    isActiveLink("/") ? "font-bold bg-white shadow-sm" : ""
                  }`}>
                  Home
                </Link>
              </FadeIn>
              <FadeIn>
                <Link
                  href="/product"
                  className={`hover:text-gray-300 rounded-lg px-4 py-2  ${
                    isActiveLink("/product")
                      ? "font-bold bg-white shadow-sm"
                      : ""
                  }`}>
                  Product
                </Link>
              </FadeIn>
              <FadeIn>
                <Link
                  href="/contact"
                  className={`hover:text-gray-300 rounded-lg px-4 py-2  ${
                    isActiveLink("/contact")
                      ? "font-bold bg-white shadow-sm"
                      : ""
                  }`}>
                  Contact Us
                </Link>
              </FadeIn>
              {/* <FadeIn>

            <Link href="/aboutus" className={`hover:text-gray-300 rounded-lg px-4 py-2  ${isActiveLink("/aboutus")? "font-bold bg-white shadow-sm":""}`}>
              About Us
            </Link>
                </FadeIn><FadeIn>

            <Link href="/article" className={`hover:text-gray-300 rounded-lg px-4 py-2  ${isActiveLink("/article")? "font-bold bg-white shadow-sm":""}`}>
              Article
            </Link>
                </FadeIn> */}
            </nav>
          </div>

          <div className="lg:hidden flex items-center  h-[100px] border-primary">
            <DropMenu />
          </div>
          <FadeIn>
            <div className="hidden lg:flex w-[300px] items-center justify-center lg:border-b h-[100px] border-primary">
              <button
                className="bg-primary text-white hover:bg-gray-700 py-2 px-8 font-regular rounded flex items-center justify-center gap-2 "
                onClick={() => {
                  window.location.href = `https://wa.me/+6282280002797`;
                }}>
                Let`s Talk{" "}
                <Image
                  src={"/assets/general/whatsapp.svg"}
                  alt={""}
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </FadeIn>
        </header>
      </div>
    </MotionDiv>
  );
};

export default Header;
