/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Botao from "./Botao";
import Contador from "./Contador";
import X from "./X";

interface IModal {
   isOpen: boolean;
   setOpen: (isOpen: boolean) => void;
   currentDish: any;
 }

const handleChangePrince = () => {

}


const handleAddToCart = () => { 

}

export default function Modal({ isOpen, setOpen, currentDish }: IModal) {
  console.log(currentDish);

  if (isOpen) {
    return (
      <div className="fixed inset-0 flex justify-center items-center shadow z-50 bg-modal">
        <div className=" fixed flex-columm justify-center w-[1200px] h-[580px] bg-branco  rounded">
          <div className="flex justify-center h-full ">
            <div className="flex justify-center items-center h-full w-1/2 -4">
                <img src={currentDish.imageURL} className=" flex items-center p-2 w-[516px] h-[516px]"/>
            </div>

            <div className="flex-columm justify-center items-center w-1/2 h-100% space-y-4">
              <div className="flex justify-center items-end w-full h-36 ">
                <h2 className="flex justify-center items-center w-full h-4 px-10 text-justify font-medium text-xl text-cinza-h2">
                  {currentDish.title}
                </h2>
              </div>

              <div className="flex-columm justify-center">
                <div className="flex justify-center items-center w-full pt-2.5 px-10">
                  <p className="flex justify-center items-center w-full h-auto font-light text-cinza-200 text-justify">
                    {currentDish.content}
                  </p>
                </div>
                <div className="flex justify-center items-center w-full px-10 my-3">
                  <p className="flex justify-start items-center w-full h-auto text-cinza-h2 text-xs font-medium">
                    <span>{currentDish.price}</span>
                  </p>
                </div>
              </div>

                <div className="flex justify-center items-center w-full px-[39px]">
                    <div className="flex-columm justify-center items-center w-full ">
                        <div className="flex-columm justify-center items-center w-full mb-3 py-3 px-5 border-solid border-2 border-gray">
                        <div className="flex justify-start items-center">
                            <h3 className="flex justify-start items-center h-4 w-full text-cinza-h2 text-xs font-medium">Mcdonalds - Paulista</h3>
                        </div>
                        <div className="flex justify-center items-center w-full h-[1.6px] my-2 text-gray">
                            <p className="">--------------------------------------------------------------------------</p>
                        </div>
                        <div className="flex items-center h-4 w-full text-xs text-cinza-h2 font-normal">
                            <p>19-29 min</p>
                            <svg className="p-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#717171" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path></svg> 
                            <p>R$ 5,99</p>
                        </div>
                        </div>
                    </div>
                </div>
              
                <footer className=" absolute bottom-2 right-2 flex items-center h-20 p-5 pr-0 gap-6 mr-8 border-solid border-t-2 border-gray">
                    <Contador/>
                    <Botao priceModal = {currentDish.price} />
              </footer>
            </div>
          </div>

          <button
            onClick={() => setOpen(!isOpen)}
            className="absolute top-2 right-2 p-1 "
          >
            <X />
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
