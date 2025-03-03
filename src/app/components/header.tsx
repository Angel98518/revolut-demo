const Header = () => {
  return (
    <div className="flex flex-col gap-4 items-start md:items-center">
      <h1 className="text-4xl font-title md:text-[2.5rem] text-[2rem] md:text-center text-start uppercase font-black">
        Make your spend, well spent
      </h1>
      <p className="text-sm md:text-[1rem] text-[0.9rem] md:text-center text-start font-semibold">
        Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big
        life goals? Reach them faster. However you spend — Revolut is all you
        need.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-full max-w-[10rem] font-bold">
        Get started
      </button>
    </div>
  );
};

export default Header
