"use client"


import * as React from "react";

import {NextUIProvider} from "@nextui-org/system";

function App() {

  return (
    <NextUIProvider>
      <YourApplication />
    </NextUIProvider>
  );
}