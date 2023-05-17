import Header from "@/components/Header/Header";
import HomeImages from "@/components/HomeImages/HomeImages";
import ListaPratos from "@/components/ListaPratos/ListaPratos";
import ListaRestaurantes from "@/components/ListaRestaurantes/ListaRestaurantes";


export default function Home() {
  return (
    <div>
      <Header />
      <HomeImages />
      <ListaPratos />
      <ListaRestaurantes />
    </div>
  );
}
