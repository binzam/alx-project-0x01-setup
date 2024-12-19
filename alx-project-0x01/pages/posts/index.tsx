import Button from '@/components/common/Button';
import PostCard from '@/components/common/PostCard';
import PostModal from '@/components/common/PostModal';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { PostData, PostProps } from '@/interfaces';
import { useState } from 'react';

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [post, setPost] = useState<PostData | null>(null);

  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: posts.length + 1 });
    posts.unshift({ ...newPost, id: posts.length + 1 });
  };
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="flex justify-between  w-1/2 mx-auto mb-4">
          <h1 className=" text-2xl font-semibold text-white">Post Content</h1>
          <Button onClick={() => setModalOpen(true)} label="Add Post" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard
              title={title}
              body={body}
              userId={userId}
              id={id}
              key={key}
            />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
