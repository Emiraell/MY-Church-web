import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

export default function Goai() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const programDate = new Date("Oct 1, 2024");
      const distance = (programDate - currentDate) / 1000;
      if (distance > 0) {
        setDays(Math.floor(distance / 60 / 60 / 24));
        setHours(Math.floor((distance / 60 / 60) % 24));
        setMinutes(Math.floor((distance / 60) % 60));
        setSeconds(Math.floor(distance % 60));
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  //console.log(currentDate, programDate, distance);
  return (
    <div className="bg-gray-300 text-center text-textCol-primary">
      <Header page={"GOD OF ALL IMPOSSIBILITIES"} />
      <div>
        <div className="flex justify-around text-xl py-5">
          <p>
            {days} <span className="block">Days</span>
          </p>
          <p>
            {hours} <span className="block">Hours</span>
          </p>
          <p>
            {minutes} <span className="block">Minutes</span>
          </p>
          <p>
            {seconds}
            <span className="block">Seconds</span>
          </p>
        </div>
      </div>
    </div>
  );
}
