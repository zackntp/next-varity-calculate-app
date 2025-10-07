"use client";

import calculator from "./../../../assets/images/calculator.png";
import Image from "next/image";
import bmrimage from "./../../../assets/images/bmr.png"; // เปลี่ยนชื่อไฟล์รูปได้ตามจริง
import { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male"); // male | female
  const [bmr, setBmr] = useState("0");

  const handleCancel = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmr("0");
    return;
  };

  const CalculateBmr = () => {
   
    if (
      weight.trim() === "" ||
      height.trim() === "" ||
      age.trim() === "" ||
      gender.trim() === ""
    ) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
      return;
    }

    let bmrValue = 0;
    if (gender === "male") {
      bmrValue = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmrValue = 10 * w + 6.25 * h - 5 * a - 161;
    }

    setBmr(bmrValue.toFixed(0));
  };

  return (
    <>
      <div className="w-8/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">
        <Image className="mb-5" src={calculator} alt="calculator" width={150} height={150} />
        <h1 className="text-lg text-blue-600 font-bold mt-3">Varity Calculator V.1.0</h1>
        <h1 className="text-lg text-blue-600 mt-1 mb-5">โปรแกรมคำนวณ</h1>

        <div className="w-full border border-gray-300 flex flex-col items-center p-5 rounded-xl">
          <Image className="mb-5" src={bmrimage} alt="bmr" width={80} height={80} />
          <h1 className="text-lg text-blue-600 mt-1 mb-5">คำนวณ BMR (Basal Metabolic Rate)</h1>

          <div className="w-full flex flex-col mb-3">
            <label>ป้อนน้ำหนัก (กิโลกรัม)</label>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="w-full flex flex-col mb-3">
            <label>ป้อนส่วนสูง (เซนติเมตร)</label>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              type="number"
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="w-full flex flex-col mb-3">
            <label>ป้อนอายุ (ปี)</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="w-full flex flex-col mb-3">
            <label>เพศ</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
            </select>
          </div>

          <button
            onClick={CalculateBmr}
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

          <div className="w-full flex flex-col justify-center items-center mt-10 text-center">
            <div className="text-xl">BMR ของคุณคือ</div>
            <div className="font-bold text-5xl text-red-600 mx-10">{bmr} kcal/วัน</div>
            
          </div>
        </div>

        <Link className="mt-5 text-blue-600" href="/menu">
          กลับไปหน้าเมนู
        </Link>
      </div>
      <Footer />
    </>
  );
}
