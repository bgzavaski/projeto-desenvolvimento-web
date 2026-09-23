function Article({ 
    titulo, 
    autor, 
    data, 
    dataISO, 
    conteudo, 
    imagem, 
    legenda }) {
    
    return (
        <article>

            <h2>{titulo}</h2>

            <p>
                Por {autor} - <time dateTime={dataISO}>{data}</time>
            </p>

            {conteudo.map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
            ))}

            <figure>
                <img src={imagem} alt={legenda} />
                <figcaption>{legenda}</figcaption>
            </figure>

        </article>
    );
}

export default Article;