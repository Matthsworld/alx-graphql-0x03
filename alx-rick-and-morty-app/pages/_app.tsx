import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN', // Replace with your actual DSN from Sentry
  tracesSampleRate: 1.0,  // Adjust this value if needed
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
