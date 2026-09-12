export default function Post(props) {
    return (
        <article>
            <h2>{props.titulo}</h2>
            <img src={props.image} alt={props.imageAlt} width={400} height={600}/>
            <span>{props.data}</span>
            <p>{props.texto}</p>
        </article>
    )
}