
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Bart Daily Blog</h1>
            <h2 className="mt-5 md:mt-0">
                Welcome to {" "}
                <span className="underline decoration-4 decoration-red-600">
                    Every Developers
                </span> {" "}
                favourite blog in the Devosphere
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-green-600 max-w-sm">
            NEW products | tech technology | weekly merge dropp and more!
        </p>
        <div>

        </div>
    </div>
  );
};

export default Banner;