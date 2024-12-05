'use server';

import { promises as fs } from 'fs';
import path from 'path';

// Utility function to get the full path to the posts file
function getFilePath() {
  return path.join(process.cwd(), 'data', 'posts.json');
}

// Utility function to read JSON data from the file
export async function readData(): Promise<any[]> {
  try {
    const filePath = getFilePath();
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading posts file:", error);
    return [];
  }
}

// Utility function to write JSON data to the file
export async function writeData(data: any[]): Promise<void> {
  try {
    const filePath = getFilePath();
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error("Error writing to posts file:", error);
    
    // Ensure the data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    await fs.mkdir(dataDir, { recursive: true });
    
    // Try writing again after creating the directory
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
  }
}

// Function to get all posts
export async function getAllPosts(): Promise<any[]> {
  return readData();
}

// Function to get a specific post by ID
export async function getPostById(id: number): Promise<any | null> {
  const posts = await readData();
  const post = posts.find((post) => post.id === id);
  return post || null; // Return null if not found
}

// Function to add a new post
export async function addPost(newPost: any): Promise<{ success: boolean; message: string }> {
  const posts = await readData();
  
  if (!newPost.title || !newPost.excerpt) {
    return { success: false, message: "Post title and excerpt are required." };
  }
  
  newPost.id = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1; // Assign a new ID
  posts.push(newPost);
  
  await writeData(posts);
  return { success: true, message: "Post added successfully." };
}

// Function to update an existing post by ID
export async function updatePost(id: number, updatedPost: any): Promise<{ success: boolean; message: string }> {
  const posts = await readData();
  const index = posts.findIndex((post) => post.id === id);
  
  if (index === -1) {
    return { success: false, message: "Post not found." };
  }

  posts[index] = { ...posts[index], ...updatedPost }; // Update only the changed fields
  await writeData(posts);
  return { success: true, message: "Post updated successfully." };
}

// Function to delete a post by ID
export async function deletePost(id: number): Promise<{ success: boolean; message: string }> {
  const posts = await readData();
  const filteredPosts = posts.filter((post) => post.id !== id);
  
  if (posts.length === filteredPosts.length) {
    return { success: false, message: "Post not found." };
  }

  await writeData(filteredPosts);
  return { success: true, message: "Post deleted successfully." };
}