import Link from "next/link"

interface TagChipProps {
    tag: string
}

export default function TagChip(props: TagChipProps) {
    return <Link href={`/blog/tag/${props.tag}`}>
        <div className="tagchipcontainer">{props.tag}</div>
    </Link>
}