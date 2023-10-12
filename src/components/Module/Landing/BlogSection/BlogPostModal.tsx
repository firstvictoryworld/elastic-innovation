import React from 'react';

import { blogItems } from '../../../../constants';

interface BlogPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId?: string;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ isOpen, onClose, postId }) => {
  const post: any = blogItems.find((item) => item.id === postId);

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-70">
      <div className="relative max-h-[90%] w-full max-w-7xl overflow-auto rounded-lg bg-white px-16 py-12 shadow-md">
        <button
          onClick={onClose}
          className="absolute right-8 top-8 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <h2 className="mb-12 text-4xl font-bold">{post?.title}</h2>
        <img
          src={`/assets/images/${post.image}`}
          alt={post.title}
          className="mx-auto my-4 h-[400px] rounded-lg"
        />

        <div className="mt-12">
          {post.content?.split('/n').map((item: any, index: number) => (
            <div key={index}>
              <p className="text-black-900 font-semibold">{item}</p>
              {post?.content?.length - 1 !== index && <br />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostModal;
