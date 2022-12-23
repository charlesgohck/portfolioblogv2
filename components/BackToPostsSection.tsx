import Link from "next/link";

export default function BackToPostsSection() {
    return <section className='sectionelement'>
        <div className='linkelement'>
            <Link href={'/blog'}>
                <p><strong>Back To Posts</strong>&nbsp;&nbsp;<i className="fa solid fa-arrow-right" /></p>
            </Link>
        </div>
    </section>
}