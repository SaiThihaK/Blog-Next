"use client";

import { EdgeStoreProvider } from "@/lib/edgestore";
import fetcher from "@/lib/fetcher";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
type ProviderProps = {
  children: React.ReactNode;
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <SWRConfig value={{ fetcher }}>
      <SessionProvider>
        <EdgeStoreProvider>
          {children}
          <ProgressBar
            height="4px"
            color="#DA291C"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </EdgeStoreProvider>
      </SessionProvider>
    </SWRConfig>
  );
};

export default Provider;
