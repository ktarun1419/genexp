import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
    endpoints: (builder) => ({
      signup: builder.mutation({
        query: (user) => {
            console.log(user);
            return{
                
                url:'genexp/signup/',
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