import styles from './style.module.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectPosts, selectLoading, selectError } from './../../store/async';


function AdminPanel(){
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getPosts());
      }, [dispatch]);
    
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles.main}>
            Панель адміністратора
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default AdminPanel;