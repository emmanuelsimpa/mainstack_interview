import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "./utils/classname";
import { navigation } from "./assets/data";
import { Outlet, useNavigate } from "react-router-dom";
import LOGO from "./assets/svg/logo.svg";
import Profile from "./component/Profile";

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<unknown>("Dashboard");

  const handleTab = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    if (target.innerText !== "Dashboard") {
      return;
    }
    setCurrentTab(target.innerText);
  };

  useEffect(() => {
    if (currentTab === "Dashboard") {
      return navigate(`/${currentTab}`);
    }
  }, [currentTab, navigate]);

  return (
    <div className='mx-auto lg:flex font-face-gm'>
      {/* Static sidebar for mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-50 h-auto lg:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0' />
          </Transition.Child>

          <div className='fixed inset-0 flex justify-center w-fit '>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative mr-16 flex max-w-xs flex-1'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                    <button
                      type='button'
                      className='-m-2.5 p-2.5'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XMarkIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className='grow flex-col justify-center gap-y-5 overflow-y-auto bg-white pb-4'>
                  <nav className='flex flex-1 flex-col items-center w-full pt-5'>
                    <ul
                      role='list'
                      className='flex flex-1 flex-col gap-y-7 justify-between items-center w-full'
                    >
                      <li className='w-full'>
                        <div className='w-full flex justify-start px-12 pb-3 font-face-gm'>
                          <img
                            src={LOGO}
                            alt='logo'
                            className='flex justify-center  font-face-gm'
                          />
                        </div>
                        <ul
                          role='list'
                          className='space-y-2 flex flex-col justify-center pt-5'
                          onClick={handleTab}
                        >
                          {navigation.slice(0, 4).map((item) => (
                            <li
                              key={item.name}
                              className={classNames(
                                item.name === currentTab
                                  ? "bg-white border-solid border-l-4 border-l-orange text-orange animate__animated animate__fadeIn animate__delay-0.5s"
                                  : "",
                                "w-full flex justify-center px-12 font-face-gm"
                              )}
                            >
                              <a
                                // href={item.href}
                                className={classNames(
                                  item.name === currentTab
                                    ? "animate__animated animate__lightSpeedInLeft animate__delay-0.5s"
                                    : "text-black hover:translate-y-0.5 hover:bg-darkpurple ",
                                  "flex gap-x-5 rounded-md py-3 text-sm leading-6 font-semibold font-face-gm w-full"
                                )}
                              >
                                <img
                                  src={
                                    item.name === currentTab
                                      ? item.currentIcon
                                      : item.icon
                                  }
                                  alt=''
                                  className={classNames(
                                    item.name === currentTab
                                      ? "text-lightblue"
                                      : "text-white group-hover:text-white",
                                    "h-6 w-6 shrink-0"
                                  )}
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                          <p className='w-full flex justify-start px-12 font-face-gm'>
                            Other 1
                          </p>
                          {navigation.slice(4, 6).map((item) => (
                            <li
                              key={item.name}
                              className={classNames(
                                item.name === currentTab
                                  ? "bg-white border-solid border-l-4 border-l-orange text-orange animate__animated animate__fadeIn animate__delay-0.5s"
                                  : "",
                                "w-full flex justify-center px-12 font-face-gm"
                              )}
                            >
                              <a
                                // href={item.href}
                                className={classNames(
                                  item.name === currentTab
                                    ? "animate__animated animate__lightSpeedInLeft animate__delay-0.5s"
                                    : "text-black hover:translate-y-0.5 hover:bg-darkpurple ",
                                  "flex gap-x-5 rounded-md py-3 text-sm leading-6 font-semibold font-face-gm w-full"
                                )}
                              >
                                <img
                                  src={
                                    item.name === currentTab
                                      ? item.currentIcon
                                      : item.icon
                                  }
                                  alt=''
                                  className={classNames(
                                    item.name === currentTab
                                      ? "text-lightblue"
                                      : "text-white group-hover:text-white",
                                    "h-6 w-6 shrink-0"
                                  )}
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                          <p className='w-full flex justify-start px-12 font-face-gm'>
                            Other 2
                          </p>
                          {navigation.slice(6, 10).map((item) => (
                            <li
                              key={item.name}
                              className={classNames(
                                item.name === currentTab
                                  ? "bg-white border-solid border-l-4 border-l-orange text-orange animate__animated animate__fadeIn animate__delay-0.5s"
                                  : "",
                                "w-full flex justify-center px-12 font-face-gm"
                              )}
                            >
                              <a
                                // href={item.href}
                                className={classNames(
                                  item.name === currentTab
                                    ? "animate__animated animate__lightSpeedInLeft animate__delay-0.5s"
                                    : "text-black hover:translate-y-0.5 hover:bg-darkpurple ",
                                  "flex gap-x-5 rounded-md py-3 text-sm leading-6 font-semibold font-face-gm w-full"
                                )}
                              >
                                <img
                                  src={
                                    item.name === currentTab
                                      ? item.currentIcon
                                      : item.icon
                                  }
                                  alt=''
                                  className={classNames(
                                    item.name === currentTab
                                      ? "text-lightblue"
                                      : "text-white group-hover:text-white",
                                    "h-6 w-6 shrink-0"
                                  )}
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <div className='w-full flex justify-start px-12 font-face-gm'>
                        <Profile />
                      </div>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden w-auto lg:flex-none lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col scroll-w-0'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='bg-white flex grow flex-col items-center gap-y-5 overflow-y-auto py-5 scroll-w-0'>
          <nav className='flex flex-1 flex-col items-center w-full '>
            <ul
              role='list'
              className='flex flex-1 flex-col gap-y-7 justify-between items-center w-full'
            >
              <li className='w-full'>
                <div className='w-full flex justify-start px-12 pb-3 font-face-gm'>
                  <img
                    src={LOGO}
                    alt='logo'
                    className='flex justify-center  font-face-gm'
                  />
                </div>
                <ul
                  role='list'
                  className='space-y-2 flex flex-col justify-center pt-5'
                  onClick={handleTab}
                >
                  {navigation.slice(0, 4).map((item) => (
                    <li
                      key={item.name}
                      className={classNames(
                        item.name === currentTab
                          ? "bg-white border-solid border-l-4 border-l-orange text-orange animate__animated animate__fadeIn animate__delay-0.5s"
                          : "",
                        "w-full flex justify-center px-12 font-face-gm"
                      )}
                    >
                      <a
                        // href={item.href}
                        className={classNames(
                          item.name === currentTab
                            ? "animate__animated animate__lightSpeedInLeft animate__delay-0.5s"
                            : "text-black hover:translate-y-0.5 hover:bg-darkpurple ",
                          "flex gap-x-5 rounded-md py-3 text-sm leading-6 font-semibold font-face-gm w-full"
                        )}
                      >
                        <img
                          src={
                            item.name === currentTab
                              ? item.currentIcon
                              : item.icon
                          }
                          alt=''
                          className={classNames(
                            item.name === currentTab
                              ? "text-lightblue"
                              : "text-white group-hover:text-white",
                            "h-6 w-6 shrink-0"
                          )}
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <p className='w-full flex justify-start px-12 font-face-gm'>
                    Other 1
                  </p>
                  {navigation.slice(4, 6).map((item) => (
                    <li
                      key={item.name}
                      className={classNames(
                        item.name === currentTab
                          ? "bg-white border-solid border-l-4 border-l-orange text-orange animate__animated animate__fadeIn animate__delay-0.5s"
                          : "",
                        "w-full flex justify-center px-12 font-face-gm"
                      )}
                    >
                      <a
                        // href={item.href}
                        className={classNames(
                          item.name === currentTab
                            ? "animate__animated animate__lightSpeedInLeft animate__delay-0.5s"
                            : "text-black hover:translate-y-0.5 hover:bg-darkpurple ",
                          "flex gap-x-5 rounded-md py-3 text-sm leading-6 font-semibold font-face-gm w-full"
                        )}
                      >
                        <img
                          src={
                            item.name === currentTab
                              ? item.currentIcon
                              : item.icon
                          }
                          alt=''
                          className={classNames(
                            item.name === currentTab
                              ? "text-lightblue"
                              : "text-white group-hover:text-white",
                            "h-6 w-6 shrink-0"
                          )}
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <p className='w-full flex justify-start px-12 font-face-gm'>
                    Other 2
                  </p>
                  {navigation.slice(6, 10).map((item) => (
                    <li
                      key={item.name}
                      className={classNames(
                        item.name === currentTab
                          ? "bg-white border-solid border-l-4 border-l-orange text-orange animate__animated animate__fadeIn animate__delay-0.5s"
                          : "",
                        "w-full flex justify-center px-12 font-face-gm"
                      )}
                    >
                      <a
                        // href={item.href}
                        className={classNames(
                          item.name === currentTab
                            ? "animate__animated animate__lightSpeedInLeft animate__delay-0.5s"
                            : "text-black hover:translate-y-0.5 hover:bg-darkpurple ",
                          "flex gap-x-5 rounded-md py-3 text-sm leading-6 font-semibold font-face-gm w-full"
                        )}
                      >
                        <img
                          src={
                            item.name === currentTab
                              ? item.currentIcon
                              : item.icon
                          }
                          alt=''
                          className={classNames(
                            item.name === currentTab
                              ? "text-lightblue"
                              : "text-white group-hover:text-white",
                            "h-6 w-6 shrink-0"
                          )}
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <div className='w-full flex justify-start px-12 font-face-gm'>
                <Profile />
              </div>
            </ul>
          </nav>
        </div>
      </div>

      <div className='lg:flex-1 lg:pl-64'>
        <div className='sticky lg:hidden top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-lightpurple bg-orange-100 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-orange lg:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <Bars3Icon className='h-6 w-6 ' aria-hidden='true' />
          </button>
        </div>

        <main className='overflow-x-hidden'>
          <div className='sm:px-6'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
