/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../../utils/constants";
const endpointsApi = createApi({
  reducerPath: "endpoints",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  endpoints(builder) {
    return {
      getStaffSpecialities: builder.query({
        query: (staffId, page, pageSize) => {
          return {
            url: `/StaffSpecialities/GetStaffSpecialities?StaffId=${staffId}&page=${page}&pageSize=${pageSize}`,
            method: "GET",
          };
        },
      }),
      // getStaffDetails: builder.query({
      //   invalidatesTags: ["specialities"],
      //   query: (id) => {
      //     return {
      //       url: `/GetStaff?staffId=${id}`,
      //     }
      //   }
      // }),
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
export { endpointsApi };
export const {

  useGetStaffSpecialitiesQuery
} = endpointsApi;
