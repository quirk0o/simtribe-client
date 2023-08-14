import "./reset.css"
import "./theme.css"
import "./typography.css"
import type { Metadata } from "next"

import styles from "./layout.module.css"

export const metadata: Metadata = {
  title: "SimTribe",
  description: "Sims legacy and challenge tracking",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={styles.layout}>
        {children}
      </body>
    </html>
  )
}
