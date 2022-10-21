import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PostCard from "../components/PostCard";

const posts = [
  { title: "React Testing", excerpt: "Learn react testing " },
  { title: "React Testing1", excerpt: "Learn react testing1 " },
  { title: "React Testing2", excerpt: "Learn react testing2 " },
  { title: "React Testing3", excerpt: "Learn react testing3 " },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
