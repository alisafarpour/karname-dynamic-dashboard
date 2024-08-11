import type {Metadata} from "next";
import ClientProvider from "components/providers/ClientProvider";

export const metadata: Metadata = {
    title: "Dynamic Dashboard",
    description: "Karname Code Challenge",
    creator: 'Ali Safarpour',
    keywords: ['Code', 'Karname', 'Challenge'],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <ClientProvider>
            {children}
        </ClientProvider>
        </body>
        </html>
    )
}
