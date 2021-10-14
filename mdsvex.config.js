module.exports = {
    layout: {
        posts: './src/routes/posts/_postLayout.svelte'
    },
    extensions: [".svx", ".md"],
    smartypants: {
        dashes: "oldschool",
    },
    remarkPlugins: [
        [require("remark-github"), {
            // Use your own repository
            repository: "https://github.com/svelte-add/mdsvex.git",
        }],
        require("remark-abbr"),
    ],
    rehypePlugins: [
        require("rehype-slug"),
        [require("rehype-autolink-headings"), {
            behavior: "wrap",
        }],
    ],
};
