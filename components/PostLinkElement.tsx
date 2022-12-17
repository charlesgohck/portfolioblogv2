import Link from "next/link";

interface PostLinkElementProps {
    slug: string,
    title: string,
    date: string,
    excerpt: string,
    imagePath: string,
}

export default function (props: PostLinkElementProps) {
    return <div className="blogpostlinkelementcontainer">
        <Link href={`/blog/${props.slug}`}>
            <img src={props.imagePath} alt={`${props.title} Post Image`} style={{ width: "100%" }} />
            <div style={{ padding: "1.5vh" }}>
                <h1>{props.title}</h1>
                <h2>{props.date}</h2>
                <h3>{props.excerpt}</h3>
                <div style={{ marginTop: "0.5vh", display: "flex", justifyContent: "flex-end" }}>
                    <p><strong>Read More</strong>&nbsp;&nbsp;<i className="fa solid fa-arrow-right" /></p>
                </div>
            </div>
        </Link>
    </div>
}