import Card from "../components/Card";
import { posts } from "../data";

const Home = () => {
  return (
    <section className="home">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Home;
