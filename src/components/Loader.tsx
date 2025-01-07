"use client";

import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas";

export default function Loader() {
  return (
<div className="w-screen h-screen overflow-hidden relative bg-black">
      <Rive
        src="/devsoc.riv"
        stateMachines={["State Machine 1"]}
        artboard="Loader 2"
        layout={new Layout({
          fit: Fit.FitWidth,
          alignment: Alignment.Center,
        })}
      />
    </div>
  );
}
