import Navbar from "./Navbar";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col w-full  rounded-3xl shadow-xl  bg-secondary"
    >
      <Navbar />
      <div className="flex flex-row p-[50px]">
        <div className="flex flex-col w-1/2 mt-5">
          <h1 className="font-semibold text-6xl">Club IOT ISIMG</h1>
          <p className="text-sm mt-5">
            is committed to providing resources and content to the Web/Mobile
            and lot domain development community. We believe that the Internet
            is a place where anyone should learn about the basics of anything.
            We aim to provide regular content, from think pieces to blogs,
            tutorials and more. Of course, these will cover all the bases of web
            development, from databases to networking, servers to development
            operations and everything in between. It doesnt matter if you are a
            front-end, full-stack or back-end, a student, a fully qualified
            software engineer or you have never touched a code editor in your
            life.Club lot Isimg hopes to provide you with something you need to
            successfully complete your next project of sums of big technologies
            like Framework SpringBoot and Node js...
          </p>
          <div className="flex flex-row mt-10 gap-5">
            <FaDribbble className="text-3xl transition transform hover:scale-105" />
            <FaInstagram className="text-3xl transition transform hover:scale-105" />
            <FaLinkedinIn className="text-3xl transition transform hover:scale-105" />
          </div>
          <div className="flex flex-row mt-20 gap-10">
            <button className="border-4 border-white rounded-xl px-[60px] py-3 font-semibold transition transform hover:scale-105">
              Portfolio
            </button>
            <a
              href="/contact"
              className="bg-yellowi rounded-xl px-[60px] py-3 font-semibold transition 
            transform hover:scale-105 flex justify-center items-center  "
            >
              Let s Talk!
            </a>
          </div>
        </div>
        <div>
          <img
            src="/images/Group 42.png"
            className="w-[500px] h-[500px] ml-[75px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
