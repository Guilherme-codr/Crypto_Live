function Header() {
  return (
    <header className="flex justify-between border-b-2 border-slate-800/65 z-10 sticky top-0 bg-bg-primary text-white p-4">
      <div className="flex justify-center items-center ">
        <h1 className="font-primary text-3xl ">
          Crypto <span className="text-text-destacado">Live</span>
        </h1>
      </div>
      <div>
        <a href="dashboard"><h6>Dashboard</h6></a>
      </div>
    </header>
  );
}

export default Header;
