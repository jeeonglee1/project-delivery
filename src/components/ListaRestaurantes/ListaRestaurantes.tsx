import Bullguer from "./Bullguer";
import DonaDeola from "./DonaDeola";
import PizzaHut from "./PizzaHut";
import Restaurantes from "./TextRestaurantes";

export default function ListaRestaurantes() {
  return (
    <div>
      <Restaurantes />
      <div className="my-5 mx-[180px] flex flex-wrap gap-4 justify-between">
      <Bullguer />
      <PizzaHut />
      <DonaDeola />
      </div>
    </div>
  )
}
