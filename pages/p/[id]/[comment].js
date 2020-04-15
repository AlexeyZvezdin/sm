import { useRouter } from 'next/router';
// this seems not to work
const Comment = (props) => {
  const router = useRouter();
  const { id, comment } = router.query;
  return (
    <>
      <h4>Post: {id}</h4>
      <p>Comment: {comment}</p>
    </>
  );
};
export default Comment;
