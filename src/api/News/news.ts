export interface NewsInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface NewsResponse {
  news: NewsInterface[];
  total: number;
  skip: number;
  limit: number;
}
