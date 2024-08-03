const Hero = () => {
  return (
    <header className="bg-hero bg-center bg-no-repeat w-full p-16 px-8 gap-16">
      <div className="flex-1 flex flex-col gap-10">
        <img src="./logo.png" alt="logo" className="object-contain h-10 w-10" />
        <h1 className="text-5xl font-bold leading-[120%]">
          Achieve Your
          <span className="red-gradient"> Dream Physique </span>
          with Pumpfolio.
        </h1>
      </div>
      <div className="relative w-full h-[50vh] flex items-center justify-center">
        <img src="./baki.png" alt="anime" className="object-contain" />
      </div>
    </header>
  );
};

export default Hero;