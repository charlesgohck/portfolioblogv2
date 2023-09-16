import fs from 'fs';
import path from "path";
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import FadeInSection from '../../../components/FadeInSection';
import PostLinkElement from '../../../components/PostLinkElement';
import { Inter } from "next/font/google";
import BackToPostsSection from '../../../components/BackToPostsSection';
import { getBlogPostsInfoArray } from '../../blog';

const inter = Inter({ subsets: ['latin'] })

export default function BlogFilterByTags({ year, posts }: InferGetStaticPropsType<typeof getStaticProps>) {

    const title: string = `Charles Goh (伍长康): Blog History for ${year}`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Charles Goh (伍长康) Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.jpg" />
            </Head>
            <main>
                <h1 style={{ textAlign: "center", paddingTop: "5vh" }}>Posts in: {year}</h1>
                <div className="sectionelement">
                    {posts.length == 0
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

    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getUTCFullYear();

    var paths = [];
    for (var i = 2022; i <= currentYear; i++) {
        paths.push({
            params: {
                year: i.toString()
            }
        })
    }

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context: any) {

    const year: string = context.params.year;

    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // More efficient implementation for getting posts
    var posts = getBlogPostsInfoArray(true);

    posts = posts.filter(post => {
        const postDate: Date = new Date(post.frontmatter.date);
        const postDateYear: number = postDate.getUTCFullYear();
        return postDateYear.toString() === year;
    });

    return {
        props: {
            year: year,
            posts: posts
        },
    }
}