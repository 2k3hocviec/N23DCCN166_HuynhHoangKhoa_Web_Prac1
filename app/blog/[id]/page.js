import Link from "next/link";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header với nút Back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Chi tiết bài viết */}
        <article className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>

          <div className="text-gray-500 mb-6 border-b pb-6">
            <p className="text-sm">Post ID: {post.id}</p>
          </div>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed text-base sm:text-lg">{post.body}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
