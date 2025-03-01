/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IScore, IScoreInterface } from "../IScore";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getScore",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IScore__factory {
  static readonly abi = _abi;
  static createInterface(): IScoreInterface {
    return new utils.Interface(_abi) as IScoreInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IScore {
    return new Contract(address, _abi, signerOrProvider) as IScore;
  }
}
