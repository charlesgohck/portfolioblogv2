import fs from 'fs';
import path from "path";
import matter from "gray-matter";
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import FadeInSection from '../../components/FadeInSection';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Link from 'next/link';

interface BlogPageStaticProps {
    params: BlogPageStaticPropsSlugWrapper
}

interface BlogPageStaticPropsSlugWrapper {
    slug: string
}

interface BlogPageProps {
    frontmatter: FrontMatterProps,
    slug: string,
    content: string
}

interface FrontMatterProps {
    title: string,
    date: string,
    excerpt: string,
    cover_image: string
}

interface IParams extends ParsedUrlQuery {
    slug: string
}

export default function BlogPage(props: BlogPageProps) {
    return <>
        <Head>
            <title>Charles Goh (长康): {props.frontmatter.title}</title>
            <meta name="description" content="Charles Goh (长康) Blog" />
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
                    <FadeInSection>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={`${props.frontmatter.cover_image}`} alt={`${props.frontmatter.title} post photo`} style={{ width: "80%" }} />
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div style={{ padding: "5vh" }}>
                            <ReactMarkdown>{props.content}</ReactMarkdown>
                        </div>
                    </FadeInSection>
                </article>
            </section>
            <section className='sectionelement'>
                <div className='linkelement'>
                    <Link href={'/blog'}>
                        <p><strong>Back To Posts</strong>&nbsp;&nbsp;<i className="fa solid fa-arrow-right" /></p>
                    </Link>
                </div>
            </section>
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

    const { slug } = context.params as IParams;

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