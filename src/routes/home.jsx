import { useState } from "react";
import Profile from "../assets/images/Profile baru-01-01.jpg";
import Project1 from "../assets/images/tes.png";
import Modal1 from "../assets/images/8.png";
export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-10 md:mt- justify-center">
        {" "}
        {/* HEADER */}
        <div className="gap-2 flex flex-col justify-center items-center md:items-start rounded-2xl">
          <div className="bg-black w-36 h-36 rounded-full mb-4">
            <img src={Profile} className="rounded-full" alt="" />
          </div>
          <p className="text-left text-xl font-bold">Samuel Christiawan I</p>
          <p className="text-left text-base">
            ~ Graphic Designer | Web Developer
          </p>
        </div>
        <div className="md:w-4/5 w-full flex flex-col justify-center md:items-start items-center text-left rounded-2xl">
          <p className="md:text-left leading-relaxed text-center md:text-xl">
            I'm a{" "}
            <span className="font-bold motion hover:underline transition-all duration-150 hover:cursor-crosshair">
              {" "}
              Graphic Designer{" "}
            </span>{" "}
            and{" "}
            <span className="font-bold motion hover:underline transition-all duration-150 hover:cursor-crosshair">
              {" "}
              Web Developer{" "}
            </span>{" "}
            based in Malang, specializing in brand identity, digital marketing,
            and digital branding. I'm also actively involved in the web design
            and development process, which encompasses stages such as
            Information Gathering, Structure, Design, Build, Testing, and
            Launch.
          </p>

          <a
            className="text-white hover:text-white rounded-full font-bold hover:underline underline-offset-4 md:text-xl mt-5"
            href="mailto:christiawansamuel@gmail.com?subject=I%20want%20to%20work%20with%20you."
          >
            Reach Out Directly
          </a>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:gap-16 gap-5 justify-center mt-16">
        <div
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="bg-clip border-white hover:scale-[1.01] transition-all duration-300 focus:outline focus:outline-2 focus:outline-red-500  md:basis-2/3 gap-1 flex flex-col justify-center items-center text-center"
        >
          <img
            src={Project1}
            className="rounded-2xl shadow-2xl shadow-gray-500/50"
            alt=""
          />
        </div>
        <div className="  md:basis-1/3 flex flex-col justify-center items-left text-left md:p-3">
          <div className="hover:underline hover:cursor-pointer">
            <p className="font-bold text-xl">Ayasara</p>
            <p className="text-lg text-gray-400">Branding Design - 2023</p>
          </div>
          <p className="text-base mt-4 text-justify">
            My first significant project as a Graphic Designer marked a pivotal
            moment in my career. It was also the place where I honed my skills
            and grew professionally. This experience has shaped me into the
            designer I am today.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row md:gap-16 gap-5 justify-center mt-16">
        <div className="  md:basis-1/3 flex flex-col justify-center items-end md:items-start md:p-3">
          <p className="font-bold text-xl">Ayasara</p>
          <p className="text-xl">Branding Design - 2023</p>
          <p className="text-base mt-4 text-right md:text-justify">
            Lorem ipsum dolor sit amet consectetur. Est mollis turpis ultrices
            enim tortor. Consectetur non urna arcu suspendisse morbi sagittis
            pellentesque. Fusce maecenas sodales aliquet nec. Etiam integer
            dictumst viverra sit dolor tincidunt at quis ultrices.
          </p>
        </div>
        <div className="bg-clip border-white hover:scale-[1.01] transition-all duration-300 focus:outline focus:outline-2 focus:outline-red-500  basis-2/3 gap-1 flex flex-col justify-center items-center text-center">
          <img
            src={Project1}
            className="rounded-2xl shadow-2xl shadow-gray-500/50"
            alt=""
          />
        </div>
      </div>

      <div className="w-full flex gap-8 justify-start mt-32">
        {" "}
        {/* content */}
        <div className=" md:w-4/5 leading-relaxed  flex flex-col justify-start items-start text-left p-3 md:text-xl">
          <p>
            From the start of my digital journey, I've been deeply passionate
            about design and development. Four years ago, I founded Ayasara,
            where I've assisted clients in crafting memorable brand identities,
            from promotional media to social media designs.
          </p>
          <p className="mt-8">
            Additionally, I've delved into web development for three years,
            crafting websites that authentically represent brands. Every project
            underscores my dedication to excellence and my commitment to
            bringing visions to life online.
          </p>
        </div>
      </div>

      <div className="w-full flex g8-8 justify-left mt-16">
        {" "}
        {/* Footer */}
        <div
          className="bg-gray-800/50 bg-gradient-to-bl w-full from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 'shadow-2xl shadow-gray-500/20  hover:scale-[1.01] transition-all duration-300 focus:outline focus:outline-2 focus:outline-red-500 
        flex md:flex-row flex-col justify-left items-center text-center p-8 rounded-2xl md:gap-0 gap-5
        "
        >
          <div className="md:basis-2/3 basis-full flex md:justify-start justify-center md:gap-4 gap-5">
            <a href="https://www.behance.net/samuelc_i">
              <p className="text-base underline">BeHance</p>
            </a>
            <a href="https://dribbble.com/samuelc_i">
              <p className="text-base underline">Dribbbble</p>
            </a>
            <a href="https://www.instagram.com/santiran.a/">
              <p className="text-base underline">Instagram</p>
            </a>
            <a href="https://github.com/samuelchrist12">
              <p className="text-base underline">GitHub</p>
            </a>
          </div>
          <div className="md:basis-1/3 flex justify-end">
            <p className="text-base">©2023 - Samuel</p>
          </div>
        </div>
      </div>
    </>
  );
}
