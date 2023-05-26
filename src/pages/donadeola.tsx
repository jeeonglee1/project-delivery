import Header from "@/components/Header/Header";
import Banner from "@/components/Restaurante/Banner";
import SearchFood from "@/components/Restaurante/Busca";
import Cardapio from "@/components/Restaurante/Cardapio";
import InfoHeader from "@/components/Restaurante/InfoHeader";
import Pratos, { IPratos } from "@/components/Restaurante/Pratos";

const pratos: IPratos[]= [
    {
      title: "Pão Delícia",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"35,90",
      imageURL:"/images-restaurant/donadeola/PaoDelicia.png",
    },
    {
      title:"Mini pão de queijo (10 unidades)",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"26,90",
      imageURL:"/images-restaurant/donadeola/PaoDeQueijo.png"
    }, 
    {
      title:"Pão Francês na chapa",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/donadeola/PaoFrances.png",
    },
    {
      title:"Empada de frango",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/donadeola/EmpadaDeFrango.png",
    },
    {
        title:"Pão Francês (5 unidades)",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
        price:"49,99",
        imageURL:"/images-restaurant/donadeola/PaoFrances5.png",
      },
    {
      title:"Mini Pão Delícia (5 unidades)",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/donadeola/MiniPao.png",
    },
    {
      title:"Copan",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/donadeola/Copan.png" ,
    },
    {
      title:"Pinacoteca",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/donadeola/Pinacoteca.png",
    },
    {
      title:"Mini Pudim de Doce de Leite",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/donadeola/MiniPudim.png",   
    },
    {
      title:"Café Expresso",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/donadeola/CafeExpresso.png", 
    }
  ];


export default function Deola() {
    return (
        <div>
          <div>
            <Header />
          </div>
    
          <div>
            <Banner
              imageURL="images-restaurant/donadeola/BannerDeola.png"
            />
            <InfoHeader  
              imageURL="images-restaurant/donadeola/DonaDeola.png" title="Dona Deôla - Higienopolis" time="35 min" delivery="R$ 4,99" 
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