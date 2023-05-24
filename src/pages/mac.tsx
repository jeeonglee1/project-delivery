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
    imageURL:"/images-restaurant/mac/BigTasty.png",
  },
  {
    title:"McOferta Big Mac",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"26,90",
    imageURL:"/images-restaurant/mac/BigMac.png"
  }, 
  {
    title:"McOferta Quarteirão",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/Quarterao.png",
  },
  {
    title:"McOferta McChicken",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/McChicken.png",
  },
  {
    title:"McOferta Cheddar McMelt",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/McMelt.png",
  },
  {
    title:"McOferta McNífico",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/McNifico.png",
  },
  {
    title:"McOferta Crispy Chicken",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/CrispyChicken.png" ,
  },
  {
    title:"McOferta Chicken McNuggets",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/Nuggets.png",
  },
  {
    title:"Mc Lanche Feliz",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/LancheFelizW.png",   
  },
  {
    title:"Mcflurry",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/Mcflurryi.png", 
  }
];

export default function Mac() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Banner
          imageURL="images-restaurant/mac/bannerMc.png"
        />
        <InfoHeader  
          imageURL="images/mc.png" title="Mcdonald's - Av. Paulista" time="35 min" delivery="R$ 4,99" 
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
