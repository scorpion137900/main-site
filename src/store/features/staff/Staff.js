/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../../utils/constants";
const staffsApi = createApi({
  reducerPath: "StaffUser",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/StaffUser`,
  }),
  endpoints(builder) {
    return {
      getAllStaffs: builder.query({
        providesTags: ["specialities"],
        query: (page, pageSize) => {
          return {
            url: `/GetAllStaffs?page=${page}&pageSize=5`,
            method: "GET",
          };
        },
      }),
      getStaffDetails: builder.query({
        invalidatesTags: ["specialities"],
        query: (id) => {
          return {
            url: `/GetStaff?staffId=${id}`,
          }
        }
      }),
      // getStaff
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
export { staffsApi };
export const {
  useGetAllStaffsQuery,
  useGetStaffDetailsQuery,

} = staffsApi;
