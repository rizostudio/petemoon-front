import React, { useState, useEffect, useContext } from "react";
import "../styles/globals.css";
import { AuthContextProvider } from "@/store/AuthCtx/AuthContext";
import { useRouter } from "next/router";
import Loading from "@/components/partials/loading";
import { BasketContextProvider } from "@/store/BasketCtx/BasketContext";
import ToastContainer from "@/components/partials/toast/ToatContainer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => {
      console.log(url);
      if (
        url === router.pathname ||
        url.startsWith("/product-category/") ||
        url.startsWith("/dashboard")
      ) {
        console.log(router);
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    const handleComplete = (url) => {
      if (
        url === router.pathname ||
        router.pathname.startsWith("/product-category/") ||
        router.pathname.startsWith("/dashboard")
      ) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loading />
      ) : (
        <AuthContextProvider>
          <BasketContextProvider>
            <Component {...pageProps} />
          </BasketContextProvider>
        </AuthContextProvider>
      )}
    </>
  );
}

export default MyApp;
