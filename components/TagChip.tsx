import Link from "next/link"

interface TagChipProps {
    tag: string
}

export default function TagChip(props: TagChipProps) {
    return <div className="tagchipcontainer">{props.tag}</div>
}