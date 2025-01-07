"use client";

import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

export default function HomeRIve() {
  

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <Rive
        src="/maincloud.riv"
        stateMachines={["State Machine 1"]}
        artboard="Main"
        layout={new Layout({
          fit: Fit.Cover,
          alignment: Alignment.Center,
        })}
      />
      
    </div>
  );
}
