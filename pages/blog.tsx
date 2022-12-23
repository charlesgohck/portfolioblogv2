import Head from "next/head"
import { Inter } from '@next/font/google'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { BLOG_TAGS, sortByDate } from "../utils";
import FadeInSection from "../components/FadeInSection";
import { InferGetStaticPropsType } from "next/types";
import PostLinkElement from "../components/PostLinkElement";
import TagChip from "../components/TagChip";

const inter = Inter({ subsets: ['latin'] })

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Charles Goh (长康): Blog</title>
                <meta name="description" content="Charles Goh (长康) Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.jpg" />
            </Head>
            <main>
                <h1 style={{ textAlign: "center", paddingTop: "5vh" }}>Recent</h1>
                <div className="sectionelement">
                    {posts.map(
                        post => <div style={{ width: "100%" }} key={`${post.slug} Post Link`}>
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
                <FadeInSection>
                    <h1 style={{ textAlign: "center", paddingTop: '5vh' }}>Topics</h1>
                </FadeInSection>
                <FadeInSection>
                    <div className="sectionelement">
                        {BLOG_TAGS.sort().map(tag => <TagChip tag={tag} />)}
                    </div>
                </FadeInSection>\
            </main>
        </>
    )
}

export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}