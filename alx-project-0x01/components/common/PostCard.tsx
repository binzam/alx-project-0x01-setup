import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="max-w-xl mx-auto w-full p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <p className="text-gray-600">{body}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>
          <small>User Id</small> #<strong>{userId}</strong>
        </span>
        <span>
          <small>Post ID</small> #<strong>{id}</strong>
        </span>
      </div>
    </div>
  );
};

export default PostCard;
