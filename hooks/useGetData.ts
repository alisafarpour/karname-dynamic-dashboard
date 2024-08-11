import {useGetAuthorizationConfig} from "./useGetAuthorizationConfig";
import axios from "axios";
import getEndPoint from "utils/getEndPoint";
import {useQuery, UseQueryResult} from "@tanstack/react-query";


export const useGetData = <T = any>(endpoint: string, queryKey: string) : UseQueryResult<Record<any, any>, Error> => {
    const config = useGetAuthorizationConfig()
    type GetType = {
        error?: number;
        errorMessage?: string;
        value: T;
    }

    return useQuery(
        {
            queryKey: [queryKey],
            queryFn: (): Promise<GetType> => axios.get(getEndPoint() + endpoint, config).then(res => res.data),
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        }
    )
}