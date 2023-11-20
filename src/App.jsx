import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (

     <div className="w-full h-screen flex flex-col bg-gradient-to-br from-sky-500 to-yellow-200">
      <h1 className="h-[10%] bg-white  text-3xl font-sans rounded-lg text-center pt-6 mb-4 mt-4">RANDOM GIFS</h1>
      <div className="flex justify-center gap-24 ">
        <Random/>
        <Tag/>
       </div>
      
     </div>
     
  );
}
