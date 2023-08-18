import fs from 'fs';
import path from "path";
import matter from "gray-matter";
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import FadeInSection from '../../../components/FadeInSection';
import PostLinkElement from '../../../components/PostLinkElement';
import { Inter } from "next/font/google";
import { BLOG_TAGS, sortByDate } from '../../../utils';
import BackToPostsSection from '../../../components/BackToPostsSection';
import { getBlogPostsInfoArray } from '../../blog';

const inter = Inter({ subsets: ['latin'] })

export default function BlogFilterByTags({ tagname, posts }: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
            <Head>
                <title>Charles Goh (伍长康): Blog</title>
                <meta name="description" content="Charles Goh (伍长康) Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.jpg" />
            </Head>
            <main>
                <h1 style={{ textAlign: "center", paddingTop: "5vh" }}>Posts On: {tagname}</h1>
                <div className="sectionelement">
                    {posts.length === 0 
                    ? <p>No content found...</p>
                    : posts.map(post => <div style={{ width: "100%" }} key={`${post.slug} Post Link`}>
                            <FadeInSection>
                                <PostLinkElement
                                    slug={post.slug}
                                    title={post.frontmatter.title}
                                    date={post.frontmatter.date}
                                    excerpt={post.frontmatter.excerpt}
                                    imagePath={post.frontmatter.cover_image}
                                    tags={post.frontmatter.tags}
                                />
                            </FadeInSection>
                        </div>
                    )}
                </div>
                <BackToPostsSection />
            </main>
        </>
    )
}

export async function getStaticPaths() {

    const paths = BLOG_TAGS.map(tagName => {
        return {
            params: {
                tagname: tagName
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context: any) {

    const tagname: string = context.params.tagname;

    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // New and more efficient implementation for slug and frontmatter getting
    var posts = getBlogPostsInfoArray(true);

    posts = posts.filter(post => {
        const tagsSplit = post.frontmatter.tags === null || post.frontmatter.tags === undefined || post.frontmatter.tags === "" ? [] : post.frontmatter.tags.split(",");
        return tagsSplit.includes(tagname);
    });

    return {
        props: {
            tagname: tagname,
            posts: posts.sort(sortByDate),
        },
    }
}