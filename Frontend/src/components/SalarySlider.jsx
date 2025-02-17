import React, { useContext, useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { JobContext } from "../contexts/JobContext";

const SalarySlider = () => {
  const [values, setValues] = useState([30, 80]); // default min=30k, max=80k
  const MIN = 0;
  const MAX = 600;

  const { handleFilterBySalary } = useContext(JobContext);
  useEffect(() => {
    handleFilterBySalary(values[0] * 1000, values[1] * 1000);
  }, [values]);
  return (
    <div className="flex-1 p-4">
      <label className=" mb-2 font-medium w-full flex items-center justify-between">
     
        <p>Salary Per Month</p>
        <p>₹{values[0]}k - ₹{values[1]}k</p>
      </label>
      <Range
        step={1}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-[2px] w-full rounded-md"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#CCC2C2", "#222222", "#CCC2C2"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-[15px] aspect-square rounded-full border-[5px] bg-[#FFFFFF] border-[#222222]  cursor-pointer"
          />
        )}
      />
    </div>
  );
};

export default SalarySlider;
