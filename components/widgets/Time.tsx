import { useEffect, useState } from "react";

import dayjs from "../../lib/dayjs";
import Widget from "../Widget";

const City = ({
  name,
  abbr,
  time,
}: {
  name: string;
  abbr: string;
  time: string;
}) => {
  return (
    <div className="w-full py-1 sm:py-1.5">
      <div className="-mx-0.5 bg-gray-950 py-0.5 text-center text-[8px] leading-[10px] sm:pb-px sm:text-[10px] sm:leading-[13px] md:pt-1 md:text-xs md:leading-[15px]">
        <p className="uppercase">
          <span className="sm:hidden">{abbr}</span>
          <span className="hidden tracking-tight sm:inline">{name}</span>
        </p>
        <p className="font-oxanium font-medium text-gray-100 md:text-sm">
          {time}
        </p>
      </div>
    </div>
  );
};

const Time = () => {
  const INITIAL_TIME = "00:00:00";
  const TIME_FORMAT = "HH:mm:ss";

  const [utc, setUTC] = useState(INITIAL_TIME);
  const [local, setLocal] = useState(INITIAL_TIME);
  const [los_angeles, setLosAngeles] = useState(INITIAL_TIME);
  const [new_york_city, setNewYorkCity] = useState(INITIAL_TIME);
  const [london, setLondon] = useState(INITIAL_TIME);
  const [singapore, setSingapore] = useState(INITIAL_TIME);
  const [dubai, setDubai] = useState(INITIAL_TIME);
  const [sydney, setSydney] = useState(INITIAL_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      const UTC = dayjs().utc();
      setUTC(UTC.format(TIME_FORMAT));
      setLocal(UTC.local().format(TIME_FORMAT));
      setLosAngeles(dayjs().tz("America/Los_Angeles").format(TIME_FORMAT));
      setNewYorkCity(dayjs().tz("America/New_York").format(TIME_FORMAT));
      setLondon(dayjs().tz("Europe/London").format(TIME_FORMAT));
      setDubai(dayjs().tz("Asia/Dubai").format(TIME_FORMAT));
      setSingapore(dayjs().tz("Asia/Singapore").format(TIME_FORMAT));
      setSydney(dayjs().tz("Australia/Sydney").format(TIME_FORMAT));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Widget title="Time" accentColor="secondary">
      <div className="-mt-2 grid grid-cols-2 gap-y-2 gap-x-4 sm:-mt-0.5 sm:gap-x-4.5 sm:gap-y-2.5 md:gap-x-5 md:gap-y-3">
        <div className="w-full space-y-0.5">
          <span className="rounded-sm px-1 text-[10px] font-bold leading-3 tracking-tighter text-primary ring-1 ring-primary md:text-xs">
            LOCAL
          </span>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 85.5"
            preserveAspectRatio="xMinYMin meet"
          >
            <foreignObject
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/1999/xhtml"
            >
              <h2 className="font-oxanium text-8xl text-gray-100">{local}</h2>
            </foreignObject>
          </svg>
        </div>
        <div className="w-full space-y-0.5">
          <span className="rounded-sm px-1 text-[10px] font-bold leading-3 tracking-tighter text-secondary ring-1 ring-secondary md:text-xs">
            UTC
          </span>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 85.5"
            preserveAspectRatio="xMinYMin meet"
          >
            <foreignObject
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/1999/xhtml"
            >
              <h2 className="font-oxanium text-8xl text-gray-500">{utc}</h2>
            </foreignObject>
          </svg>
        </div>
        <div className="col-span-full flex justify-evenly divide-x divide-primary/60 rounded-sm border border-primary/60">
          <City name="Los Angeles" abbr="LA" time={los_angeles} />
          <City name="New York City" abbr="NYC" time={new_york_city} />
          <City name="London" abbr="LON" time={london} />
          <City name="Dubai" abbr="DUB" time={dubai} />
          <City name="Singapore" abbr="SIN" time={singapore} />
          <City name="Sydney" abbr="SYD" time={sydney} />
        </div>
      </div>
    </Widget>
  );
};

export default Time;
