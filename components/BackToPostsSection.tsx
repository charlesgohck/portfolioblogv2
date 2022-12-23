import Link from "next/link";
import { BLOG_TAGS } from "../utils";
import FadeInSection from "./FadeInSection";
import TagChip from "./TagChip";

interface BackToPostsSectionProps {
    showBackToPostsLink?: boolean
}

export default function BackToPostsSection(props: BackToPostsSectionProps) {
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
                {BLOG_TAGS.sort().map(tag => <TagChip tag={tag} />)}
            </div>
        </FadeInSection>
    </div>
}