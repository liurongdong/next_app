import React from "react";
import Hello from "./hello"

export default function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
      <div>
        <header>I am header!</header>
        <main>
            {/*page 自动导入进来*/}
          {children}
        </main>
          <div>
              <Hello></Hello>
          </div>
      </div>
  )
}