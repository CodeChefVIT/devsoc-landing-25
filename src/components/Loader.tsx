"use client";

import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas";

export default function Loader() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Rive
        src="/devsoc.riv"
        stateMachines={["State Machine 1"]}
        artboard="Loader 2"
        layout={new Layout({
          fit: Fit.Fill,
          alignment: Alignment.Center,
        })}
      />
    </div>
  );
}
