import Head from "next/head"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { sortByDate } from "../utils";

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
    return (
        <>
            <Head>
                <title>Charles Goh (长康): Blog</title>
                <meta name="description" content="Charles Goh (长康) Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.jpg" />
            </Head>
            <main>
                Hello World
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

    console.log(posts);

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}