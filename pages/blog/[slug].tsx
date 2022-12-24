import fs from 'fs';
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from 'next';
import Head from 'next/head';
import FadeInSection from '../../components/FadeInSection';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Link from 'next/link';
import { BlogPageProps, IParamsBlog } from '../../utils';
import BackToPostsSection from '../../components/BackToPostsSection';

export default function BlogPage(props: BlogPageProps) {

    const title = `Charles Goh (伍长康): ${props.frontmatter.title}`;

    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Charles Goh (伍长康) Blog" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/assets/favicon.jpg" />
        </Head>
        <main>
            <section>
                <article className="blogarticle">
                    <div style={{ textAlign: 'center' }}>
                        <FadeInSection>
                            <h1>{props.frontmatter.title}</h1>
                        </FadeInSection>
                        <FadeInSection>
                            <h2>{props.frontmatter.date}</h2>
                        </FadeInSection>
                    </div>
                    <br/>
                    <FadeInSection>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={`${props.frontmatter.cover_image}`} alt={`${props.frontmatter.title} post photo`} style={{ width: "80%" }} />
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div style={{ padding: "5vh" }}>
                            <ReactMarkdown className='reactmarkdowncomponent'>{props.content}</ReactMarkdown>
                        </div>
                    </FadeInSection>
                </article>
            </section>
            <BackToPostsSection/>
        </main>
    </>
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => {
        return {
            params: {
                slug: filename.replace('.md', '')
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {

    const { slug } = context.params as IParamsBlog;

    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}