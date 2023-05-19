import Search from "../Header/Header-icons/Search";

export default function SearchFood() {
  return (
    <div className="flex-auto justify-center items-center w-100% py-0 px-[30px] mx-[76.6px]">
        <div className="flex items-center w-full h-[62px] border-solid border-2 border-gray bg-branco p-4">
            <Search />
            <input
                className=" flex w-full h-full pl-2 items-center bg-branco focus:outline-none text-preto"
                placeholder="Buscar no cardápio"
                type="text"
           ></input>
        </div>
    </div>
   
  );
}
