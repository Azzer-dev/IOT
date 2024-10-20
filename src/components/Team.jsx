import team from "../static/data";
function Team() {
  return (
    <section
      id="Team"
      className="flex flex-col w-full justify-center items-center mt-[75px]"
    >
      <h1 className="text-5xl font-bold">Team</h1>
      <div className="grid grid-cols-3 gap-10 mt-20  ">
        {team.map((item) => (
          <div
            className="flex flex-col justify-center items-center w-[375px] h-[425px] bg-secondary rounded-lg transition transform hover:scale-105"
            key={item.id}
          >
            z
            <div className=" flex">
              <img src={item.image} className="h-[260px] w-[325px]" />
              <div className="bg-yellowi absolute rounded-xl h-[75px] w-[200px] ml-[150px] mt-[220px] flex items-center">
                <div className="ml-7 text-xl font-thin ">
                  <span>{item.name}</span>
                  <br />
                  <span className="mt-1">{item.lastname}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full ml-20 mt-10 gap-3">
              <span className="text-2xl  text-light">{item.role}</span>
              <span className="text-2xl font-semibold text-white">
                {item.domain}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
