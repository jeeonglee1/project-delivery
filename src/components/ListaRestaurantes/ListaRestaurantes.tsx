import Bullguer from "./Bullguer";
import Card from "./Card";
import DonaDeola from "./DonaDeola";
import PizzaHut from "./Habibs";
import Restaurantes from "./TextRestaurantes";

export default function ListaRestaurantes() {
  return (
    <div>
      <Restaurantes />
      <div className="my-5 mx-[180px] flex flex-wrap gap-4 justify-between">
        <div className="hover:-translate-y-0.5 transition p-2 flex items-center">
          <Bullguer />
          <Card titleLocal={"Bullguer • Barra Funda"} typeDistance={"Lanche • 2.4km"} minFreight={"20 - 30 min • R$14,99"} />
        </div>
        <div className="hover:-translate-y-0.5 transition p-2 flex items-center">
          <PizzaHut />
          <Card titleLocal={"Habib's  • Bom Retiro"} typeDistance={"Esfiha • 0.4km"} minFreight={"20 - 30 min • Grátis"} />
        </div>
        <div className="hover:-translate-y-0.5 transition p-2 flex items-center">
          <DonaDeola />
          <Card titleLocal="Dona Deôla • Higienópolis" typeDistance="Coreana • 0.9km" minFreight="15 - 20 min • Grátis"/>
        </div>
      </div>
    </div>
  )
}
