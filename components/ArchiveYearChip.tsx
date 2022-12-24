import { useRouter } from "next/router"

interface ArchiveYearChipProps {
    year: string
}

export default function YearChip(props: ArchiveYearChipProps) {

    let router = useRouter();

    const onClickTagChip = (e: React.MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/blog/archive/${props.year}`);
    }

    return <div onClick={(e: React.MouseEvent): void => onClickTagChip(e)} className="tagchipcontainer">{props.year}</div>
}