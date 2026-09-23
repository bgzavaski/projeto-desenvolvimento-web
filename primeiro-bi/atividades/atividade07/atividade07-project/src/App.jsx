import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'

function App() {

  const post = {
    titulo: "Fernando de Noronha",
    autor: "Bernardo",
    data: "22 de setembro de 2026",
    conteudo: [
      "Você sabia que nosso país é extremamente rico em diversidade e cultura? Sempre haverá algum lugar pouco conhecido para encantar quem decidir visitá-lo.",
      "Neste artigo você encontrará alguns dos melhores destinos brasileiros que valerão cada centavo investido na viagem."
    ],
    imagem: "/images/lugares-conhecer-brasil-fernando-noronha-1536x1027.jpg",
    legenda: "Fernando de Noronha - Pernambuco"
  }

  return (
    <div className="container">
      <header>
        <Header/>
        <Navigation />
      </header>            

      <main>
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
          imagem={post.imagem}
          legenda={post.legenda}
        />
      </main>
        
        <Sidebar />

        <Footer />
        
    </div>
  )
}

export default App