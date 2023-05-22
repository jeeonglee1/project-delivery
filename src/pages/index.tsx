import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomeImages from "@/components/HomeImages/HomeImages";
import ListaPratos from "@/components/ListaPratos/ListaPratos";
import ListaRestaurantes from "@/components/ListaRestaurantes/ListaRestaurantes";


export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <HomeImages />
        <ListaPratos />
        <ListaRestaurantes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
