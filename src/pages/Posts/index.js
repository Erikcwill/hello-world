import styles from "./Post.module.css";
import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";
import PostCard from "components/PostCard";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Post() {
  const parameters = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameters.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const recommendedPosts = posts
    .filter((post) => post.id !== Number(parameters.id));

  const randomPosts = [];
  while (randomPosts.length < 4 && recommendedPosts.length > 0) {
    const randomIndex = getRandomInt(recommendedPosts.length);
    randomPosts.push(recommendedPosts.splice(randomIndex, 1)[0]);
  }

  console.log(randomPosts);

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <ModelPost
              photoCover={`/assets/posts/${post.id}/capa.png`}
              title={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>

              <h2 className={styles.otherPostsTitle}>
                Outros posts que você pode gostar:
              </h2>

              <ul className={styles.recommendedPosts}>
                {randomPosts.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </ModelPost>
          }
        />
      </Route>
    </Routes>
  );
}
