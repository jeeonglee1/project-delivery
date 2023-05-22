import Restaurantes from "./TextRestaurantes";
import Bullguer from "./Bullguer";
import ChinaInBox from "./ChinaInBox";
import DonaDeola from "./DonaDeola";
import Habibs from "./Habibs";
import McDonalds from "./McDonalds";
import Dare from "./Daré";


export default function ListaRestaurantes() {
  return (
    <div>
      <Restaurantes />
      <div className="my-5 mx-[180px] grid grid-cols-3 gap-4">
        <Bullguer />        
        <ChinaInBox />
        <DonaDeola />
        <Habibs />
        <McDonalds />
        <Dare />
      </div>
    </div>
  )
};
