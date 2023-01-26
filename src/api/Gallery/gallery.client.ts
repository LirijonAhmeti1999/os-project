import { apiRequest } from "@api/Api";
import { GalleryItem, GalleryResponse } from "./gallery";

export const getAllPhotos = () =>
  apiRequest<{}, GalleryItem[]>({ url: "photos" });
