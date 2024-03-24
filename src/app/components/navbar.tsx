import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 flex-none z-10">
      <div className="navbar-start">
        {/* view-width < 1024px layout */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Share !</a>
              <ul className="p-2">
                <li>
                  <a>
                    <Link href={"/market/first"}>Chronos Market</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link href={"/market/second"}>2ry Chronos Market</Link>
                  </a>
                </li>
              </ul>
              <li>
                <a>
                  <Link href={"/nft/create"}>Create</Link>
                </a>
              </li>
            </li>
            <li>
              <a>
                <Link href={"/wallet"}>Wallet</Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost text-2xl">
            Chronos Share
          </Link>
        </div>
      </div>

      {/* nav */}
      <div className="navbar-center hidden lg:flex w-500">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="text-lg">Share !</summary>
              <ul className="p-2 w-[200px]">
                <li>
                  <Link href={"/market/first"}>Chronos Market</Link>
                </li>
                <li>
                  <Link href={"/market/second"}>2ry Chronos Market</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/nft/create"}>
              <summary className="text-lg">Create</summary>
            </Link>
          </li>
          <li className="text-lg">
            <Link href={"/wallet"}>Wallet</Link>
          </li>
        </ul>
      </div>
      <div className="w-100 flex-none gap-2">
        <div className="form-control">
          {/* search bar */}
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        {/* user info */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Balance</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
