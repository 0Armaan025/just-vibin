import React from "react";
import "./middlepart.css";
import Link from "next/link";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <>
      <div className="middlePartDiv flex flex-row justify-start items-center">
        <div className="flex flex-col justify-center items-start">
          <img
            src="https://images.unsplash.com/photo-1604941878418-b0fbf86e3590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2ZSUyMHN0cmVhbWluZ3xlbnwwfHwwfHx8MA%3D%3D"
            style={{ width: "85%", height: "85.99vh" }}
          />
        </div>
        <div className="flex flex-col justify-start items-start mr-16">
          <h3
            className="text-[6.5rem] leading-[5.3rem] font-extrabold w-[30rem] mr-[6rem]"
            style={{ fontFamily: "Bebas Neue,sans-serif" }}
          >
            LIVE STREAMING{" "}
            <span
              className="font-light text-[6rem] "
              style={{ fontFamily: "Poppins" }}
            >
              AT YOUR FINGERTIPS
            </span>
          </h3>
          <div className="detailsDiv mt-28 flex flex-row justify-start items-start">
            <h4 className="w-80" style={{ fontFamily: "Poppins" }}>
              Futuristic illustration collection that blends industrial design
              aesthetic and digital products.
            </h4>
            <Link href="/room">
              <input
                type="button"
                className="ml-8 bg-[#000000] transition-all cursor-pointer hover:bg-[#1c1c1c] py-3 px-4 h-16 rounded-sm text-white"
                value="Get Started"
                style={{ fontFamily: "Poppins" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddlePart;
