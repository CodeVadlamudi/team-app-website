import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

function Footer() {
  return (
    <footer className="bg-indigo-900 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 xl:gap-0 py-20">
          <div className="space-y-4">
            <a href="/" className="w-32 h-12 block">
              <img
                src="./images/footer-logo.png"
                alt="Team Logo Image"
                className="w-full h-full object-cover"
              />
            </a>
            <p className="text-lg text-white">
              Collaboration platform for mordern team{" "}
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl text-indigo-300 font-medium">Company</h3>
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-white text-lg">
                Product
              </a>
              <a href="/blog" className="text-white text-lg">
                Blog
              </a>
              <a href="/" className="text-white text-lg">
                Support
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl text-indigo-300 font-medium">Features</h3>
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-white text-lg">
                Screen Sharing
              </a>
              <a href="/" className="text-white text-lg">
                iOS & Android Apps
              </a>
              <a href="/" className="text-white text-lg">
                File Sharing
              </a>
              <a href="/" className="text-white text-lg">
                User Managment
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl text-indigo-300 font-medium">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <li className="text-white text-lg list-none">info@teamapp.com</li>
              <li className="text-white text-lg list-none">1-800-200-300</li>
              <address className="text-lg text-white">
                1010 Sunset Blv
                <br />
                Palo Alto, California
              </address>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl text-indigo-300 font-medium">
              Stay up to date
            </h3>
            <h4 className="text-xl text-white">Subscribe to our newseller</h4>
            <div className="flex items-center w-full bg-zinc-500/80 h-12 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="h-full w-full pl-3 bg-transparent placeholder:text-white border-none outline-none text-white"
              />
              <ArrowRightIcon className="w-5 h-5 mr-3 text-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-10 flex-col sm:flex-row space-y-2 sm:space-y-0">
          <p className="text-white text-lg">&copy; Copyright</p>
          <a
            href="/"
            className="text-indigo-200 text-lg inline-block hover:underline">
            Code Vadlamudi
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
