"use client";
import { useStateContext } from "@/contexts/ContextProvider";

export default function Home() {
  const { currentColor } = useStateContext();
  console.log(currentColor);
  return (
    <div
      className="bg-gray-100 pb-12 overflow-y-hidden"
      style={{ minHeight: 700 }}
    >
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-gray-800 font-black leading-7 md:leading-10">
              Solução completa para atender às necessidades específicas da
              <span style={{ color: currentColor }}>
                {" "}
                administração municipal.
              </span>
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
              Você terá acesso imediato a análises detalhadas, visualizações
              intuitivas e dados em tempo real que vão revolucionar a maneira
              como você toma decisões.{" "}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border  py-2 sm:py-4 text-sm`}
              style={{
                backgroundColor: currentColor,
                border: currentColor,
              }}
            >
              Get Started
            </button>
            <button
              className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border   px-4 sm:px-10 py-2 sm:py-4 text-sm"
              style={{
                border: `1px solid ${currentColor}`,
                color: currentColor,
              }}
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
