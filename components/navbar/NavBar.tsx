"use client"
import React, { useEffect, useState } from "react"
import logoImage from "@/assets/volvo.png"
import Image from "next/image"
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import Link from "next/link"
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <nav className="fixed z-50">
      <div
        className={`${
          isScrolled || open ? "bg-white text-slate-800" : "text-white"
        }  w-screen flex justify-between items-center px-8 py-3`}
      >
        <Link href="/">
          <div className="flex space-x-1 items-center">
            <Image
              draggable={false}
              src={logoImage}
              className="w-[90px]"
              alt="navigation logo"
            />
          </div>
        </Link>
        <div className="flex max-[850px]:hidden justify-center items-center space-x-8 text-[17px] font-[500]">
          <Link href="#hero">Home</Link>
          <Link href="#who-are-we">Who Are We</Link>
          <Link href="#our-services">Services</Link>
          <Link href="#why-choose-us">Why Choose Us</Link>
          <Link href="#contact-us">Contact Us</Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`hidden text-[17px] max-[850px]:block `}
        >
          {open ? <IoClose /> : <FaBars />}
        </div>
      </div>
      <div>
        {open ? (
          <div className="h-[calc(100vh-77px)] w-[100vw] bg-white flex flex-col space-y-16 justify-center items-center text-black">
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/projects">
              Who Are We
            </Link>
            <Link onClick={() => setOpen(false)} href="/gallery">
              Services
            </Link>
            <Link onClick={() => setOpen(false)} href="/gallery">
              Why Choose Us
            </Link>
            <Link onClick={() => setOpen(false)} href="/gallery">
              Contact Us
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default NavBar
