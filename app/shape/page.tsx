import Image from "next/image";
import calculator from "./../../assets/images/calculator.png";
import Link from "next/link";
import circle from "./../../assets/images/circle.png";
import square from "./../../assets/images/square.png";
import triangle from "./../../assets/images/triangle.png";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <>
      <div className="w-8/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">
        <Image className="mb-5" src={calculator} alt="calculator" width={150} />
        <h1 className="text-xl text-blue-600 font-bold">
          Varity Calculator V.1.0
        </h1>
        <h1 className="text-xl text-blue-600 mt-2 mb-5">คำนวณรูปทรง</h1>

        <div className="w-full flex justify-center">
          <Link
            href="/shape/circle"
            className="text-xl text-white bg-blue-600 px-5 py-5 rounded-xl text-center mx-2"
          >
            <Image
              className="mx-auto"
              src={circle}
              alt="calculator"
              width={80}
            />
           วงกลม
          </Link>
          <Link
            href="/shape/square"
            className="text-xl text-white bg-blue-600 px-5 py-5 rounded-xl text-center mx-2"
          >
            <Image className="mx-auto" src={square} alt="calculator" width={80} />
            สี่เหลี่ยม
          </Link>
          <Link
            href="/shape/triangle"
            className="text-xl text-white bg-blue-600 px-5 py-5 rounded-xl text-center mx-2"
          >
            <Image className="mx-auto" src={triangle} alt="calculator" width={80} />
            สามเหลี่ยม
          </Link>
         
        </div>
          <Link className="mt-5 text-blue-600" href="/menu">
          กลับไปหน้าเมนู
        </Link>
      </div>
      <Footer />
    </>
  );
}
