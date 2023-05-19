import Header from "@/components/Header/Header";
import Banner from "@/components/Restaurante/Banner";
import SearchFood from "@/components/Restaurante/Busca";
import Cardapio from "@/components/Restaurante/Cardapio";
import InfoHeader from "@/components/Restaurante/InfoHeader";
import Pratos from "@/components/Restaurante/Pratos";

export default function Restaurant() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Banner />
        <InfoHeader  
          title="Mcdonalds - Aclimação" time="35 min" delivery="R$ 4,99" 
        />
        <SearchFood />
      </div>

      <div>
        <Cardapio />

        <div className="flex flex-wrap  justify-center gap-6 mb-10">
          <Pratos
            title="McOferta Big Tasty"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
                labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk..."
            price="35,90"
            
          />
          <Pratos
            title="McOferta Big Mac"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
                labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk..."
            price="26,90"
            
          />
          <Pratos
            title="Mc Lanche Feliz"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
                labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk..."
            price="49,99"
         
          />
          <Pratos
            title="McOferta Big Tasty"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
                labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk..."
            price="49,99"
            
          />
          <Pratos
            title="McOferta Cheddar McMelt"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
                labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk..."
            price="49,99"
            
          />
          <Pratos
            title="McOferta McChicken"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
                labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk..."
            price="49,99"
            
          />
          <Pratos
            title="McOferta Big Tasty"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
                labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk..."
            price="49,99"
          
          />
          <Pratos
            title="McOferta Big Tasty"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
                labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk..."
            price="49,99"
            
          />
          <Pratos
            title="Mc"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
                labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk..."
            price="49,99"
            
          />
          <Pratos
            title="Mcflurry "
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
                labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk..."
            price="49,99"
           
          />
        </div>
      </div>

      <div></div>
    </div>
  );
}
