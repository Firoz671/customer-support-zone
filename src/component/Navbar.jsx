import { Plus } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto p-5">
        <div>
          <span>CS-Ticket System</span>
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Download</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <button className="btn text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))]">
              + New Ticket
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
