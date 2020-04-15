import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import Link from 'next/link';

const Post = (props) => {
  console.log(props, ' POST PORPS');
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
    </Layout>
  );
};

Post.getInitialProps = async function (context) {
  console.log(context, ' WHAT IS context?');
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
