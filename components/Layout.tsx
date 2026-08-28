import utilStyle from "../styles/utils.module.css";
import type { ReactNode } from "react";
import Header from "./Header";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
  home: boolean;
} // コンポーネントをpropsで受け取る時の型

export default function Layout({ children, home }: LayoutProps) {
  return (
    <>
      <Header home={home} />

      <main className={`${utilStyle.headingMd} ${utilStyle.paddingSm}`}>
        {children}
        {!home && (
          <div>
            <Link href="/">← ホームへ戻る</Link>
          </div>
        )}
      </main>
    </>
  );
}
