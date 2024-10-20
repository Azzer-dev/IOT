import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row mt-10 p-10">
        <div className="w-1/2  bg-secondary rounded-lg p-5">
          <h1 className="text-5xl font-bold">Contact US</h1>
          <form className="flex flex-col p-3">
            <div className="flex flex-col mt-3">
              <span className="text-lg font-semibold">User Name</span>
              <input
                type="text"
                placeholder="User Name"
                className="bg-[#5d607b] rounded-lg text-light mt-1 h-[60px] p-5"
              />
            </div>
            <div className="flex flex-col mt-3">
              <span className="text-lg font-semibold">Email</span>
              <input
                type="text"
                placeholder="Email"
                className="bg-[#5d607b] rounded-lg text-light mt-1 h-[60px] p-5"
              />
            </div>
            <div className="flex flex-col mt-3">
              <span className="text-lg font-semibold">Message</span>
              <textarea
                style={{ resize: "none" }}
                type="text"
                placeholder="Message"
                className="bg-[#5d607b] rounded-lg text-light mt-1 h-[150px] p-5"
              />
            </div>
            <div className="flex justify-center items-center mt-10">
              <button className="bg-yellowi shadow-2xl text-2xl rounded-lg px-[100px] py-3 font-semibold transition transform hover:scale-105">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img src="/images/Mail sent-amico 1.png" className="w-[500px]" />
        </div>
      </div>
    </>
  );
}

export default Contact;
