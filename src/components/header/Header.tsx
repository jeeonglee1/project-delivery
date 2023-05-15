import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Avatar from "./ícones-header/avatar";
import Cart from "./ícones-header/cart";
import Search from "./ícones-header/search";


export default function Header() {
  return (
    <header>
      <div className="flex items-center w-full h-20 px-8 py-5 gap-10 shadow  text-vermelho">
       
          <a className="flex justify-center items-center w-[60px] h-10 px-4 py-3 rounded-lg bg-vermelho text-branco" href="#">
            LOGO
          </a>
       

        <nav className="flex justify-around items-center p-1 gap-6 text-vermelho ">
          <ul>
            <li>
              <Link href="">Início</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="text-cinza-200 hover:text-vermelho" href="">Restaurantes</Link>
            </li>
          </ul>
        </nav>

        

        <form className="flex items-center w-full h-[48px] shadow rounded-lg  bg-gray-100">
          <button className="flex items-center p-4  text-vermelho">
            <Search />
          </button>
          <input
            className=" flex w-full pl-2 items-center  bg-gray-100 focus:outline-none text-preto"
            placeholder="Busque por item ou loja"
            type="text"
          />
        </form>

        <div className="flex items-center justify-center pr-4 pl gap-6  w -[100px] h-[44px]">
            <button className="flex justify-center items-center"><Avatar/></button>
          <button className="flex justify-center items-center"><Cart/></button>
         
        </div>
      </div>
    </header>
  );
}

