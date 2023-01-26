export interface GalleryItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface GalleryResponse {
  news: GalleryItem[];
  total: number;
  skip: number;
  limit: number;
}
