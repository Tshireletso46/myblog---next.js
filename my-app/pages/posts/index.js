import AllPosts from "@/components/posts/all-posts";
import { getALLPosts } from "../../lib/posts-utils";
import { Fragment } from "react";
import Head from "next/head";


function AllPostPage(props) {

    return (
      <Fragment>
        <Head>
          <title>All Posts</title>
          <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
          />
        </Head>
        <AllPosts posts={props.posts} />
        </Fragment>
    );
}

export function getStaticProps () {
  const allPosts = getALLPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostPage;