import Image from "next/image";

interface IProps {
  title: string;
  content: string;
  price: string;
  imageURL?: string;
}


export default function Pratos(props: IProps) {
  const {title, content, price, imageURL} = props;

  return (
    <div className="flex justify-between w-100% "> 
      <button className="flex p-4 h-52 w-[640px] gap-4 bg-branco border-solid border border-borda hover:border-cinza transition-0.2s shadow rounded ">
        
        <div className="flex-columm w-[411px] h-[154px]">
          <div className="flex-1 h-full">
            <h3 className="flex flex-grow h-6 justify-start items-center mb-4 text-lg text-cinza-400 font-medium bg-branco">
                {title}
            </h3>
            <p className="flex w-full h-10 mb-3 text-sm text-cinza-200">
                {content} 
            </p>
          </div>
          
          <span className="flex justify- w-full text-base  text-cinza-400">
            A partir de R$ {price}
          </span>
        </div>
        
        
        <div className="flex border-none">
          {imageURL}
          <Image
            className= "border-none shadow-none"
            src= "/../public/images-restaurant/bigtasty.png"
            alt="bigtaste"
            width={180}
            height={174}
            />
        </div>
      </button>
    </div>
  );
}

//mx-[76.6px]