'use server';

import { 
    getAllPosts, 
    getPostById, 
    addPost, 
    updatePost, 
    deletePost,
    getCategoriesArray
  } from '../utils/prismaUtils';
  import { NextResponse } from 'next/server';
  
  // Server action to get all posts
  export async function fetchAllPosts() {
    try {
      const posts = await getAllPosts();
      
      // Transform posts to include categories as an array
      interface TransformedPost {
        id: number;
        title: string;
        image: string;
        categories: string[];
      }

      const transformedPosts: TransformedPost[] = posts.map((post): TransformedPost => ({
        id: post.id,
        title: post.title,
        image: post.image || 'https://picsum.photos/400/300',
        categories: getCategoriesArray(post.categories || '')
      }));
  
      return {
        success: true,
        posts: transformedPosts
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
      return { 
        success: false, 
        error: 'Failed to fetch posts' 
      };
    }
  }
  
  // Server action to get a post by ID
  export async function fetchPostById(id: string | number) {
    try {
      const post = await getPostById(Number(id));
      if (post) {
        // Transform post to include categories as an array
        return {
          ...post,
          categories: post.categories ? post.categories.split(',') : []
        };
      } 
      
      return null;
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    }
  }
  
  // Server action to add a new post
  export async function createPost(newPost: { 
    title: string,
    categories?: string[],
    excerpt?: string,
    image?: string 
  }) {
    try {
      // Ensure categories are always converted to a comma-separated string
      const categoriesString = newPost.categories 
        ? newPost.categories.join(',') 
        : '';
  
      const result = await addPost({
        ...newPost,
        categories: categoriesString
      });
  
      if (result.success) {
        return { 
          success: true, 
          message: result.message,
          post: result.post
        };
      } else {
        return { 
          success: false, 
          message: result.message 
        };
      }
    } catch (error) {
      return { 
        error: 'Failed to add post',
        success: false
      };
    }
  }
  
  // Server action to update a post by ID
  export async function modifyPost(updatedPost: { 
    id: number,
    title?: string,
    categories?: string[],
    excerpt?: string,
    image?: string 
  }) {
    try {
      const result = await updatePost(Number(updatedPost.id), updatedPost);
      if (result.success) {
        // Transform post to include categories as an array
        if (result.post) {
        // @ts-expect-error - None of the properties are guaranteed to exist
          result.post.categories = getCategoriesArray(result.post.categories);
        }
        return NextResponse.json(result, { status: 200 });
      } else {
        return NextResponse.json(result, { status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
  }
  
  // Server action to delete a post by ID
  export async function removePost(id: string | number) {
    try {
      const result = await deletePost(Number(id));
      if (result.success) {
        return NextResponse.json(result, { status: 200 });
      } else {
        return NextResponse.json(result, { status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }
  }