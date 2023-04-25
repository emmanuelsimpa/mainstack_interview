import React, { useEffect, useState } from "react";
import PageHeader, { CardDiv } from "../../component/PageHeader";
import { classNames } from "../../utils/classname";
import LineChart from "../../component/LineChart";
import PieChart from "../../component/PieChart";
import axios from "axios";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { location, sources } from "../../assets/data";

const url = "https://fe-task-api.mainstack.io/";


const DashboardView: React.FC = () => {
  const [date, setDate] = useState<string>("All Time");
  const [data, setData] = useState<any>();

  const handleDate = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const target = e.target as HTMLElement;
    if (!target) {
      return;
    }
    setDate(target.innerText);
  };

  const handleApi = async () => {
    try {
      const response = await axios.get(url);
      return setData(response.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  const myDate = new Date();
    const hours= myDate.getHours();
    let greet;

    if (hours < 12)
        greet =  "Good Morning, Blessing.";
    else if (hours >= 12 && hours <= 17)
        greet = "Good Afternoon, Blessing.";
    else if (hours >= 17 && hours <= 24)
        greet = "Good Evening, Blessing.";


  return (
    <PageHeader
      title='Dashboard'
      subtitleName={greet}
      subtitle='Check out your dashboard summary.'
      amount='View analytics'
    >
      <div className='flex flex-row sm:flex-col gap-5 w-full animate__animated animate__zoomIn animate__delay-1s'>
        <div className='pt-5 space-y-2'>
          <div className='flex items-center gap-5 py-3 h-12'>
            <p
              onClick={handleDate}
              className={classNames(
                date === "1 Day"
                  ? "bg-orange-100 border-solid border-2 border-orange rounded-3xl justify-center py-5 px-5 "
                  : "hover:scale-110",
                "flex items-center h-full cursor-default"
              )}
            >
              1 Day
            </p>
            <p
              onClick={handleDate}
              className={classNames(
                date === "3 Days"
                  ? "bg-orange-100 border-solid border-2 border-orange rounded-3xl justify-center py-5 px-5 "
                  : "hover:scale-110",
                "flex items-center h-full cursor-default"
              )}
            >
              3 Days
            </p>
            <p
              onClick={handleDate}
              className={classNames(
                date === "7 Days"
                  ? "bg-orange-100 border-solid border-2 border-orange rounded-3xl justify-center py-5 px-5 "
                  : "hover:scale-110",
                "flex items-center h-full cursor-default"
              )}
            >
              7 Days
            </p>
            <p
              onClick={handleDate}
              className={classNames(
                date === "30 days"
                  ? "bg-orange-100 border-solid border-2 border-orange rounded-3xl justify-center py-5 px-5 "
                  : "hover:scale-110",
                "flex items-center h-full cursor-default"
              )}
            >
              30 days
            </p>
            <p
              onClick={handleDate}
              className={classNames(
                date === "All Time"
                  ? "bg-orange-100 border-solid border-2 border-orange rounded-3xl justify-center py-5 px-5 "
                  : "hover:scale-110",
                "flex items-center h-full cursor-default"
              )}
            >
              All Time
            </p>
            <p
              onClick={handleDate}
              className={classNames(
                date === "1 Day"
                  ? "bg-orange-100 border-solid border-2 border-orange rounded-3xl justify-center py-5 px-5 "
                  : "hover:scale-110",
                "flex items-center h-full cursor-default"
              )}
            >
              Custom date
            </p>
          </div>
          <div className=''>
            <LineChart date={date} title='Page Views' number='500' apiData={data?.graph_data}/>
          </div>
          <div className='flex flex-col justify-between gap-16 pt-10 sm:flex-row w-full'>
            {data && (
              <CardDiv
              title="Top Locations"
              subtitle="View full reports"
                firstData={data?.top_locations}
                addData={location}
                children={
                  <PieChart
                    firstData={data?.top_locations}
                    addData={location}
                  />
                }
              />
            )}
            {data && (
              <CardDiv
              title="Top Referral source"
              subtitle="View full reports"
                firstData={data?.top_sources}
                addData={sources}
                children={
                  <PieChart firstData={data?.top_sources} addData={location} />
                }
              />
            )}
          </div>
        </div>
      </div>
    </PageHeader>
  );
};

export default DashboardView;
