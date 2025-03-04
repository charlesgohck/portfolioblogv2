import Link from "next/link";
import { BLOG_TAGS } from "../utils";
import HistoryYearChip from "./HistoryYearChip";
import FadeInSection from "./FadeInSection";
import TagChip from "./TagChip";

interface BackToPostsSectionProps {
    showBackToPostsLink?: boolean
}

export default function BackToPostsSection(props: BackToPostsSectionProps) {

    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getUTCFullYear();
    var yearsList: string[] = [];
    for (var i = 2022; i <= currentYear; i++) {
        yearsList.push(i.toString());
    }

    return <div>
        {
            props.showBackToPostsLink === null || props.showBackToPostsLink === undefined || props.showBackToPostsLink
                ? <section className='sectionelement'>
                    <div className='linkelement'>
                        <Link href={'/blog'}>
                            <p><strong>Back To All Posts</strong>&nbsp;&nbsp;<i className="fa solid fa-arrow-right" /></p>
                        </Link>
                    </div>
                </section> : <></>
        }
        <FadeInSection>
            <h1 style={{ textAlign: "center", paddingTop: '5vh' }}>Topics</h1>
        </FadeInSection>
        <FadeInSection>
            <div className="sectionelement">
                {BLOG_TAGS.map(tag => <TagChip key={`tagFor${tag}`} tag={tag} />)}
            </div>
        </FadeInSection>
        <FadeInSection>
            <h1 style={{ textAlign: "center", paddingTop: '5vh' }}>History</h1>
        </FadeInSection>
        <FadeInSection>
            <div className="sectionelement">
                {yearsList.map(yearString => <HistoryYearChip key={`historyForYear${yearString}`} year={yearString} />)}
            </div>
        </FadeInSection>
    </div>
}