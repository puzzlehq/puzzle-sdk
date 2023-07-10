import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from 'wiseguy';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

// tRPC for react usage
const trpcReact = createTRPCReact<AppRouter>();
export const trpcClient = trpcReact.createClient({
  links: [
    httpBatchLink({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      url: `${import.meta.env.VITE_TRPC_SERVER_URL}`,
      /// to support session cookies
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      },
    }),
  ],
  transformer: superjson,
});

// tRPC for non-react usage
export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      url: `${import.meta.env.VITE_TRPC_SERVER_URL}`,
      /// to support session cookies
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      },
    }),
  ],
  transformer: superjson,
});

export default trpcReact;
