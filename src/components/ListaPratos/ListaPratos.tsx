import FreteGratis from "./TextFrete";
import Salada from "./Salada";
import SalmaoGrelhado from "./SalmaoGrelhado";
import RisotoOriental from "./RisotoOriental";
import Sanduiche from "./Sanduiche";
import Espetinho from "./Espetinho";

export default function ListaPratos() {
  return (
    <div className="mt-5 mx-[180px]">
      <FreteGratis />
      <div className="py-5 flex w-ful gap-4">
        <Salada />
        <SalmaoGrelhado />
        <RisotoOriental />
        <Sanduiche />
        <Espetinho />
    </div>
    </div>
  );
}
