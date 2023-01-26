import { apiRequest } from "@api/Api";
import { NewsInterface, NewsResponse } from "./news";

export const getAllNews = () =>
  apiRequest<{}, NewsInterface[]>({ url: "comments" });
