"use client";

import calculator from "./../../../assets/images/calculator.png";
import Image from "next/image";
import bmiimage  from "./../../../assets/images/bmi.png";
import { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Page() {
  const [weight, setWeight] = useState("");
  const [height, setheight] = useState("");
  const [bmi,setBmi] = useState("0.00");

  const handleCancel = () =>{
    setWeight("")
    setheight("")
    setBmi("0.00")
    return
  }

  const CalculateBmi = ()=>{
    if(weight == "" || height == ""){
      alert("กรุณากรอกข้อมูลให้ครบ")
      return
    }
    const parseHeight = parseFloat(height) / 100 
    const bmi = parseFloat(weight) / (parseHeight * parseHeight)
    setBmi(bmi.toFixed(2))
  }
  return (
    <>
      <div className="w-8/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">
        <Image className="mb-5" src={calculator} alt="calculator" width={150} />
        <h1 className="text-lg text-blue-600 font-bold mt-3">
          Varity Calculator V.1.0
        </h1>
        <h1 className="text-lg text-blue-600 mt-1 mb-5">โปรแกรมคำนวณ</h1>

        <div className="w-full border border-gray-300 flex flex-col items-center p-5 rounded-xl">
          <Image className="mb-5" src={bmiimage} alt="calculator" width={80} />
          <h1 className="text-lg text-blue-600 mt-1 mb-5">คำนวณ BMI (ดัชนีมวลกาย)</h1>
          <div className="w-full flex flex-col mb-3">
            <label>ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              type="number"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="w-full flex flex-col ">
            <label>ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              value={height}
              onChange={(e) => {
                setheight(e.target.value);
              }}
              type="number"
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <button
            onClick={CalculateBmi}
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
            <span>BMI ของคุณคือ</span>
            <span className="font-bold text-5xl text-red-600 mx-10">
              {bmi}
            </span>
          </div>
        </div>

        <Link className="mt-5 text-blue-600" href="/menu">
          กลับไปหน้าเมนู
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
