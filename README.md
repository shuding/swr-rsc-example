# SWR + RSC Example

This example demonstrates how to use the `useSWR` hook (`@beta`) with React Server Components (RSC) to unify data fetching on the server and client.

By starting the data fetching early on the server-side inside a Server Component, the data will be included in the initial HTML response. After the initial render, the client-side code will take over and all the client-side features like focus revalidation, polling, etc. will work as expected.
