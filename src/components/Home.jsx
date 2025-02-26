import { FlaskConical, GraduationCap, Trophy } from "lucide-react";

const Home = () => {
  return (
    <div>
      <img
        src="tsabg.png"
        className="opacity-10 h-[100vh] w-[100vw] object-cover absolute"
      />
      <div className="relative font-josefin-sans gap-15 flex flex-col w-full h-[100vh] justify-center items-center ">
        <p className="text-5xl font-thin">3rd Place 2024 TEAMS Build</p>
        <p className="text-5xl font-thin">
          3 Awards at 2024 Bay TSA Conference
        </p>
        <p className="text-5xl font-thin">
          4 Awards at 2025 Bay TSA Conference
        </p>
        <a>
          <button className="bg-blue-300 text-blue-800 py-5 px-20 rounded-full text-3xl">
            Join
          </button>
        </a>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full p-10">
          <div className="py-20 flex">
            <div className="w-[50%] pr-5 flex gap-5 flex-col">
              <p className="text-6xl font-bold">What is TSA?</p>
              <p className="text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img
              src="placeholder.png"
              className="w-[50%] h-100 object-cover rounded-3xl"
            />
          </div>
          <div className="py-20 flex flex-col gap-10">
            <p className="text-6xl font-bold">Why should I join TSA?</p>
            <div className="flex justify-around gap-10">
              <div className="flex flex-col gap-5 items-center">
                <Trophy size={200} />
                <p className="text-3xl w-75 text-center">
                  Loream ipsum dolor sit amet.
                </p>
              </div>{" "}
              <div className="flex flex-col gap-5 items-center">
                <GraduationCap size={200} />
                <p className="text-3xl w-75 text-center">
                  Loream ipsum dolor sit amet.
                </p>
              </div>{" "}
              <div className="flex flex-col gap-5 items-center">
                <FlaskConical size={200} />
                <p className="text-3xl w-75 text-center">
                  Loream ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
