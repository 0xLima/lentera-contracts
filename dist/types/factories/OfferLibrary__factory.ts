/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OfferLibrary, OfferLibraryInterface } from "../OfferLibrary";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum OfferLibrary.State",
        name: "state",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "principalToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentPrincipal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialPrincipal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "daysToMaturity",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiresAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "collateralTokens",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum OfferLibrary.Type",
        name: "offerType",
        type: "uint8",
      },
    ],
    name: "OfferCreated",
    type: "event",
  },
];

const _bytecode =
  "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea264697066735822122074b14508f433a27fc842fcd92c70d93493ab4038e3d9d24ca449e6320d98742464736f6c63430008140033";

type OfferLibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OfferLibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OfferLibrary__factory extends ContractFactory {
  constructor(...args: OfferLibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OfferLibrary> {
    return super.deploy(overrides || {}) as Promise<OfferLibrary>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OfferLibrary {
    return super.attach(address) as OfferLibrary;
  }
  connect(signer: Signer): OfferLibrary__factory {
    return super.connect(signer) as OfferLibrary__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OfferLibraryInterface {
    return new utils.Interface(_abi) as OfferLibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OfferLibrary {
    return new Contract(address, _abi, signerOrProvider) as OfferLibrary;
  }
}
