import Link from "next/link"
import { useRouter } from "next/router"

interface TagChipProps {
    tag: string
}

export default function TagChip(props: TagChipProps) {

    let router = useRouter();

    const onClickTagChip = (e: React.MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/blog/tag/${props.tag}`);
    }

    return <div onClick={(e: React.MouseEvent): void => onClickTagChip(e)} className="tagchipcontainer">{props.tag}</div>
}