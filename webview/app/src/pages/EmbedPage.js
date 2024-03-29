import React from "react";
import { Widget } from "near-social-vm";

export default function EmbedPage({ code, wProps, flags, vsContext, viewerProps }) {
  return (
    <>
      <Widget
        src={vsContext.wrapperSrc}
        config={{ redirectMap: flags }}
        props={{
          ...vsContext.wrapperProps,
          ...viewerProps,
          children: (
            <>
              <div className="position-relative overflow-hidden mt-3">
                <Widget code={code} props={wProps} config={{ redirectMap: flags }} />
              </div>
            </>
          ),
        }}
      />
    </>
  )
}
