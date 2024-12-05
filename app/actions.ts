import { getAllPosts, getPostById, addPost, updatePost, deletePost } from '../utils/blogHandler';
import { NextResponse } from 'next/server';

// Server action to get all posts
export async function fetchAllPosts() {
    try {
        const posts = getAllPosts();
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

// Server action to get a post by ID
export async function fetchPostById(id: string | Number) {
    try {
        const post = getPostById(Number(id));
        if (post) {
            return NextResponse.json(post, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    }
}

// Server action to add a new post
export async function createPost(newPost: { 
    id: string | number,
    title?: string,
    categories?: string[],
    excerpt?: string,
    image?: string 
}) {
    try {
        const result = await addPost(newPost);
        if (result.success) {
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
    id: string | number,
    title?: string,
    categories?: string[],
    excerpt?: string,
    image?: string 
}) {
    try {
        const result = await updatePost(Number(updatedPost.id), updatedPost);
        if (result.success) {
            return NextResponse.json(result, { status: 200 });
        } else {
            return NextResponse.json(result, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
}

// Server action to delete a post by ID
export async function removePost(id: string | Number) {
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