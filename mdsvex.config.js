const config = {
    layout: {
        posts: './src/routes/posts/_postLayout.svelte',
    },
    extensions: ['.svelte.md', '.md', '.svx'],

    smartypants: {
        dashes: 'oldschool',
    },

    remarkPlugins: [],
    rehypePlugins: [],
};

export default config;
