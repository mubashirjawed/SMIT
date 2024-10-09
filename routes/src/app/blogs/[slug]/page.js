const blogs = [
  {
    id: 1,
    title: "blog number 1",
    slug: "check-number-1",
    description: "check  description number 1",
  },
  {
    id: 2,
    title: "blog number 2",
    slug: "check-number-2",
    description: "check  description number 2",
  },
  {
    id: 3,
    title: "blog number 3",
    slug: "check-number-3",
    description: "check  description number 3",
  },
  {
    id: 4,
    title: "blog number 4",
    slug: "check-number-4",
    description: "check  description number 4",
  },
];
const BlogDetail = ({ params }) => {
  const blog = blogs.find((data) => data.slug == params.slug);
  return (
    <div className="contanier mx-auto text-center p-20">
      <h1 className="font-bold text-4xl p-2 px-3 text-center my-1">
        {blog.title}
      </h1>
      <h1 className="font-semibold text-2xl p-2 px-3 text-center my-1">
        {blog.description}
      </h1>
    </div>
  );
};

export default BlogDetail;
