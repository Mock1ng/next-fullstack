import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gray-50 mx-auto mb-10">
      <HeaderBar />
      <SearchBar />
      {/* <p>banner</p> */}
    </div>
  );
};

const HeaderBar = () => {
  return (
    <div className="container flex justify-between text-xs items-center h-8 border-b-gray-200 border-b-2">
      <p>
        <Link href={"/"}>Download BeliBeli App</Link>
      </p>

      <div className="flex items-center">
        <ul className="flex space-x-4 text-gray-400">
          <li>
            <Link href={"/"}>Mitra BeliBeli</Link>
          </li>
          <li>
            <Link href={"/"}>About BeliBeli</Link>
          </li>
          <li>
            <Link href={"/"}>BeliBeli Care</Link>
          </li>
          <li>
            <Link href={"/"}>Promo</Link>
          </li>
        </ul>

        <div className="w-[2px] bg-gray-300 h-4 mx-2" />

        <ul className="flex">
          <li className="font-bold">
            <Link href={"/"}>Sign Up</Link>
          </li>

          <div className="w-[2px] bg-gray-200 h-4 mx-2" />

          <li className="font-bold">
            <Link href={"/"}>Sign In</Link>
          </li>

          <div className="w-[2px] bg-gray-200 h-4 mx-2" />

          <li className="font-bold">
            <Link href={"/admin"}>Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex container items-center py-4">
      <div className="mr-4 font-bold">
        <Link href={"/"}>BeliBeli.com</Link>
      </div>

      <div className="flex-1 h-9 flex items-center overflow-hidden">
        <div className="flex gap-2 items-center h-full border-2 border-gray-400 rounded-s-lg border-e-0 px-3">
          <p className="text-xs">All Category</p>
          <span className="rotate-90">&#8250;</span>
        </div>
        <form className="border-2 border-gray-400 h-full rounded-e-lg overflow-hidden flex-1 flex items-center">
          <span className="mx-2">&#128269;</span>
          <input
            type="text"
            className="flex-1 text-xs focus:outline-none bg-transparent"
            placeholder="Search produck or brand here"
          />
        </form>
      </div>

      <div className="ml-4 space-x-2">
        <span>C</span>
        <span>N</span>
      </div>
    </div>
  );
};

export default Header;
