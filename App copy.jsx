/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
// import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import "./App.css";
import Profile from "./assets/images/Profile baru-01-01.jpg";
import Project1 from "./assets/images/tes.png";
import Modal1 from "./assets/images/8.png";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="w-full flex gap-8 justify-center">
        {" "}
        {/* HEADER */}
        <div className="bg-gray-800/50 bg-gradient-to-bl from-gray-700/30 via-transparent ring-1 ring-inset bg-blend-luminosity ring-white/5 'shadow-2xl shadow-gray-500/20  motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500  basis-1/3 gap-2 flex flex-col justify-center items-center text-center p-8 rounded-2xl">
          <div className="bg-black w-36 h-36 rounded-full">
            <img src={Profile} className="rounded-full" alt="" />
          </div>
          <p className="text-xl font-bold">Samuel Christiawan I</p>
          <p className="text-base">Graphic Designer | Web Developer</p>
        </div>
        <div className="bg-gray-800/50 bg-gradient-to-bl from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 'shadow-2xl shadow-gray-500/20 motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500   basis-2/3 flex flex-col justify-center items-center text-center p-10 px-24 rounded-2xl">
          <p className="text-xl">
            I'm a{" "}
            <span className="font-bold motion motion-safe:hover:underline transition-all duration-150 hover:cursor-crosshair">
              {" "}
              Graphic Designer{" "}
            </span>{" "}
            and{" "}
            <span className="font-bold motion motion-safe:hover:underline transition-all duration-150 hover:cursor-crosshair">
              {" "}
              Web Developer{" "}
            </span>{" "}
            based in Malang. Focused on brand identity, digital marketing, and
            digital branding.
          </p>

          <a
            className="text-white hover:text-white p-3 px-10 rounded-full font-bold hover:underline underline-offset-4 text-xl mt-5"
            href="mailto:christiawansamuel@gmail.com?subject=I%20want%20to%20work%20with%20you."
          >
            Reach Out Directly
          </a>
        </div>
      </div>

      <div className="w-full flex gap-8 justify-center mt-8">
        <div
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="bg-clip border-white motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500  basis-2/3 gap-1 flex flex-col justify-center items-center text-center"
        >
          <img
            src={Project1}
            className="rounded-2xl shadow-2xl shadow-gray-500/50"
            alt=""
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="  basis-1/3 flex flex-col justify-center items-left text-left p-3">
          <p className="font-bold text-xl">Ayasara</p>
          <p className="text-xl">Branding Design - 2023</p>
          <p className="text-base mt-4">
            My first significant project as a Graphic Designer marked a pivotal
            moment in my career. It was also the place where I honed my skills
            and grew professionally. This experience has shaped me into the
            designer I am today.
          </p>
        </div>
      </div>
      <div className="w-full flex gap-8 justify-center mt-8">
        <div className="  basis-1/3 flex flex-col justify-center items-left text-left p-3">
          <p className="font-bold text-xl">Ayasara</p>
          <p className="text-xl">Branding Design - 2023</p>
          <p className="text-base mt-4">
            Lorem ipsum dolor sit amet consectetur. Est mollis turpis ultrices
            enim tortor. Consectetur non urna arcu suspendisse morbi sagittis
            pellentesque. Fusce maecenas sodales aliquet nec. Etiam integer
            dictumst viverra sit dolor tincidunt at quis ultrices.
          </p>
        </div>
        <div className="bg-clip border-white motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500  basis-2/3 gap-1 flex flex-col justify-center items-center text-center">
          <img
            src={Project1}
            className="rounded-2xl shadow-2xl shadow-gray-500/50"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex gap-8 justify-center mt-8">
        <div className="bg-clip border-white motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500  basis-2/3 gap-1 flex flex-col justify-center items-center text-center">
          <img
            src={Project1}
            className="rounded-2xl shadow-2xl shadow-gray-500/50"
            alt=""
          />
        </div>
        <div className="  basis-1/3 flex flex-col justify-center items-left text-left p-3">
          <p className="font-bold text-xl">Ayasara</p>
          <p className="text-xl">Branding Design - 2023</p>
          <p className="text-base mt-4">
            Lorem ipsum dolor sit amet consectetur. Est mollis turpis ultrices
            enim tortor. Consectetur non urna arcu suspendisse morbi sagittis
            pellentesque. Fusce maecenas sodales aliquet nec. Etiam integer
            dictumst viverra sit dolor tincidunt at quis ultrices.
          </p>
        </div>
      </div>
      <div className="w-full flex gap-8 justify-center mt-8">
        <div className="  basis-1/3 flex flex-col justify-center items-left text-left p-3">
          <p className="font-bold text-xl">Ayasara</p>
          <p className="text-xl">Branding Design - 2023</p>
          <p className="text-base mt-4">
            Lorem ipsum dolor sit amet consectetur. Est mollis turpis ultrices
            enim tortor. Consectetur non urna arcu suspendisse morbi sagittis
            pellentesque. Fusce maecenas sodales aliquet nec. Etiam integer
            dictumst viverra sit dolor tincidunt at quis ultrices.
          </p>
        </div>
        <div className="bg-clip border-white motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500  basis-2/3 gap-1 flex flex-col justify-center items-center text-center">
          <img
            src={Project1}
            className="rounded-2xl shadow-2xl shadow-gray-500/50"
            alt=""
          />
        </div>
      </div>

      <div className="w-full flex gap-8 justify-center mt-8">
        {" "}
        {/* content */}
        <div className="  basis-1/6 flex flex-col justify-start items-right text-right p-3">
          <p className="text-base">About Me</p>
        </div>
        <div className="  basis-5/6 flex flex-col justify-center items-left text-justify p-3 text-base">
          <p>
            From the very outset of my journey in the digital realm, I've been
            driven by a deep-seated passion for design and development. Over the
            past four years, I've poured my heart into graphic design, proudly
            founding Ayasara along the way. Through Ayasara, I've had the
            privilege of assisting numerous clients in shaping their brand
            identities, from captivating promotional media to engaging social
            media designs.
          </p>
          <p className="mt-8">
            In tandem with my design pursuits, I've embraced the intricate world
            of web development for three years. I take immense pride in crafting
            tailored websites that resonate with a brand's essence, whether it's
            a compelling company profile or a dynamic portfolio site. Each
            project stands as a testament to my dedication to excellence and my
            unwavering commitment to bringing visions to life in the digital
            landscape.
          </p>
        </div>
      </div>

      <div className="w-full flex gap-8 justify-left mt-8">
        {" "}
        {/* Footer */}
        <div className="bg-gray-800/50 bg-gradient-to-bl w-full from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 'shadow-2xl shadow-gray-500/20  motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500  flex justify-left items-center text-center p-8 rounded-2xl">
          <div className="basis-2/3 flex gap-4">
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
          <div className="basis-1/3 flex justify-end  ">
            <p className="text-base">©2023 - Samuel</p>
          </div>
        </div>
      </div>

      {/* modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full mt-9 h-full">
              {/*content*/}
              <div className="xl:px-72 border-0 shadow-lg relative flex flex-col w-full bg-gray-950 rounded-xl outline-none focus:outline-none">
                {/*header*/}
                <div className=" text-lg flex justify-end p-8">
                  <span onClick={() => setShowModal(false)}>
                    <p className="hover:cursor-pointer">X</p>
                  </span>
                </div>
                {/*body*/}
                <div className="text-base flex flex-col justify-start p-8">
                  <div className="flex w-full">
                    <div className="text-2xl basis-2/3 flex flex-col justify-normal items-start ">
                      <p className="font-bold">AYASARA</p>
                      <p className="text-lg">Branding Design</p>
                    </div>
                    <div className="text-2xl flex flex-col justify-normal items-end w-full">
                      <p className="text-lg">2023</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 w-full mt-8 mb-20">
                    <div className="flex gap-16 text-justify">
                      <p>
                        @samuelc.i has embarked on a journey to craft a brand
                        identity that seamlessly aligns with Ayasara's visionary
                        goals. The mission was clear: create a design that not
                        only captures attention but also embodies the essence of
                        Ayasara itself.
                      </p>
                      <p>
                        Drawing inspiration from Ayasara's own vibrant and
                        distinctive logo, the challenge was to distill its
                        brilliance into a design that exuded simplicity without
                        compromising its bold character.
                      </p>
                    </div>
                    <div className="flex gap-16 text-justify">
                      <img
                        src={Project1}
                        alt=""
                        className="hover:cursor-pointer"
                      />
                    </div>
                    <div className="flex gap-16 text-justify">
                      <div className="flex basis-1/2 flex-col justify-center pr-20">
                        <p>
                          {" "}
                          The result? A brand identity that's nothing short of
                          eye-catching and entirely unique, mirroring the very
                          ethos of Ayasara. It stands as a testament to our
                          commitment to delivering designs that are not only
                          visually stunning but also deeply rooted in the
                          brand's core identity.
                          <br /> <br />
                          The key focus was on simplicity and color, mirroring
                          the ethos of Ayasara's own logo. Each element was
                          meticulously curated to maintain a clean and
                          uncluttered look, while at the same time, ensuring
                          that the spectrum of colors from the Ayasara logo
                          found its place within the design.
                        </p>
                      </div>
                      <div className="flex gap-5 basis-1/2 flex-col justify-center">
                        <img src={Modal1} alt="" />
                        <img src={Modal1} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-start w-full flex-wrap">
                      <div className="flex gap-5">
                        <div className="flex basis-1/3">
                          <img src={Modal1} alt="" />
                        </div>
                        <div className="flex basis-1/3">
                          <img src={Modal1} alt="" />
                        </div>
                        <div className="flex basis-1/3">
                          <img src={Modal1} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-16 text-justify px-72">
                      <p>
                        Through countless iterations and a shared dedication to
                        excellence, we successfully struck the perfect balance.
                        The resulting brand identity is a symphony of vivid hues
                        and minimalist design—a reflection of Ayasara's
                        unwavering commitment to providing high-quality,
                        innovative design solutions. <br /> <br />
                        This project is not just a collaboration; it's a
                        testament to the power of creative synergy. Together, we
                        have not only met the challenge but surpassed it,
                        creating a brand identity that stands tall as a beacon
                        of excellence and a testament to what's possible when
                        visionary minds come together."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <style>{`

`}</style>
    </>
  );
}

export default App;
