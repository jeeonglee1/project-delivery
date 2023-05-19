import Image from "next/image"

interface IProps {
    title: string;
    time: string;
    delivery: string;
    image?: "" 
  }

export default function InfoHeader(props: IProps){
    const {title, time, delivery, image} = props;

    return(
        <div className= "flex-columm justify-center items-center w-100% py-0 px-[30px] mt-[10px] mb-5 mx-[76.6px]">
            <div className=' flex items-center h-[125px] w-[1306px]'>
                <Image 
                className= {`flex mr-5 rounded-full`} 
                src="/../public/images-restaurant/teste4.jpg" 
                alt="logo"
                width={75} 
                height={75}/>
               
                <div className="flex-columm w-[927px] ">
                    <h1 className="font-semibold text-4xl text-cinza-400">{title}</h1>
                    <h2 className=" flex items-center gap-2 font-medium text-cinza-400">

                    </h2>
                    
                </div>
                <div className="flex-columm flex-auto justify-end items-end gap-2 text-sm font-medium text-cinza-200"> 
                     <div className="flex justify-end">
                        Tempo de entrega: {time}
                    </div>
                    <div>
                        <h2 className="flex justify-end font-medium text-cinza-200">
                            Frete: {delivery} 
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}