import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/genexp/' }),
    endpoints: (builder) => ({
      signup: builder.mutation({
        query: (user) => {
            
            return{
                
                url:'signup/',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json',
                }
            }
        },
      }),
    }),
  })

  export const { useSignupMutation } = authApi