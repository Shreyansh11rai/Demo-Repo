import { Header2 } from "@/components/header-comp/Header";

export default function RootLayout({ children }) {
    return (
        <>
          <Header2/>
          {children}
        </>
    );
  }