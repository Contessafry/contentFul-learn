// src/services/ristorantiCMA.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Crea una API slice per gestire le operazioni di scrittura su Contentful
export const restaurantApi = createApi({
  reducerPath: "restaurantCMAApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.contentful.com/spaces/${import.meta.env.VITE_SPACE_ID}/environments/master/`,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${import.meta.env.VITE_CONTENT_MANAGER}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Endpoint per ottenere i ristoranti (legge solo, quindi usiamo CDA)
    getRistoranti: builder.query({
      query: () => "entries?content_type=restaurant",
      transformResponse: (response) => response.items,
    }),
    // Endpoint per aggiungere un ristorante
    addRistorante: builder.mutation({
      query: (ristoranteData) => ({
        url: "entries",
        method: "POST",
        body: {
          ...ristoranteData,
          content_type: "restaurant",
        },
      }),
    }),
    // Endpoint per aggiornare un ristorante
    updateRistorante: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `entries/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
    // Endpoint per rimuovere un ristorante
    deleteRistorante: builder.mutation({
      query: (id) => ({
        url: `entries/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetRistorantiQuery, useAddRistoranteMutation, useUpdateRistoranteMutation, useDeleteRistoranteMutation } = restaurantApi;
