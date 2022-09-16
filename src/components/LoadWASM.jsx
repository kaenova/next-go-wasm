import Head from 'next/head';
import React from 'react'
import { useState, useEffect } from 'react'


function LoadWASM({ src, children }) {

  async function loadWasm() {
    try {
      const goWasm = new window.Go();
      const result = await WebAssembly.instantiateStreaming(fetch(src), goWasm.importObject);
      goWasm.run(result.instance);
    } catch (e) {
      window.console.error("Fail to load WASM")
    }
  }

  useEffect(() => {
    loadWasm()
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default LoadWASM