function Menu() {
  return (
    <nav className="flex items-center justify-center">
      <ul className="flex gap-4">
        <li>
          <button className="px-4 py-2 transition-colors duration-250 ease-linear rounded-md group hover:bg-main cursor-pointer">
            <span className="text-xl text-main transition-colors duration-250 ease-linear group-hover:text-default">
              All
            </span>
          </button>
        </li>
        <li>
          <button className="px-4 py-2 transition-colors  duration-250 ease-linear rounded-md group hover:bg-main cursor-pointer">
            <span className="text-xl text-main transition-colors duration-250 ease-linear  group-hover:text-default">
              dsdsddssd
            </span>
          </button>
        </li>
        <li>
          <button className="px-4 py-2 transition-colors  duration-250 ease-linear rounded-md group hover:bg-main cursor-pointer">
            <span className="text-xl text-main transition-colors duration-250 ease-linear  group-hover:text-default">
              All
            </span>
          </button>
        </li>
        <li>
          <button className="px-4 py-2 transition-colors  duration-250 ease-linear rounded-md group hover:bg-main cursor-pointer">
            <span className="text-xl text-main transition-colors duration-250 ease-linear  group-hover:text-default">
              All
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
