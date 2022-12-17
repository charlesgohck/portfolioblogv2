import { InferGetStaticPropsType } from "next/types";
import { getStaticProps } from "../blog";


export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {

    console.log(posts);

    return <>
        Hello World
    </>
}