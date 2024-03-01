/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../../utils/constants";
const blogsApi = createApi({
  reducerPath: "Article",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/Article`,
  }),
  endpoints(builder) {
    return {
      getAllArticles: builder.query({
        providesTags: ["articles"],
        query: (page, pageSize) => {
          return {
            url: `/GetAllArticle?page=${page}&pageSize=5`,
            method: "GET",
          };
        },
      }),
      getArticleContent: builder.query({
        invalidatesTags: ["articles"],
        query: (id) => {
          return {
            url: `/GetArticleContent?ArticleId=${id}`,
            method: "GET",

          }
        }
      })
      //     addSpecialitise: builder.mutation({
      //       invalidatesTags: ["specialities"],
      //       query(data) {
      //         return {
      //           url: "/AddSpecialitie",
      //           method: "POST",
      //           body: data,
      //         };
      //       },
      //     }),
      //     updateSpecialitise: builder.mutation({
      //       invalidatesTags: ["specialities"],
      //       query(data) {
      //         return {
      //           url: "/UpdateSpecialitie",
      //           method: "PUT",
      //           body: data,
      //         };
      //       },
      //     }),

      //     deleteSpecialitise: builder.mutation({
      //       invalidatesTags: ["specialities"],
      //       query(id) {
      //         return {
      //           url: `/DeleteSpecialitie?specialitiesid=${id}`,
      //           method: "DELETE",
      //         };
      //       },
      //     }),
      //     searchSpecialitise: builder.query({
      //       query(specialitiename) {
      //         return {
      //           url: `/SearchSpecialitie?specialitiename=${specialitiename}`,
      //           method: "GET",
      //         };
      //       },
      //     }),
    };
  },
});
export { blogsApi };
export const {
  useGetAllArticlesQuery,
  useGetArticleContentQuery
} = blogsApi;
