interface PostLinkElementProps {
    title: string,
    date: string,
    excerpt: string,
    imagePath: string,
}

export default function(props: PostLinkElementProps) {
    return <div className="blogpostlinkelementcontainer">
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <h3>{props.excerpt}</h3>
        <h4>{props.imagePath}</h4>
    </div>
}