import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const chainLink = buildModule("chainLink", (m) => {

  const CL = m.contract("TestChainlink", [], {
    // value: lockedAmount,
  });

  return { CL };
});

export default chainLink;
