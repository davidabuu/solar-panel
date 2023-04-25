import Image from "next/image";
import React from "react";

const Solution = () => {
  return (
    <div id="solution"  className="solution-container pb-5">
      <div className="solution-info ththt">
        <Image
          src="/sol.jpg"
          alt="Picture of the author"
          width={300}
          height={200}
        />
        <div className="info">
          <p>
            Installation of solar power generation in your areas around the
            county will require a remote monitoring platform to control the
            solar panel plants that will guarantee good working condition of the
            solar plant system.
          </p>
          <p>
            The remote monitoring will give you a peace of mind of knowing if
            your solar system is working or have stopped working due to some
            damages and it will also give you information based on the data
            gathered from the solar system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
