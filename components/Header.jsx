import Link from "next/link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants/index";
import React, { useState } from "react";
import Button from "./Button";
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "@/public/assets/svg/MenuSvg";


const Header = () => {
    const [openNavigation, setOpenNavigation] = useState(false)

    const toggleNavigation = ()=>{
        if(openNavigation){
            setOpenNavigation(false)
            enablePageScroll()
        } else{
            setOpenNavigation(true)
            disablePageScroll()
        }
    }
  
  const initialHash = (typeof window !== 'undefined' && window.location.hash) || '';
  const [hash, setHash] = useState(initialHash);

  const handleLinkClick = (url) => {
    if (typeof window !== 'undefined') {
      setHash(url);
    }
    if(!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false)
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation?"bg-n-8":"bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg::py-4">
        <Link href="#hero" className="block w-[12rem] xl:mr-8">
          <img
            src="./assets/brainwave.svg"
            width={190}
            height={40}
            alt="brainwave"
          />
        </Link>
        <nav className={` ${openNavigation?"flex":"hidden"}  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                className={`block relative font-code uppercase text-n-1 text-2xl transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${item.url === hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                key={item.id}
                href={item.url}
                onClick={() => handleLinkClick(item.url)}
              >
                {item.title}
              </Link>
            ))}
          </div>
            <HamburgerMenu/>
        </nav>
        <Link href="#signup" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:black " >New Account</Link>
        <Button className=" hidden lg:flex absolute px-[2.5rem] ">
            Sign in
        </Button>
        <Button px='px-4' className="ml-auto  lg:hidden " onClick={toggleNavigation}>
            <MenuSvg/>
        </Button>
      </div>
    </div>
  );
};

export default Header;