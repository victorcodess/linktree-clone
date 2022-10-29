

export default function Card(props) {
    return (
        <div className="card">
            <a href= {`${props.link}`} target= "_blank" rel= "noreferrer"><button>{props.title}</button></a>
        </div>
    )
}