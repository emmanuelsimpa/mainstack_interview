import { CloudIcon, SunIcon, TvIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

import * as _ from "lodash";
import { classNames } from "../utils/classname";

type pageProps = {
  title: string;
  subtitleName?: string;
  subtitle: string;
  children?: React.ReactNode;
  amount?: string;
};

const PageHeader: React.FC<pageProps> = ({
  title,
  subtitle,
  amount,
  subtitleName,
  children,
}) => {
  return (
    <div className='max-w-7xl h-screen animate__animated animate__slideInUp lg:pt-7 lg:px-5'>
      <h2 className='text-xl font-bold tracking-tight text-gray-900 sm:text-2xl font-face-gm pb-5'>
        {title}
      </h2>
      <div className='w-full pb-2'>
        <div className='flex flex-row justify-between items-end'>
          <h2 className='flex items-end text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl font-face-gm'>
            {subtitleName}
            <CloudIcon className='ml-1 h-6 w-6 text-black'
            aria-hidden='true'/>
          </h2>

          <h2 className='pt-3 font-bold text-orange tracking-tight text-gray-900 font-face-gm'>
            {amount}
          </h2>
        </div>
        <p className='pt-2 text-lg leading-8 text-gray-600 font-face-gm'>
          {subtitle}
        </p>
      </div>
      {children}
    </div>
  );
};

type cardProps = {
  firstData?: [];
  addData?: { icon: any; color: string }[];
  subtitleName?: string;
  subtitle?: string;
  children?: React.ReactNode;
  amount?: string;
  title?: string;
};

export const CardDiv: React.FC<cardProps> = ({
  children,
  firstData,
  addData,
  title,
  subtitle,
}) => {
  const data = _.merge(firstData, addData);

  return (
    <div className='grow'>
      <div className='bg-white '>
        <div className='flex flex-row justify-between items-end'>
          <h1 className='text-xl font-bold tracking-tight text-black sm:text-2xl font-face-gm'>
            {title}
          </h1>
          <h1 className='font-bold text-orange tracking-tight text-black font-face-gm'>
            {subtitle}
          </h1>
        </div>
        <div className='flex flex-row justify-between items-center max-w-full pt-5'>
          <div>
            <ul>
              {data &&
                data?.map(
                  (item: any) =>
                    item.percent && (
                      <li>
                        <div className='flex flex-row w-full gap-2 items-center'>
                          <img
                            src={item.icon || item.source}
                            alt=''
                            className=''
                          />
                          <p>{item.country || item.source}</p>
                          <p>{item.percent}%</p>
                          {item.color && (
                            <div
                              style={{ backgroundColor: `${item.color}` }}
                              className={`w-3 h-3 rounded-full`}
                            ></div>
                          )}
                        </div>
                      </li>
                    )
                )}
            </ul>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
