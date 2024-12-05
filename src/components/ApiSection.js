import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts`);
        setPosts(response.data.slice(0, 6)); // Fetch only the first 6 posts
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>

        {/* Loading and Error Messages */}
        {loading && <p className="text-center text-lg">Loading posts...</p>}
        {error && <p className="text-center text-red-500 font-medium">{error}</p>}

        {/* Posts Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-500">
                  {post.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ApiSection;
