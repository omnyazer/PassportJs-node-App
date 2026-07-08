import { useLocation } from "react-router-dom";
import { posts } from "../data";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = posts.find((item) => item.id.toString() === path);

  if (!post) {
    return (
      <section className="missingPost">
        <h2>Article introuvable</h2>
        <p>Le post demande n'existe pas dans le jeu de donnees.</p>
      </section>
    );
  }

  return (
    <article className="post">
      <img alt={post.title} className="postImg" src={post.img} />
      <div className="postContent">
        <h1 className="postTitle">{post.title}</h1>
        <p className="postDesc">{post.desc}</p>
        <p className="postLongDesc">{post.longDesc}</p>
      </div>
    </article>
  );
};

export default Post;
