import { useRouter } from "next/router"

interface HistoryYearChipProps {
    year: string
    hasNoDarkMode?: boolean
}

export default function HistoryYearChip(props: HistoryYearChipProps) {

    let router = useRouter();

    const onClickTagChip = (e: React.MouseEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/blog/history/${props.year}`);
    }

    let historyChipClassName = props.hasNoDarkMode ? "tagchipcontainernodarkmode": "tagchipcontainer";

    return <div onClick={(e: React.MouseEvent): void => onClickTagChip(e)} className={historyChipClassName}>{props.year}</div>
}