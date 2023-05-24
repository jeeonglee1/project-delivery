import Header from "@/components/Header/Header";
import Banner from "@/components/Restaurante/Banner";
import SearchFood from "@/components/Restaurante/Busca";
import Cardapio from "@/components/Restaurante/Cardapio";
import InfoHeader from "@/components/Restaurante/InfoHeader";
import Pratos, { IPratos } from "@/components/Restaurante/Pratos";

const pratos: IPratos[]= [
  {
    title: "Bullguer",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"35,90",
    imageURL:"/images-restaurant/bullguer/bullguer.png",
  },
  {
    title:"Lumberjack",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"26,90",
    imageURL:"/images-restaurant/bullguer/Lumberjack.png"
  }, 
  {
    title:"Stencil",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Stencil.png",
  },
  {
    title:"Chicken Hot Honey",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/ChickenHotHoney.png",
  },
  {
    title:"Standard",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Standard.png",
  },
  {
    title:"Bulldog",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Bulldog.png",
  },
  {
    title:"Crickles",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Crinckles.png" ,
  },
  {
    title:"Cheese Fries",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/CheeseFries.png",
  },
  {
    title:"Maionese Bullguer",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Maionese.png",   
  },
  {
    title:"Molho de Queijo",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Queijo.png", 
  }
];

export default function Bullguer() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Banner 
            imageURL="images-restaurant/bullguer/zyro-image.png"
        />
        <InfoHeader  
         imageURL="images/bullguer.png" title="Bullguer - Santana" time="20 - 30 min" delivery="Grátis" 
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
