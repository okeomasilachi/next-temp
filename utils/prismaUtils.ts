import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// a new instance from being created with every module reload.
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prisma;


export async function getAllPosts() {
  try {
    return await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostById(id: number) {
  try {
    return await prisma.post.findUnique({
      where: { id }
    });
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    return null;
  }
}

export async function addPost(newPost: {
  title: string,
  categories?: string,
  excerpt?: string,
  image?: string
}) {
  try {
    if (!newPost.title) {
      return { 
        success: false, 
        message: "Post title is required." 
      };
    }

    const post = await prisma.post.create({
      data: {
        title: newPost.title,
        categories: newPost.categories || '',
        excerpt: newPost.excerpt,
        image: newPost.image || 'https://picsum.photos/400/300'
      }
    });

    return { 
      success: true, 
      message: "Post added successfully.",
      post 
    };
  } catch (error) {
    console.error("Error adding post:", error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Failed to add post." 
    };
  }
}

export async function updatePost(id: number, updatedPost: {
  title?: string,
  categories?: string[] | string,
  excerpt?: string,
  image?: string
}) {
  try {
    // Convert categories array to comma-separated string if needed
    const categoriesString = updatedPost.categories 
      ? (Array.isArray(updatedPost.categories) 
          ? updatedPost.categories.join(',') 
          : updatedPost.categories)
      : undefined;

    const post = await prisma.post.update({
      where: { id },
      data: {
        ...(updatedPost.title && { title: updatedPost.title }),
        ...(categoriesString && { categories: categoriesString }),
        ...(updatedPost.excerpt && { excerpt: updatedPost.excerpt }),
        ...(updatedPost.image && { image: updatedPost.image })
      }
    });

    return { 
      success: true, 
      message: "Post updated successfully.",
      post 
    };
  } catch (error) {
    console.error(`Error updating post with id ${id}:`, error);
    return { 
      success: false, 
      message: "Post not found or update failed." 
    };
  }
}

// Helper function to get categories as an array
export function getCategoriesArray(categoriesString?: string | null): string[] {
  return categoriesString 
    ? categoriesString.split(',').map(cat => cat.trim()).filter(Boolean) 
    : [];
}

export async function deletePost(id: number) {
  try {
    await prisma.post.delete({
      where: { id }
    });

    return { 
      success: true, 
      message: "Post deleted successfully." 
    };
  } catch (error) {
    console.error(`Error deleting post with id ${id}:`, error);
    return { 
      success: false, 
      message: error.message as string || "Post not found or delete failed." 
    };
  }
}

// Export the prisma client for direct use if needed
export default prisma;