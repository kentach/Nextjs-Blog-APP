import utilStyle from "../styles/utils.module.css";
import type { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
} // コンポーネントをpropsで受け取る時の型

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <section className={`${utilStyle.headingMd} ${utilStyle.paddingSm}`}>
        {children}
      </section>
    </>
  );
}
