function Services() {
  return (
    <section
      id="services"
      className="flex flex-col w-full justify-center items-center mt-[75px]"
    >
      <h1 className="text-5xl font-bold">Our Main Services</h1>
      <div className="flex flex-row justify-around mt-20 gap-[200px]">
        <div className="flex flex-col justify-center items-center w-[275px]">
          <img src="/images/Group 44.png" className="h-[100px] w-[100px]" />
          <span className="text-lg font-semibold mt-5">Web develop</span>
          <p className="w-full text-center mt-3">
            We have the necessary tools to guide you towards an optimal
            solution, whether it is a new creation, a redesign or technical
            assistance for a website.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[275px]">
          <img src="/images/iot 1.png" className="h-[100px] w-[100px]" />
          <span className="text-lg font-semibold mt-5">IOT</span>
          <p className="w-full text-center mt-3">
            We have the necessary tools to guide you towards an optimal
            solution, and we master the different development methods (M2M, IOT
            PYTHON for Rasbery).
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[275px]">
          <img
            src="/images/developpement-mobile 1.png"
            className="h-[100px] w-[100px]"
          />
          <span className="text-lg font-semibold mt-5">Mobile develop</span>
          <p className="w-full text-center mt-3">
            We master the different mobile development methods: Native
            (Objective-C for iOS, Java on Android) and Hybrid (Mostly HTML5).
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
