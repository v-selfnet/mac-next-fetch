
const SingleBlog = ({ params }) => {
    return (
        <div>
            <h1>Single Blog:</h1>
            <h1>{params.id}</h1>
        </div>
    );
};

export default SingleBlog;