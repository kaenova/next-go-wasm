import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <script src='/wasm_exec.js' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}