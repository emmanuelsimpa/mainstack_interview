import { Menu } from "@headlessui/react";
import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import ProfileImage from "../assets/svg/profile.svg"

const Profile: React.FC = () => {
  return (
    <Menu as='div' className='relative'>
      <Menu.Button className='-m-1.5 flex items-center p-1.5'>
        <span className='sr-only'>Open user menu</span>
        <img
          className='h-8 w-8 rounded-full bg-purple'
          src={ProfileImage}
          alt=''
        />
        <span className='hidden lg:flex lg:items-center'>
          <span
            className='ml-4 text-sm font-semibold leading-6 text-black'
            aria-hidden='true'
          >
            Blessing Daniels
          </span>
          <EllipsisHorizontalIcon
            className='ml-2 h-5 w-5 text-black'
            aria-hidden='true'
          />
        </span>
      </Menu.Button>
    </Menu>
  );
};

export default Profile;
