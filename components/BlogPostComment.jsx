import React from "react";

function BlogPostComment() {
  return (
    <section className="my-24 px-10">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <h3 className="text-2xl">Join the conversation</h3>
          <div className="flex items-start flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <img
              src="./images/u2.jpeg"
              alt="Avatar Image"
              className="w-14 h-14 rounded-full"
            />
            <textarea
              className="w-full h-40 border-2 border-indigo-200 outline-none rounded p-3 placeholder:text-lg"
              placeholder="Comment"
            />
          </div>
          <a
            href="login"
            className="w-80 h-12 bg-indigo-400 flex items-center justify-center rounded text-white text-lg mx-auto hover:bg-indigo-500 duration-200">
            Comment
          </a>
        </div>
      </div>
    </section>
  );
}

export default BlogPostComment;
