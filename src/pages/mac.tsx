import Header from "@/components/Header/Header";
import Banner from "@/components/Restaurante/Banner";
import SearchFood from "@/components/Restaurante/Busca";
import Cardapio from "@/components/Restaurante/Cardapio";
import InfoHeader from "@/components/Restaurante/InfoHeader";
import Pratos, { IPratos } from "@/components/Restaurante/Pratos";

const pratos: IPratos[]= [
  {
    title: "McOferta Big Tasty",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"35,90",
    imageURL:"/images-restaurant/bigtaste.png",
  },
  {
    title:"McOferta Big Mac",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"26,90",
    imageURL:"/images-restaurant/bigmac.jpg"
  }, 
  {
    title:"McOferta Quarteirão",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/quarteirao.jpg",
  },
  {
    title:"McOferta McChicken",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/McChicken.jpg",
  },
  {
    title:"McOferta Cheddar McMelt",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/McMelt.jpg",
  },
  {
    title:"McOferta McNífico",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mcnifico.jpg",
  },
  {
    title:"McOferta Crispy Chicken",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/CrispyChicken.jpg" ,
  },
  {
    title:"McOferta Chicken McNuggets",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/Nuggets.jpg",
  },
  {
    title:"Mc Lanche Feliz",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/McLancheFeliz.jpg",   
  },
  {
    title:"Mcflurry",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/Mcflurry.png", 
  }
];

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
          {
            pratos.length > 0 
            ? pratos.map((prato, index) => (
              <Pratos
                key={index}
                title={prato.title}
                content={prato.content}
                price={prato.price}
                imageURL={prato.imageURL}
              />
            ))
            : <p>Não há pratos!</p>
          }
        </div>
      </div>

      <div></div>
    </div>
  );
}
