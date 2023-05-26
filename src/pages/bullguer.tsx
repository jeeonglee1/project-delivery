import Header from "@/components/Header/Header";
import Banner from "@/components/Restaurante/Banner";
import SearchFood from "@/components/Restaurante/Busca";
import Cardapio from "@/components/Restaurante/Cardapio";
import InfoHeader from "@/components/Restaurante/InfoHeader";
import Modal from "@/components/Restaurante/Modal";
import Pratos, { IPratos } from "@/components/Restaurante/Pratos";
import { useState } from "react";

const pratos: IPratos[]= [
  {
    key: 1,
    title: "Bullguer",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"35,90",
    imageURL:"/images-restaurant/bullguer/bullguer.png",
  },
  {
    key: 2,
    title:"Lumberjack",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"26,90",
    imageURL:"/images-restaurant/bullguer/Lumberjack.png"
  }, 
  {
    key: 3,
    title:"Stencil",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Stencil.png",
  },
  {
    key: 4,
    title:"Chicken Hot Honey",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/ChickenHotHoney.png",
  },
  {
    key: 5,
    title:"Standard",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Standard.png",
  },
  {
    key: 6,
    title:"Bulldog",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Bulldog.png",
  },
  {
    key: 7,
    title:"Crickles",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Crinckles.png" ,
  },
  {
    key: 8,
    title:"Cheese Fries",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/CheeseFries.png",
  },
  {
    key: 9,
    title:"Maionese Bullguer",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Maionese.png",   
  },
  {
    key: 10,
    title:"Molho de Queijo",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/bullguer/Queijo.png", 
  }
];

export default function Bullguer() {
  const [open, setOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState({});
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
            ? pratos.map((prato) => (
              <Pratos
                key={prato.key}
                prato={prato}
                title={prato.title}
                content={prato.content}
                price={prato.price}
                imageURL={prato.imageURL}
                setCurrentDish={setCurrentDish}
                setOpen={() => setOpen(true)}
              />
            ))
            : <p>Não há pratos!</p>
          }
        </div>
      </div>

      <Modal isOpen={open} setOpen={setOpen} currentDish={currentDish} />
    </div>
  );
}
