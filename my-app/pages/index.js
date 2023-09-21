import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from '../lib/posts-utils'
function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts post = {props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return{
    props:{
      posts: featuredPosts
    }
  }
}
export default HomePage;