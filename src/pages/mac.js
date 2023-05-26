import Header from "@/components/Header/Header";
import Banner from "@/components/Restaurante/Banner";
import SearchFood from "@/components/Restaurante/Busca";
import Cardapio from "@/components/Restaurante/Cardapio";
import InfoHeader from "@/components/Restaurante/InfoHeader";
import Pratos, { IPratos } from "@/components/Restaurante/Pratos";
import { useState } from "react";
import Modal from "../components/Restaurante/Modal";

// const pratos: IPratos[]= [
const pratos = [
  {
    id: 1,
    title: "McOferta Big Tasty",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"35,90",
    imageURL:"/images-restaurant/mac/BigTasty.png",
  },
  {
    id: 2,
    title:"McOferta Big Mac",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"26,90",
    imageURL:"/images-restaurant/mac/BigMac.png"
  }, 
  {
    id: 3,
    title:"McOferta Quarteirão",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/Quarterao.png",
  },
  {
    id: 4,
    title:"McOferta McChicken",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/McChicken.png",
  },
  {
    id: 5,
    title:"McOferta Cheddar McMelt",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/McMelt.png",
  },
  {
    id: 6,
    title:"McOferta McNífico",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/McNifico.png",
  },
  {
    id: 7,
    title:"McOferta Crispy Chicken",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/CrispyChicken.png" ,
  },
  {
    id: 8,
    title:"McOferta Chicken McNuggets",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/Nuggets.png",
  },
  {
    id: 9,
    title:"Mc Lanche Feliz",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/LancheFelizW.png",   
  },
  {
    id: 10,
    title:"Mcflurry",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
    price:"49,99",
    imageURL:"/images-restaurant/mac/Mcflurryi.png", 
  }
];

export default function Mac() {
  const [open, setOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState({});

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
            ? pratos.map((prato) => (
              <Pratos
                key={prato.id}
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
