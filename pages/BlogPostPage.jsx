import React from "react";
import Header from "../components/Header";
import BlogPostContent from "../components/BlogPostContent";
import BlogPostComment from "../components/BlogPostComment";
import Footer from "../components/Footer";

function BlogPostPage() {
  return (
    <div>
      <Header />
      <BlogPostContent />
      <hr className="max-w-7xl mx-auto " />
      <BlogPostComment />
      <Footer />
    </div>
  );
}

export default BlogPostPage;
