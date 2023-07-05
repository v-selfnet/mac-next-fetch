import Link from "next/link";

export const metadata = {
    title: 'Blogs | Next Hero',
    description: 'Next Hero Comming Soon...',
}

const blogs = [
    {
        id: 1,
        year: 2011,
        title: 'title_1'
    },
    {
        id: 2,
        year: 2012,
        title: 'title_2'
    },
    {
        id: 3,
        year: 2013,
        title: 'title_3'
    },
    {
        id: 4,
        year: 2014,
        title: 'title_4'
    },
    {
        id: 5,
        year: 2015,
        title: 'title_5'
    },
]

const BlogPage = () => {
    return (
        <div>
            <h1 className="uppercase">blog home page</h1>
            <ul >
                {
                    // blogs.map(({ id, year, title }) => <Link className=" btn btn-sm mr-3"
                    //     href={`/blog/${year}/${id}`} key={id}
                    // >
                    //     {title}
                    // </Link>)

                    // passing links as object & pass also query
                    blogs.map(({ id, year, title }) => <Link className=" btn btn-sm mr-3"
                        href={{
                            pathname: `/blog/${year}/${id}`,
                            query: {
                                title: title
                            },
                        }}
                        key={id}
                    >
                        {title}
                    </Link>)
                }
            </ul>
        </div>
    );
};

export default BlogPage;