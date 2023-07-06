import Link from "next/link";

export const metadata = {
    title: 'Blogs | Next Hero',
    description: 'Next Hero Comming Soon...',
}

// const blogs = [
//     {
//         id: 1,
//         year: 2011,
//         title: 'title_1'
//     },
//     {
//         id: 2,
//         year: 2012,
//         title: 'title_2'
//     },
//     {
//         id: 3,
//         year: 2013,
//         title: 'title_3'
//     },
//     {
//         id: 4,
//         year: 2014,
//         title: 'title_4'
//     },
//     {
//         id: 5,
//         year: 2015,
//         title: 'title_5'
//     },
// ]

const BlogPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'force-cache'
    })
    const blogs = await res.json();
    return (
        <div>
            <h1 className="uppercase">blog home page</h1>
            <ul>
                {
                    blogs.map(({ id, body, title }) =>
                        <div key={id} className="border border-x-2 m-3 p-2">
                                <h2>{id}. {title}</h2>
                                {/* <p>{body}</p> */}
                            <Link href={`/blog/${id}`}>detail</Link>
                        </div>)
                }
            </ul>
        </div>
    );
};

export default BlogPage;