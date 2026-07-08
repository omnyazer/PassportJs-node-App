import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <article className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <img alt={post.title} className="img" src={post.img} />
      </Link>
      <div className="cardBody">
        <Link className="link" to={`/post/${post.id}`}>
          <span className="title">{post.title}</span>
        </Link>
        <p className="desc">{post.desc}</p>
        <Link className="link" to={`/post/${post.id}`}>
          <button className="cardButton" type="button">
            Read More
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Card;
