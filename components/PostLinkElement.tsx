import { useRouter } from "next/router";
import TagChip from "./TagChip";

interface PostLinkElementProps {
    slug: string,
    title: string,
    date: string,
    excerpt: string,
    tags: string,
    imagePath: string,
}

export default function PostLinkElement(props: PostLinkElementProps) {

    var tagsSplit = props.tags === null || props.tags === undefined || props.tags.length === 0 ? [] : props.tags.split(",");
    tagsSplit.sort();

    let router = useRouter();

    const onClickPostLinkElement = (e: React.MouseEvent): void => {
        e.preventDefault();
        router.push(`/blog/${props.slug}`);
    }

    return <div className="blogpostlinkelementcontainer" onClick={(e: React.MouseEvent): void => onClickPostLinkElement(e)}>
        <div style={{ display: "flex", justifyContent: "flex-start", height: "100%" }}>
            {/* <img src={props.imagePath} alt={`${props.title} Post Image`} style={{ paddingRight: "2vh", width: "25%" }} /> */}
            <div style={{ padding: "1.5vh", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <h1>{props.title}</h1>
                        <h3>{props.date}</h3>
                    </div>
                    <p>{props.excerpt}</p>
                </div>
                <div style={{ marginTop: "0.5vh", display: "flex", justifyContent: "space-between", alignItems: 'flex-end' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        {tagsSplit.map(tagName => <TagChip key={`${props.title}${tagName}TagLink`} tag={tagName} hasNoDarkMode={true} />)}
                    </div>
                    <p><strong>Read More</strong>&nbsp;&nbsp;<i className="fa solid fa-arrow-right" /></p>
                </div>
            </div>
        </div>
    </div>
}