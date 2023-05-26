import Header from "@/components/Header/Header";
import Banner from "@/components/Restaurante/Banner";
import SearchFood from "@/components/Restaurante/Busca";
import Cardapio from "@/components/Restaurante/Cardapio";
import InfoHeader from "@/components/Restaurante/InfoHeader";
import Pratos, { IPratos } from "@/components/Restaurante/Pratos";

const pratos: IPratos[]= [
    {
      title: "Top Side, corte de cozão mole com arroz + 01 acompanhamento extra",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"35,90",
      imageURL:"/images-restaurant/montana/TopSide.png",
    },
    {
      title:"Top side, corte de coxão mole com massa fettuccine + 01 molho",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"26,90",
      imageURL:"/images-restaurant/montana/TopSideM.png"
    }, 
    {
      title:"Executivo de iscas de frango com arroz, feijão e + 01 extra de sua esolha",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/ExecutivoFrango.png",
    },
    {
      title:"Executivo de tiras de Alcatra, com arroz, feijão e + 01 extra a sua escolha",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/ExecutivoAlcatra.png",
    },
    {
        title:"Corte de Contra Filé + 03 acompanhamentos",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odiolabore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
        price:"49,99",
        imageURL:"/images-restaurant/montana/ContraFile.png",
      },
    {
      title:"Parmegiana de Frango + 03 acompanhamentos extras",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/Parmegiana.png",
    },
    {
      title:"Montan Steak Angus (200g), corte angus + 03 acompanhamentos extras",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/Angus.png" ,
    },
    {
      title:"Filé de Frango Grelhado + 03 acompanhamentos extras",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/FileFrango.png",
    },
    {
      title:"Salada",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/Salada.png",   
    },
    {
      title:"Strogonoff de frando com arroz e fritas montana",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio labore laudantium obcaecati tempore asdasdçalskdaçslk açsldk...",
      price:"49,99",
      imageURL:"/images-restaurant/montana/Strog.png", 
    }
  ];

export default function Montana() {
    return(
        <div>
      <div>
        <Header />
      </div>

      <div>
        <Banner
          imageURL="images-restaurant/montana/BannerMontana.png"
        />
        <InfoHeader  
          imageURL="images/montanagrill.jpg" title="Montana - Shopping D " time="35 min" delivery="R$ 4,99" 
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
    )
}