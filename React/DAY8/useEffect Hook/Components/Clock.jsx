import React, { useEffect, useState } from "react";


/* Flip Digit Component */
function FlipDigit({ value }) {
  return (
    <div className="w-32 h-40 relative">
      <div
        key={value}
        className="w-full h-full rounded-2xl 
        bg-gradient-to-b from-[#5a3e2b] to-[#2d1f16]
        shadow-[0_8px_20px_rgba(0,0,0,0.25)]
        border border-[#3b2a1f]
        relative overflow-hidden
        flex items-center justify-center"
      >
        {/* Middle Divider */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/30 z-10"></div>

        {/* Top Light */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10"></div>

        {/* Number */}
        <span className="text-7xl font-semibold text-[#f4f1ed] tracking-wide drop-shadow-md">
          {value}
        </span>
      </div>
    </div>
  );
}


/* Clock Box */
function ClockBox({ value, label }) {
  const formatted = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-4">
        <FlipDigit value={formatted[0]} />
        <FlipDigit value={formatted[1]} />
      </div>

      <p className="text-sm tracking-[8px] text-gray-400 font-semibold">
        {label}
      </p>
    </div>
  );
}

const Clock = () => {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const clockTiming = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      clearInterval(clockTiming);
    };
  }, []);

  return (
  <div className="min-h-screen flex items-center justify-center bg-[#e8e4df]">
    <div className="px-10 py-6 rounded-3xl bg-[#f5f2ee] 
      shadow-[0_20px_40px_rgba(0,0,0,0.15)]
      border border-[#d8d3cc]">

      <div className="flex gap-6">
        <ClockBox value={time.getHours()} label="" />
        <ClockBox value={time.getMinutes()} label="" />
        <ClockBox value={time.getSeconds()}/>
      </div>

    </div>
  </div>

  );
};

export default Clock;
