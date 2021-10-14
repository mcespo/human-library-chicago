<script context="module" lang="js">
    const posts = import.meta.glob('./*.svx');
    let body = [];
    for (const path in posts) {
        body.push(posts[path]().then(({ metadata }) => metadata));
    }
    export async function load({ page, fetch }) {
        const posts = await Promise.all(body);
        return {
            props: {
                posts,
            },
        };
    }
</script>

<script>
    import Tag from '../../components/tag.svelte';
    export let posts;
</script>

<svelte:head>
    <title>Posts</title>
</svelte:head>

<!--Title-->
<section class="container p-10 prose lg:prose-xl">
    <h1 class="">Recent posts</h1>

    <ul class="list-none">
        {#each posts as { title, tags, outline, slug }}
            <li class="list-none">
                <a class="text-blue-500 space-y-3" rel="prefetch" href="posts/{slug}">
                    <h2>
                        {title}
                    </h2>

                    <p>
                        {outline}
                    </p>

                    <p class="text-sm font-normal text-gray-500">
                        Tags: {#each tags as tag}
                            <Tag {tag} />
                        {/each}
                    </p>
                </a>
            </li>
        {/each}
    </ul>
</section>
