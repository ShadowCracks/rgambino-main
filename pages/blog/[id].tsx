import { GetServerSideProps } from 'next';
import React from 'react';
import { createClient } from '@supabase/supabase-js';
import Blog from '../../components/blog/blogpage/Blog';
import ServiceDetails from '../../components/blogpage/ServiceDetails';
import ReviewSection from '../../components/blogpage/ReviewSection';
import Layout from "../../components/About/Layout";
import ServicesSection from '../../components/About/ServicesSection';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    description: string;
    image_url: string;
    features: string[];
  };
}

const BlogPostPage: React.FC<BlogPostProps> = ({ post }) => {
  const reviews = [
    {
      name: "Dyna Lopez",
      title: "CEO Revenue",
      content:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc nul viverra Aenean pulvinar maximus leo",
      rating: 4,
    },
    {
      name: "Dyna Lopez",
      title: "CEO Revenue",
      content:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc nul viverra Aenean pulvinar maximus leo",
      rating: 4,
    },
  ];

  const features = post.features || [
    "Nibh dolor consectetuer fermentum hendrerit",
    "Facilisi purus aliquam nullam tristique",
    "Malesuada si faucibus torquent",
  ];

  return (
    
    <div>
      <Layout>

        {/* Hero Section */}
        <Blog />

        {/* Service Details Section */}
        <ServiceDetails
          title={post.title}
          description={post.description}
          imageSrc={post.image_url}
        />

        {/* Review Section */}
        <ReviewSection reviews={reviews} />

        {/* What We Are Doing Section */}
        <ServicesSection />

      </Layout>
      
    </div>
  );
};

// Fetch the blog post data dynamically
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const { data: post, error } = await supabase
    .from('post')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;
