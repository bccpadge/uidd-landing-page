import { blogPosts } from "../constants";

export const BlogPosts = () => {
  return (
    <section className="blog-posts wrapper" aria-labelledby="blog-post-title">
      <h3 className="blog-posts-title" id="blog-post-title">We share our thoughts on design</h3>
      <ul className="blog-posts-list">
        {blogPosts.map((post, index) => (
          <li key={index}>
            <article className="blog-post">
              <img src={post.blogImage} width={290} height={231} alt="" />
              <h3>
                <a href="#">{post.title}</a>
              </h3>
              <time dateTime="08-01-2020">{post.publishDate}</time>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}