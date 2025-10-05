"use client";

import calculator from "../assets/images/calculator.png";
import Image from "next/image";
import Footer from "../components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function HomePage() {
  const [ucode, setucode] = useState("");
  const router = useRouter();
  const handleAccessWebClick = () => {
    if (ucode == "") {
      alert("กรุณาป้อนโค้ดก่อนเข้าใช้งาน");
      return;
    }
    if (ucode.toLowerCase() == "sau") {
      // window.location.href = "/menu";
      router.push("/menu");
    } else {
      alert("โค้ดไม่ถูกต้อง");
    }
  };
  return (
    <>
      <div className="w-8/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">
        <Image className="mb-5" src={calculator} alt="calculator" width={200} />
        <h1 className="text-3xl text-blue-600 font-bold">
          Varity Calculator V.1.0
        </h1>
        <h1 className="text-3xl text-blue-600 mt-2">โปรแกรมคำนวณ</h1>

        <div className="flex flex-col w-full ">
          <label className="mb-2">
            {" "}
            ป้อนรหัสเข้าใช้งาน{" "}
            <span className="text-green-500">(ชื่อย่อ ม เอเชีย)</span>
          </label>
          <input
            value={ucode}
            onChange={(e) => {
              setucode(e.target.value);
            }}
            className="border border-gray-600 rounded p-2"
            type="text"
          />
        </div>
        <button
          type="button"
          onClick={handleAccessWebClick}
          className="bg-blue-500  hover:bg-blue-500 text-white font-bold py-2 rounded mt-5 w-full "
        >
          เข้าใช้งาน
        </button>
      </div>
      <Footer />
    </>
  );
}
