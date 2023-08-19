import dynamic from 'next/dynamic';
import { InferGetStaticPropsType } from 'next/types';
import SplashScreen from './SplashScreen';
import { sortByDate } from '../utils';
import fs from 'fs';

const LazyBlogComponent = dynamic(() => import("./LazyBlog"), {
    loading: () => <SplashScreen/>
})

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <LazyBlogComponent posts={posts} />
    )
}

export async function getStaticProps() {
    var posts = getBlogPostsInfoArray();

    return {
        props: {
            posts: posts,
        },
    }
}

export function getBlogPostsInfoArray(isSortedByDateDescending: boolean=true) {
    // More efficient implementation: Get directory.txt for all post info instead of reading through all blog posts
    const filePathToDirectoryContents = 'pages/blog/directory.txt';
    const data = fs.readFileSync(filePathToDirectoryContents, 'utf-8');
    const blogPostContents = data.split("\n");
    var posts = [];
    for (const blogPostContent of blogPostContents) {
        const blogPostInfo = blogPostContent.replace(/[\r\n]/gm, '').split("|");
        posts.push({
            slug: blogPostInfo[0],
            frontmatter: {
                title: blogPostInfo[1],
                date: blogPostInfo[2],
                excerpt: blogPostInfo[3],
                cover_image: blogPostInfo[4],
                tags: blogPostInfo[5]
            }
        })
    }
    return isSortedByDateDescending ? posts.sort(sortByDate) : posts;
}