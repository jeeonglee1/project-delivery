import Image from "next/image";

export default function Bullguer() {
  return (
    <div className="flex cursor-pointer">
      <Image
        src="/../public/images/bullguer.png"
        alt="bullguer"
        width={130}
        height={100}
        className="rounded-2xl w-36 h-40"
      />
    </div>
  );
}
