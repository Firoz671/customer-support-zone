import React from "react";
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="w-11/12 mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12 lg:col-span-4">
            <h2 className="text-xl font-bold text-white mb-4">
              CS — Ticket System
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-base font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-base font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Products & Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Customer Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-base font-semibold text-white mb-4">
              Information
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-12 lg:col-span-2">
            <h3 className="text-base font-semibold text-white mb-4">
              Social Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@cst.com"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>support@cst.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
