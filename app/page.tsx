import Image from "next/image";
import qrImage from "@/images/image-qr-code.png";

export default function Home() {
  return (
    <div className="body flex justify-center  items-center h-screen ">
      <div className="card w-60 h-96 p-3 rounded-xl ">
        <div className="heder ">
          <Image src={qrImage} alt="qr image" className="rounded-md" />
        </div>

        <div className="futer text-center mt-4">
          <div className="bigText">Improve your front-end skills by building projects </div>
          <div className="smallText text-xs mt-4 w-52">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </div>
  );
}
