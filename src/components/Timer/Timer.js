import { useState } from "react";

const Timer = () => {
  const date = new Date(2022, 0, 10);

  const updateTime = () => Math.floor((date - new Date()) / 1000);

  const [valueOfTimer, setValueOfTimer] = useState(updateTime());
  setInterval(() => {
    setValueOfTimer(updateTime);
  }, 1000);
  const countDays = Math.floor(valueOfTimer / (3600 * 24));
  const countHours = Math.floor((valueOfTimer % (3600 * 24)) / 3600);
  const countMinutes = Math.floor((valueOfTimer % 3600) / 60);
  const countSeconds = Math.floor(valueOfTimer % 60);
  return (
    <div>
      <div>
        <div>{countDays < 10 ? "0" + countDays : countDays}</div>
        <p>Days</p>
      </div>
      <div>
        <div>{countHours < 10 ? "0" + countHours : countHours}</div>
        <p>Hours</p>
      </div>
      <div>
        <div>{countMinutes < 10 ? "0" + countMinutes : countMinutes}</div>
        <p>Minutes</p>
      </div>
      <div>
        <div>{countSeconds < 10 ? "0" + countSeconds : countSeconds}</div>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
