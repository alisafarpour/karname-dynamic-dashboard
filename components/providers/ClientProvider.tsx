'use client'

import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {ThemeProvider} from "@mui/system";
import globalTheme from "@/themes/globalTheme";

export const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})
const ClientProvider = ({children}) => {

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={globalTheme}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} position={'right'}/>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default ClientProvider
