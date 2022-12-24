import { useRouter } from "next/router"

interface HistoryYearChipProps {
    year: string
}

export default function HistoryYearChip(props: HistoryYearChipProps) {

    let router = useRouter();

    const onClickTagChip = (e: React.MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/blog/history/${props.year}`);
    }

    return <div onClick={(e: React.MouseEvent): void => onClickTagChip(e)} className="tagchipcontainer">{props.year}</div>
}