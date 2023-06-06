
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Alex Travel Blog</h1>
            <h2 className="mt-5 md:mt-3">
                Welcome to {" "}
                <span className="underline decoration-4 decoration-green-500">
                the ultimate
                </span> {" "}
                travel blog!
            </h2>
        </div>
        <div>
        <p className="mt-5 md:mt-3 text-green-500 max-w-md">
            NEW products | travel tips | discounts on accommodation and much more!
        </p>
        </div>
    </div>
  );
};

export default Banner;