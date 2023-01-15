import { refreshToken } from "@/localStorage";
import { selectRefreshToken, setRefreshToken } from "@/redux/base";
import { PostRefreshToken } from "@/services/shared";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useToken(initialValue) {
  //const dispatch = useDispatch();
  const [refreshToken, setRefreshToken] = useState(initialValue);
  //useSelector(selectRefreshToken);
  const router = useRouter();

  const set = useCallback((newRefreshToken) => {
    //dispatch(setRefreshToken(newRefreshToken));
    setRefreshToken(newRefreshToken);
  }, []);

  const refresh = useCallback(async () => {
    const response = await PostRefreshToken(refreshToken);
    if (response.success) return;
    console.log("Error: ", response.errors);
    router.push("/login");
  }, [refreshToken]);

  const withRefresh = useCallback(
    async (fn) => {
      const response = await fn();
      if (response.success) return response;
      await refresh();
      const reResponse = await fn();
      return reResponse;
    },
    [refreshToken]
  );

  return {
    set,
    withRefresh,
  };
}
