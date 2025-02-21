import axios from 'axios';

export interface Comment {
  id: number;
  name: string;
  rating: number;
  body: string;
}


export const fetchComments = async (): Promise<Comment[]> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};
