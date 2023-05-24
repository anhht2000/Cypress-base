import { createApi } from "@reduxjs/toolkit/query/react";
import restBaseQueryWithReauth from "@apps/config/baseQueryWithReauth";
import {
  PaginationResponseProps,
  ProductCategoryProps,
  ProductProps,
  QueryProps,
  ResponseProps,
} from "@globalTypes/globalTypes";

type DataProps = PaginationResponseProps<ProductProps>;

export const productServiceApi = createApi({
  reducerPath: "productServiceApi",
  baseQuery: restBaseQueryWithReauth,
  keepUnusedDataFor: 30,
  tagTypes: ["productTag"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query?: QueryProps) => ({
        url: `/products`,
        params: { ...query },
        method: "GET",
      }),
      providesTags: ["productTag"],
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
      invalidatesTags: ["productTag"],
    }),
    getProductDetail: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      transformResponse: (res: ResponseProps<ProductCategoryProps>) => {
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
      invalidatesTags: ["productTag"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["productTag"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductDetailQuery,
  useGetProductsQuery,
} = productServiceApi;
