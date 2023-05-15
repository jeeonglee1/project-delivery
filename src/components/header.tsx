import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className={`
            
        `}
    >
      <div className="flex items-center w-full h-20 px-8 py-5 gap-10 fixed shadow  text-vermelho">
       
        <div className={`flex items-center w-[52px] h-10`}>
          <a className="px-3 py-2 rounded-lg bg-vermelho text-branco" href="#">
            LOGO
          </a>
        </div>

        <nav className="flex justify-around items-center p-1 gap-6 text-vermelho ">
          <ul>
            <li>
              <Link href="">Início</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="text-cinza-200" href="">Restaurantes</Link>
            </li>
          </ul>
        </nav>

        

        <form className="flex items-center w-full h-[48px] shadow rounded-lg  bg-gray-100">
          <button className="flex items-center p-4  text-vermelho">
            <FaSearch />
          </button>
          <input
            className=" flex w-full pl-2 items-center  bg-gray-100 focus:outline-none text-preto"
            placeholder="Busque por item ou loja"
            type="text"
          />
        </form>

        <div className="flex p-2 gap-6 mr-6 h-[44px]">
          <div className="flex items-center">avatar</div>
          <button className="flex items-center">carrinho</button>
        </div>
      </div>
    </header>
  );
}
