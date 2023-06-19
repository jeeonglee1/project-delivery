import Contador from "./Restaurante/Contador";
import X from "./Restaurante/X";
import Botao from "./Restaurante/Botao";

interface IBag {
  bagOpen: boolean;
  setBagOpen: (CartOpen: boolean) => void;
}

export default function Bag({ bagOpen, setBagOpen }: IBag) {
<<<<<<< HEAD
  if (bagOpen) {
    return (
      <div className="absolute right-1 flex justify-end items-end w-[475px] h-screen bg-cinza z-50 mt-20">
        <button
          onClick={() => setBagOpen(!bagOpen)}
          className="absolute top-2 right-2 p-1 "
        >
          <X />
          TESTE
        </button>
      </div>
    );
  } else {
=======
  //estado de sacola vazia e com item
  const [content, setContent] = useState(true);

  //será que preciso fazer um estado para acrescentar mais de um item? 

  if (bagOpen) {
    return (
      <div className="fixed right-0 flex w-[475px] h-screen z-50 mt-20 shadow-lg overflow-auto">
        <div className="flex justify-center items-center w-full h-full bg-branco ">
          <div className="flex-col w-5/6 h-5/6 ">
            {!content && <p>Sua sacola está vazia :'(</p>}
            {content && (
              <>
                <div className="flex justify-start w-100% h-10 mb-3 ">
                  <h1 className="text-cinza-h2 text-lg font-semibold">
                    Nome do restaurante
                  </h1>
                </div>
                <div className="flex-cow w-100% h-100  py-4 space-y-3 border-t border-cinza ">
                  <div className="flex justify-between text-base font-semibold text-cinza-h2">
                    <h2>Nome do prato 1</h2>
                    <span>R$ 35.00</span>
                  </div>
                  <div className="flex gap-3">
                    <Contador />
                    <button className="text-cinza-100">| Remover Item |</button>
                  </div>
                </div>

                <div className="flex-cow w-100% h-100  py-4 space-y-3 border-t border-cinza ">
                  <div className="flex justify-between text-base font-semibold text-cinza-h2">
                    <h2>Nome do prato 1</h2>
                    <span>R$ 35.00</span>
                  </div>
                  <div className="flex gap-3">
                    <Contador />
                    <button className="text-cinza-100">| Remover Item |</button>
                  </div>
                </div>

                <div className="flex-col py-3 text-cinza-200 border-t border-cinza ">
                  <div className="flex justify-between ">
                    <p className="text-sm ">Subtotal</p>
                    <span className="text-base text-cinza-h2">R$ 35.00</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm">Taxa de Entrega</p>
                    <span className="text-base text-cinza-h2">R$ 00.00</span>
                  </div>
                </div>

                <div className=" fixed bottom-0 flex-col w-[400px] h-[100px] bg-branco space-y-3 z-10 text-cinza-h2">
                  <div className="flex justify-between font-bold ">
                    <p className="text-lg ">Total</p>
                    <span className="">R$35.00</span>
                  </div>
                  <div className="flex justify-center mt-2">
                    <Botao label="Finalizar Pedido" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
       </div> 
  )} else {
>>>>>>> f0d35aee3e3cd440cda1de8638f85b9bb232565c
    return <></>;
  }
}