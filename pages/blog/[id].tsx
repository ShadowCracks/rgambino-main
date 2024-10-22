import { GetServerSideProps } from 'next';
import React from 'react';
import { createClient } from '@supabase/supabase-js';
import Blog from '../../components/blog/blogpage/Blog';
import ServiceDetails from '../../components/blogpage/ServiceDetails';
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
