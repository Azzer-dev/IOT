function Trainings() {
  return (
    <section
      id="trainings"
      className="flex flex-col w-full justify-center items-center mt-[75px]"
    >
      <h1 className="text-5xl font-bold">Trainings</h1>
      <div className="flex flex-row justify-around mt-20 gap-[50px] ">
        <div className="flex flex-col justify-center items-center w-[350px] h-[400px] bg-secondary rounded-lg transition transform hover:scale-105">
          <img src="/images/Vector.png" className="h-[200px] w-[200px]" />
          <span className="text-5xl font-semibold mt-10">Angular</span>
        </div>
        <div className="flex flex-col justify-center items-center  w-[350px] h-[400px] bg-secondary rounded-lg transition transform hover:scale-105">
          <img src="/images/microchip.png" className="h-[200px] w-[200px]" />
          <span className="text-5xl font-semibold mt-10">AI</span>
        </div>
        <div className="flex flex-col justify-center items-center  w-[350px] h-[400px] bg-secondary rounded-lg transition transform hover:scale-105">
          <img
            src="/images/icons8-spring-boot 3.png"
            className="h-[200px] w-[200px]"
          />
          <span className="text-5xl font-semibold mt-10">SpringBoot</span>
        </div>
      </div>
    </section>
  );
}

export default Trainings;
