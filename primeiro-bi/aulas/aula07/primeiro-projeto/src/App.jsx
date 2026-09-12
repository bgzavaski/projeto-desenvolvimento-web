import "./App.css"
import Cabecalho from "./assets/components/Cabecalho";
import Post from "./assets/components/Post";

export default function App() {

  var contador = 0;
  var nome = "Teste";

  return (
    <> <Cabecalho/> 
      <div>
        <h1 class="title"> Hello world!</h1>
        <p>Aluno {nome} </p>
        <h2>Contador: {contador}</h2>
        <section>
          <h1>Últimos posts:</h1>
          <Post 
            titulo="esse é o titulo do post"
            image="https://i.ytimg.com/vi/HwBPmFumjYo/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDczKXXLPOxmTqLU1JpcjLzFjLatQ&usqp=CCk"
            imageAlt="angolano.jpg"
            data="data do post"
            texto="bla bla bla bla"
          />
        </section>
      </div>
    </>
  )
}