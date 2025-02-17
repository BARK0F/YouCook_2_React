import { Link } from "wouter";
import UserButton from "../molecule/UserButton";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex w-1/4">
        <Link
          className="btn btn-ghost text-xl font-extrabold text-primary"
          href="/"
        >
          Youcook
        </Link>
      </div>
      <div className="flex-none gap-2 w-3/4">
        <div className="form-control w-2/3">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow justify-center"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="dropdown dropdown-end w-1/3 flex justify-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/assets/defaultuser.jpg"
              />
            </div>
          </div>
          <UserButton />
        </div>
      </div>
    </div>
  );
}
