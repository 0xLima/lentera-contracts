/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  SimpleInterest,
  SimpleInterestInterface,
} from "../SimpleInterest";

const _abi = [
  {
    inputs: [],
    name: "INTEREST_RATE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENT",
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
  {
    inputs: [
      {
        internalType: "uint16",
        name: "percentage",
        type: "uint16",
      },
    ],
    name: "checkPercentage",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "principal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "durationSecs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
    ],
    name: "getFullInterestAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "percent",
        type: "uint160",
      },
    ],
    name: "percentageOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class SimpleInterest__factory {
  static readonly abi = _abi;
  static createInterface(): SimpleInterestInterface {
    return new utils.Interface(_abi) as SimpleInterestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleInterest {
    return new Contract(address, _abi, signerOrProvider) as SimpleInterest;
  }
}
