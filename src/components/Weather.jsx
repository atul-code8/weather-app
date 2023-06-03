import { TbSunrise } from "react-icons/tb";
import { TbSunset } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { FaCloudscale } from "react-icons/fa";
import { BiWind } from "react-icons/bi";

const Weather = ({ apiData }) => {
  return (
    <>
      <div className="weather-content mt-10 p-8">
        {apiData ? (
          <div className="flex flex-col gap-4">
            <div className="location">
              <h1 className="text-3xl font-medium text-white">
                {apiData.location.name}
              </h1>
              <p className="text-slate-200 mt-1">
                {apiData.location.region},{"  "}
                {apiData.location.country}
              </p>
            </div>
            <div>
              <h1 className="font-medium text-slate-100">Currently</h1>
              <p className="text-slate-200">{apiData.current.condition.text}</p>
            </div>
            <div className="condition flex flex-col sm:flex-row items-center gap-4">
              <img
                src={apiData.current.condition.icon}
                alt="weather"
                className="w-fit"
              />
              <h1 className="text-3xl text-slate-100">
                {apiData.current.temp_c} &#8451; / {apiData.current.temp_f}{" "}
                &#8457;
              </h1>
            </div>
            <div className="current-weather flex flex-wrap items-end gap-10 mt-2">
              <div>
                <p className="text-slate-300">
                  <WiHumidity className="text-[27px] mb-3" />
                  {apiData.current.humidity} &#37;
                </p>
              </div>
              <div>
                <p className="text-slate-300">
                  <BiWind className="text-[22px] mb-3 mx-auto" />
                  {apiData.current.wind_kph} Kph. / {"  "}
                  {apiData.current.wind_mph} Mph.
                </p>
              </div>
              <div>
                <p className="text-slate-300">
                  <FaCloudscale className="text-[22px] mb-3" />
                  {apiData.current.pressure_mb} mb.
                </p>
              </div>
            </div>
            <div className="forecast flex gap-10 mt-2">
              <div className="row-1 flex flex-col">
                <TbSunrise className="text-[22px] text-yellow-500" />
                <h1 className="text-slate-200"> Sunrise </h1>
                <p className="text-[14px] text-slate-300 mt-1">
                  {apiData.forecast.forecastday[0].astro.sunrise}
                </p>
              </div>
              <div className="row-2 flex flex-col">
                <TbSunset className="text-[22px] text-yellow-500" />
                <h1 className="text-slate-200"> Sunset </h1>
                <p className="text-[14px] text-slate-300 mt-1">
                  {apiData.forecast.forecastday[0].astro.sunset}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-white font-medium">Data is loading...</h1>
        )}
      </div>
    </>
  );
};

export default Weather;
