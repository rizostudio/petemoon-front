import React, { useState, useEffect, useContext } from "react";
import "../styles/globals.css";
import AuthProvider from "@/store/AuthCtx/AuthProvider";
import { useRouter } from "next/router";
import Loading from "@/components/partials/loading";
import AuthContext from "@/store/AuthCtx/AuthContext";
import { BasketContextProvider } from "@/store/BasketCtx/BasketContext";
import { HistoryProvider } from "@/store/HistoryCtx/History";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const { isLoggedIn } = authCtx;
    console.log(isLoggedIn);
    // if (!isLoggedIn) {
    //   router.push("/auth/login");
    // }
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
      {loading ? (
        <Loading />
      ) : (
        <AuthProvider>
          <BasketContextProvider>
            <HistoryProvider>
              <Component {...pageProps} />
            </HistoryProvider>
          </BasketContextProvider>
        </AuthProvider>
      )}
    </>
  );
}

export default MyApp;
