const sortByDate = (a: any, b: any): number => {
    const aDate: Date = new Date(a.frontmatter.date);
    const bDate: Date = new Date(b.frontmatter.date);
    return bDate.getTime() - aDate.getTime();
}

export { sortByDate };