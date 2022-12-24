import Link from "next/link";
import { BLOG_TAGS } from "../utils";
import FadeInSection from "./FadeInSection";
import TagChip from "./TagChip";

interface BackToPostsSectionProps {
    showBackToPostsLink?: boolean
}

export default function BackToPostsSection(props: BackToPostsSectionProps) {

    const currentDate = new Date();
    const currentYear = currentDate.getUTCFullYear();

    return <div>
        {
            props.showBackToPostsLink === null || props.showBackToPostsLink === undefined || props.showBackToPostsLink
                ? <section className='sectionelement'>
                    <div className='linkelement'>
                        <Link href={'/blog'}>
                            <p><strong>Back To Posts</strong>&nbsp;&nbsp;<i className="fa solid fa-arrow-right" /></p>
                        </Link>
                    </div>
                </section> : <></>
        }
        <FadeInSection>
            <h1 style={{ textAlign: "center", paddingTop: '5vh' }}>Topics</h1>
        </FadeInSection>
        <FadeInSection>
            <div className="sectionelement">
                {BLOG_TAGS.sort().map(tag => <TagChip key={`tagFor${tag}`} tag={tag} />)}
            </div>
        </FadeInSection>
        <FadeInSection>
            <h1 style={{ textAlign: "center", paddingTop: '5vh' }}>Archive</h1>
        </FadeInSection>
        <FadeInSection>
            <div className="sectionelement">
                Hello World
            </div>
        </FadeInSection>
    </div>
}