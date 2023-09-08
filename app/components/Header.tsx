import Image from "next/image";
import Search from "./Search";

export default function Header() {
  return (
    <header className="bg-[#191919] z-10 fixed w-full h-30 top-0 pt-11">
      <div className=" max-w-[890px] h-28 ">
        <Search />
      </div>
    </header>
  );
}
