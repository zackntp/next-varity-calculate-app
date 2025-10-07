"use client";

import calculator from "./../../../assets/images/calculator.png";
import Image from "next/image";
import circle from "./../../../assets/images/circle.png";
import { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Page() {
  const [radius, setRadius] = useState("");
  const [area, setArea] = useState("0.00");

 const calculateArea = () => {
    if (!radius) return alert("กรุณากรอกค่ารัศมี");
    const result = Math.PI * parseFloat(radius) ** 2;
    setArea(result.toFixed(2));
  };

  const handleCancel = () => {
    setRadius("");
    setArea("0.00");
  };
  return (
    <>
      <div className="w-8/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">
        <Image className="mb-5" src={calculator} alt="calculator" width={150} />
        <h1 className="text-lg text-blue-600 font-bold mt-3">
          Varity Calculator V.1.0
        </h1>
        <h1 className="text-lg text-blue-600 mt-1 mb-5">โปรแกรมคำนวณ</h1>

        <div className="w-full border border-gray-300 flex flex-col items-center p-5 rounded-xl">
          <Image className="mb-5" src={circle} alt="calculator" width={80} />
          <h1 className="text-lg text-blue-600 mt-1 mb-5">คำนวณพื้นที่วงกลม</h1>
          <div className="w-full flex flex-col mb-3">
            <label>รัศมี</label>
            <input
              value={radius}
              onChange={(e) => {
                setRadius(e.target.value);
              }}
              type="number"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
      
          <button
            onClick={calculateArea}
            type="button"
            className="w-full text-lg text-white bg-blue-600 px-5 py-2 rounded hover:bg-blue-700 text-center mt-5 cursor-pointer"
          >
            คำนวณ
          </button>
          <button
            onClick={handleCancel}
            type="button"
            className="w-full text-lg text-white bg-orange-600 px-5 py-2 rounded hover:bg-orange-700 text-center mt-5 cursor-pointer"
          >
            ยกเลิก
          </button>
          <div className="w-full flex justify-center items-center  mt-10 text-center text-5xl ">
            <span>รัศมีวงกลม = </span>
            <span className="font-bold text-5xl text-red-600 mx-10">
              {area}
            </span>
          </div>
        </div>

        <Link className="mt-5 text-blue-600" href="/shape">
          กลับไปหน้าเมนู
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
