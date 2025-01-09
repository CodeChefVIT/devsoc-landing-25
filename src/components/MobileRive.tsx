"use client";

import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas";
// import { useEffect, useState } from "react";

export default function MovileRive() {


  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <Rive
        src="/litecloud.riv"
        stateMachines={["State Machine 1"]}
        artboard="Main 2"
        layout={new Layout({
          fit: Fit.Cover,
          alignment: Alignment.Center,
        })}
      />

    </div>
  );
}
