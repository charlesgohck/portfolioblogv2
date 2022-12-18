import fs from 'fs';
import path from "path";
import matter from "gray-matter";
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps } from 'next';
import { convertTypeAcquisitionFromJson } from 'typescript';

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

    console.log(props);

    return <>
        <h1>{props.frontmatter.title}</h1>
        <h2>{props.frontmatter.date}</h2>
        <h3>{props.frontmatter.excerpt}</h3>
        <h4>{props.frontmatter.cover_image}</h4>
        <br/>
        <p>{props.content}</p>
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