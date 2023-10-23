import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../../components/PostList/PostList";
import { fetchPosts } from "../../redux/posts/operations";
import { selectLoading } from "../../redux/posts/selectors";

export default function Posts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div>{isLoading && "Request in progress..."}</div>
      <PostList />
    </>
  );
}
