import Image from "next/image";
import Menu from "./Menu";

export default function Sidebar() {
  return (
    <aside className="w-[230px] min-h-screen">
      <div className="fixed w-[226px] min-h-screen bg-[#212121] rounded-[0px_45px_45px_0px] ">
        <Image
          className="w-[118px] h-[42px] mx-auto mt-10 mb-16"
          alt="Logo"
          src="/vector.svg"
          width={25}
          height={25}
        />
        <Menu />
      </div>
    </aside>
  );
}
