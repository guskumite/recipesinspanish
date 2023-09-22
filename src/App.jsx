import "./App.css";
import bgImg from "../src/assets/chickenandsalad.png";
import getTheFood from "./components/getTheFood";
import { useState } from "react";

function App() {
  const [theFood, setTheFood] = useState(null);
  let myChoice;
  const handleFood = () => {
    return getTheFood()
      .then((data) => {
        myChoice = Math.ceil(Math.random() * (data.length - 1));
        setTheFood(data[myChoice]);
        console.log(theFood);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const foodPromise = async () => {
    return handleFood();
  };

  return (
    <main>
      <img className="w-screen h-screen z-0 opacity-70" src={bgImg} />
      <section>
        <button
          className="rounded-full bg-cyan-300 w-[15%] h-[15%] text-lg absolute top-4 left-4
        hover:text-2xl hover:bg-zinc-300"
          onClick={() => {
            foodPromise().then((data) => {
              console.log(data);
            });
          }}
        >
          I want my food!
        </button>
        <div className="bg-cyan-300 h-[40%] w-[30%] absolute top-4 left-1/3">
          <h1 className="text-2xl">Categoría: {`${theFood?.category}`}</h1>
          <h2 className="pt-2 text-lg">Título: {`${theFood?.title}`} </h2>
          <a
            className="absolute top-[8rem] left-[6rem] text-3xl text-blue-700"
            href={`${theFood?.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Aquí la receta!{" "}
          </a>
          <img
            className="absolute top-[18rem] left-[2rem]"
            src={`${theFood?.img}`}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
