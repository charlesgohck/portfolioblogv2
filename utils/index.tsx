const sortByDate = (a: any, b: any): number => {
    const aDate: Date = new Date(a.frontmatter.date);
    const bDate: Date = new Date(b.frontmatter.date);
    return bDate.getTime() - aDate.getTime();
}

interface RouterPath {
    path: string,
    iconClass: string,
    name: string
}


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

export { routerPaths, sortByDate };