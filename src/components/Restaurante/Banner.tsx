import Image from "next/image"

interface IProps {
    image?: "" 
  }

export default function Banner(props: IProps) {
    const {image} = props;
    return (
        <div className=" pt-20">
            <div className="flex justify-center w-full h-[285px] py-9 pb-0 bg-branco">
                <Image
                    className="flex justify-center items-center mb-0 rounded-md"
                    src="/../public/images-restaurant/bannerMc.png"
                    alt="banner-mc"
                    width={1310}
                    height={250}
                />
            </div>
        </div>
    )
}