import Contador from "./Restaurante/Contador";
import X from "./Restaurante/X";

interface IBag {
  bagOpen: boolean;
  setBagOpen: (CartOpen: boolean) => void;
}

export default function Bag({ bagOpen, setBagOpen }: IBag) {
  if (bagOpen) {
    return (
      <div className="absolute right-1 flex justify-end items-end w-[475px] h-screen     bg-cinza z-50 mt-20">
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
    return <></>;
  }
}
