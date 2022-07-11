import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      {blog ? (
        <div className='blog-wrap'>
          <header>
              <h1>{blog.title}</h1>
          </header>
            <Link className='blog-goBack' to='/'>
              <span> &#8592;</span><span>Go Back</span>
            </Link>
          <div className = 'infocontainer'>
              <br/>
          <div className = 'blogItem-wrap'>
            <img className ="blogItem-cover" src={blog.cover} alt='cover' />
          </div>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <p className='blog-desc'>{blog.description}</p>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
