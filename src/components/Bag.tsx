import { useState } from "react";
import Contador from "./Restaurante/Contador";
import X from "./Restaurante/X";

interface IBag {
  bagOpen: boolean;
  setBagOpen: (CartOpen: boolean) => void;
}



export default function Bag({ bagOpen, setBagOpen }: IBag) {

  const [content, setContent] = useState(false);

  const handleChangeContent = () => {
    setContent(!content)
  }

  if (bagOpen) {
    return (
      <div onClick={handleChangeContent} className="absolute right-0 flex justify-end items-end w-[475px] h-screen bg-branco z-50 mt-20 shadow-lg">
        <div>
          <button
            onClick={() => setBagOpen(!bagOpen)}
            className="absolute top-2 left-2 p-1 "
          >
            <X />
          </button>
        </div>
        
            <div className="flex justify-center items-center w-full h-full bg-branco  ">
            {content === false &&
              <div className="flex justify-center items-center w-5/6 h-5/6 bg-cinza">
                <div className="flex justify-center items-center w-3/4 h-full">
                {content ? "Sua sacola está vazia :')" : "oi"} 
                </div>
              </div>
            }
              <div>
              
              </div>
            </div>
           
      </div>
    );
  } else {
    return <></>;
  }
}
