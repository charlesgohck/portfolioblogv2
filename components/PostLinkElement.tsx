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
        <Link href={`/blog/${props.slug}`} style={{ height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "flex-start", height: "100%" }}>
                <img src={props.imagePath} alt={`${props.title} Post Image`} style={{ height: "100%", paddingRight: "2vh" }} />
                <div style={{ padding: "1.5vh", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
                    <div>
                        <div style={{ display: "flex", justifyContent: 'space-between' }}>
                            <h1>{props.title}</h1>
                            <h3>{props.date}</h3>
                        </div>
                        <br/>
                        <p>{props.excerpt}</p>
                    </div>
                    <div style={{ marginTop: "0.5vh", display: "flex", justifyContent: "flex-end" }}>
                        <p><strong>Read More</strong>&nbsp;&nbsp;<i className="fa solid fa-arrow-right" /></p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
}