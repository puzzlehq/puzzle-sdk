import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
  debugQuery?: boolean;
};

export const QueryProvider = ({ children, debugQuery }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {debugQuery && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  );
};
