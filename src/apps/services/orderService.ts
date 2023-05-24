import { createApi } from "@reduxjs/toolkit/query/react";
import restBaseQueryWithReauth from "@apps/config/baseQueryWithReauth";
import {
  OrderProps,
  PaginationResponseProps,
  QueryProps,
  ResponseProps,
} from "@globalTypes/globalTypes";

type DataProps = PaginationResponseProps<OrderProps>;

export const orderServiceApi = createApi({
  reducerPath: "orderServiceApi",
  baseQuery: restBaseQueryWithReauth,
  keepUnusedDataFor: 30,
  tagTypes: ["orderServiceApi"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query?: QueryProps) => ({
        url: `/products`,
        params: { ...query },
        method: "GET",
      }),
      providesTags: ["orderServiceApi"],
      transformResponse: (res: DataProps) => {
        const { per_page, total, data } = res.data;
        return { per_page, total, data };
      },
    }),
    createProduct: builder.mutation({
      query: (payload) => ({
        url: "/products",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["orderServiceApi"],
    }),
    getOrderDetail: builder.query({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "GET",
      }),
      transformResponse: (res: ResponseProps<OrderProps>) => {
        return res.data;
      },
      keepUnusedDataFor: 0,
    }),
    updateProduct: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/products/${id}?_method=PUT`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["orderServiceApi"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["orderServiceApi"],
    }),
  }),
});

export const { useGetOrderDetailQuery } = orderServiceApi;
