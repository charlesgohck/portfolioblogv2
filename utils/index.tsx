import { ParsedUrlQuery } from "querystring";

// Utility Helper Functions
const sortByDate = (a: any, b: any): number => {
    const aDate: Date = new Date(a.frontmatter.date);
    const bDate: Date = new Date(b.frontmatter.date);
    return bDate.getTime() - aDate.getTime();
}
// Utility Helper Functions

// Utility Helper Interfaces
interface RouterPath {
    path: string,
    iconClass: string,
    name: string
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
    tags: string,
    cover_image: string
}

interface BlogWithTagContext {
    params: IParamsBlogWithTag
}
// Utility Helper Interfaces

// Utility Helper Types that extend other types
interface IParamsBlog extends ParsedUrlQuery {
    slug: string
}

interface IParamsBlogWithTag extends ParsedUrlQuery {
    tagname: string
}
// Utility Helper TYpes that extend other types

// Utility constants
const BLOG_TAGS: string[] = ["omscs", "reviews", "gatech"];

const routerPaths: RouterPath[] = [
    {
        path: "/",
        iconClass: 'fa solid fa-house-chimney',
        name: "About"
    },
    {
        path: "/blog",
        iconClass: "fa-solid fa-book",
        name: "Blog"
    }
];
// Utility Constants

// Exporting of constants and helper functions
export { routerPaths, sortByDate, BLOG_TAGS };
// Exporting of constants and helper functions

// Exporting of interfaces and types
export type { IParamsBlog, IParamsBlogWithTag, BlogPageProps, FrontMatterProps, BlogWithTagContext };
// Exporting of interfaces and types
