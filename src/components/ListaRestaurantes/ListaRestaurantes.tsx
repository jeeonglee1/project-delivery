import Card from "./Card";
import ChinaInBox from "./ChinaInBox";
import DonaDeola from "./DonaDeola";
import Habibs from "./Habibs";
import Restaurantes from "./TextRestaurantes";
import Bullguer from "./Bullguer";

export default function ListaRestaurantes() {
  return (
    <div>
      <Restaurantes />
      <div className="my-5 mx-[180px] flex flex-wrap gap-4 justify-between">
        <Bullguer />        
        <Habibs />
        <DonaDeola />
        <ChinaInBox/>    
      </div>
    </div>
  )
}
