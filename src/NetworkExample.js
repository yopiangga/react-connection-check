import React from "react";
import useNetwork from "./useNetwork";
import NetworkInfoTable from "./NetworkInfoTable";

const UseNetworkExample = () => {
  const networkState = useNetwork();

  const {
    online,
    since,
    downLink,
    downLinkMax,
    effectiveType,
    rtt,
    saveData,
    type,
  } = networkState;

  return (
    <div maxWidth="md">
      <div className="">
        {online ? "Online Gan" : "Offline Gan"}
        <div>
          <h1>Network Stats:</h1>
          <NetworkInfoTable data={networkState} />
        </div>
      </div>
    </div>
  );
};

export default UseNetworkExample;
