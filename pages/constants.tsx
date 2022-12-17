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

export { routerPaths };