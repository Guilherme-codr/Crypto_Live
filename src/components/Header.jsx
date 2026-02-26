function Header() {
  return (
    <header className="flex justify-center font-bold border-b-2 border-slate-800/65 z-10 sticky top-0 bg-bg-primary text-white p-4">
      <div className="flex justify-between items-center w-7xl">
        <div className="flex justify-center items-center ">
        <h1 className="font-primary text-3xl ">
          Crypto <span className="text-text-destacado">Live</span>
        </h1>
      </div>
      <div>
        <a href="dashboard"><h6 className="font-semibold">Dashboard</h6></a>
      </div>
      </div>
    </header>
  );
}

export default Header;
