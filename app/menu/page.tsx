import Image from "next/image";
import calculator from "./../../assets/images/calculator.png";
import Link from "next/link";
import money from "./../../assets/images/money (1).png";
import bmi from "./../../assets/images/bmi.png";
import bmr from "./../../assets/images/bmr.png";
import shape from "./../../assets/images/shapes.png";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <>
      <div className="w-8/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">
        <Image className="mb-5" src={calculator} alt="calculator" width={150} />
        <h1 className="text-xl text-blue-600 font-bold">
          Varity Calculator V.1.0
        </h1>
        <h1 className="text-xl text-blue-600 mt-2 mb-5">โปรแกรมคำนวณ</h1>

        <div className="w-full flex justify-center">
          <Link
            href="/moneyshare"
            className="text-xl text-white bg-blue-600 px-5 py-5 rounded-xl text-center mx-2"
          >
            <Image
              className="mx-auto"
              src={money}
              alt="calculator"
              width={80}
            />
            แชร์เงินกันเถอะ
          </Link>
          <Link
            href="/bmi"
            className="text-xl text-white bg-blue-600 px-5 py-5 rounded-xl text-center mx-2"
          >
            <Image className="mx-auto" src={bmi} alt="calculator" width={80} />
            BMI
          </Link>
          <Link
            href="/bmr"
            className="text-xl text-white bg-blue-600 px-5 py-5 rounded-xl text-center mx-2"
          >
            <Image className="mx-auto" src={bmr} alt="calculator" width={80} />
            BMR
          </Link>
          <Link
            href="/shape"
            className="text-xl text-white bg-blue-600 px-5 py-5 rounded-xl text-center mx-2"
          >
            <Image
              className="mx-auto"
              src={shape}
              alt="calculator"
              width={80}
            />
            พื้นที่รูปทรง
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
