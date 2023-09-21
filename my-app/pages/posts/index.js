import AllPosts from "@/components/posts/all-posts";
import { getALLPosts } from "../../lib/posts-utils";


function AllPostPage(props) {

    return (
        <AllPostPage post={props.posts}/>
    )
}

export function getStaticProps () {
  const allPosts = getALLPosts();

  return{
    props: {
      posts: allPosts
    }
  };
}

export default AllPostPage;