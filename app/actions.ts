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
      const transformedPosts = posts.map(post => ({
        ...post,
        categories: getCategoriesArray(post.categories)
      }));
      return NextResponse.json(transformedPosts, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
  }
  
  // Server action to get a post by ID
  export async function fetchPostById(id: string | number) {
    try {
      const post = await getPostById(Number(id));
      if (post) {
        // Transform post to include categories as an array
        const transformedPost = {
          ...post,
          categories: getCategoriesArray(post.categories)
        };
        return NextResponse.json(transformedPost, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
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
      const result = await addPost(newPost);
      if (result.success) {
        // Transform post to include categories as an array
        if (result.post) {
          result.post.categories = getCategoriesArray(result.post.categories);
        }
        return NextResponse.json(result, { status: 201 });
      } else {
        return NextResponse.json(result, { status: 400 });
      }
    } catch (error) {
      return NextResponse.json({ error: 'Failed to add post' }, { status: 500 });
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