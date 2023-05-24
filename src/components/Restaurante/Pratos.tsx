/* eslint-disable @next/next/no-img-element */
import Modal from "./Modal";
import { useState } from "react";

export interface IPratos {
  title: string;
  content: string;
  price: string;
  imageURL: string;
}


export default function Pratos(props: IPratos) {
  const {title, content, price, imageURL} = props;

  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between w-100% "> 
      <button onClick={() => setOpen(!open)} className="flex p-4 h-52 w-[640px] gap-4 bg-branco border-solid border border-borda hover:border-cinza transition-0.2s shadow rounded ">
        
        <div className="flex-columm w-[411px] h-[154px]">
          <div className="flex-1 h-full">
            <h3 className="flex flex-grow h-6 justify-start items-center mb-4 text-lg text-cinza-400 font-medium bg-branco">
                {title}
            </h3>
            <p className="flex w-full h-10 mb-3 text-sm text-cinza-200">
                {content} 
            </p>
          </div>
          
          <span className="flex justify- w-full text-base  text-cinza-400">
            A partir de R$ {price}
          </span>
        </div>
        
        
        <div className="flex justify-center items-center border-none ">
          <img  src={imageURL} alt="prato" className="flex justify-center items-end w-[180px] h-[174px]"/>        
        </div>
      </button>

      <Modal isOpen={open} setOpen={setOpen}/>
    </div>
  );
}
