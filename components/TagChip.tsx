import { useRouter } from "next/router"

interface TagChipProps {
    tag: string
    hasNoDarkMode?: boolean
}

export default function TagChip(props: TagChipProps) {

    let router = useRouter();

    const onClickTagChip = (e: React.MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/blog/tag/${props.tag}`);
    }

    let tagChipClassName = props.hasNoDarkMode ? "tagchipcontainernodarkmode" : "tagchipcontainer";

    return <div onClick={(e: React.MouseEvent): void => onClickTagChip(e)} className={tagChipClassName}>{props.tag}</div>
}