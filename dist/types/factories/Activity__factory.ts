/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Activity, ActivityInterface } from "../Activity";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "borrowedTimes",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "lentTimes",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowedVolume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lentVolume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastActive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralVolume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "interestPaidVolume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "defaultedTimes",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "defaultedVolume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "firstBorrowAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "activeLoans",
        type: "uint16",
      },
    ],
    name: "ActivityChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "activeLoansCount",
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
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountBorrowedInUSD",
        type: "uint256",
      },
    ],
    name: "borrowLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountInUSD",
        type: "uint256",
      },
    ],
    name: "dropCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getActivity",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "borrowedTimes",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "lentTimes",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "borrowedVolume",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lentVolume",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastActive",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralVolume",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestPaidVolume",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "defaultedTimes",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "defaultedVolume",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "firstBorrowAt",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "activeLoans",
            type: "uint16",
          },
        ],
        internalType: "struct ActivityLibrary.Model",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isDefaulter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "interestPaidInUSD",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "completed",
        type: "bool",
      },
    ],
    name: "repayLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "address_",
        type: "address",
      },
    ],
    name: "setLendingPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523461006257600180546001600160a01b03199081169091555f805433928116831782556001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3610c8490816100678239f35b5f80fdfe6040608081526004361015610012575f80fd5b5f90813560e01c908163113aa8b1146108f0578163519badd61461077657816363a6c981146106ef57816366d13fb6146105cb578163715018a61461052657816379ba5097146103f4578163875bc3d1146102cd5781638da5cb5b1461027c5781639445ae0414610213578163d8689e13146101a8578163e30c397814610151575063f2fde38b146100a2575f80fd5b3461014e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014e576100d9610972565b6100e16109bc565b73ffffffffffffffffffffffffffffffffffffffff80911690817fffffffffffffffffffffffff000000000000000000000000000000000000000060015416176001558254167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e227008380a380f35b80fd5b9050346101a457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a45760209073ffffffffffffffffffffffffffffffffffffffff600154169051908152f35b5080fd5b9050346101a45760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a45761ffff60068260209473ffffffffffffffffffffffffffffffffffffffff6101ff610972565b168152600386522001541615159051908152f35b9050346101a45760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a45761ffff60098260209473ffffffffffffffffffffffffffffffffffffffff61026a610972565b16815260038652200154169051908152f35b9050346101a457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a45773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b9050346101a45760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a457610306610972565b9061030f610999565b9060643580151581036103f05773ffffffffffffffffffffffffffffffffffffffff806002541633036103ec578461038282610382956103879461038c99168a526003602052808a209188168a52892094600586016103716044358254610a7a565b905542600387015561038f57610ad5565b610b88565b610ad5565b80f35b6009810180549061ffff90816103a6818516610b56565b167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000080941617905560098701918254916103e1818416610b56565b169116179055610ad5565b8580fd5b8480fd5b9050346101a457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a4576001549073ffffffffffffffffffffffffffffffffffffffff9033828416036104a357507fffffffffffffffffffffffff0000000000000000000000000000000000000000809216600155825491339083161783553391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b608490517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f74207468652060448201527f6e6577206f776e657200000000000000000000000000000000000000000000006064820152fd5b823461014e57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014e5761055d6109bc565b8073ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffff0000000000000000000000000000000000000000806001541660015582549081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b9050346101a45760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a45761016091610608610972565b91610611610a87565b82815282602082015282828201528260608201528260808201528260a08201528260c08201528260e0820152610100938385830152610680838573ffffffffffffffffffffffffffffffffffffffff610120948286880152610140988980980152168152600360205220610ad5565b9083519561ffff948584511688528560208501511660208901528084015190880152606083015160608801526080830151608088015260a083015160a088015260c083015160c08801528460e08401511660e08801528083015190870152808201519086015201511690820152f35b9050346101a457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a457610727610972565b73ffffffffffffffffffffffffffffffffffffffff806002541633036107725761038c926103829183168552600360205284206004810161076b6024358254610a7a565b9055610ad5565b8380fd5b9050346101a45760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a4576107af610972565b906107b8610999565b9060443573ffffffffffffffffffffffffffffffffffffffff806002541633036103ec578461038282610382956103879461038c99168a526003602052808a209188168a52892094815461ffff907fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000ffff63ffff000061083a848460101c16610a3a565b60101b16911617835560028301610852838254610a7a565b9055600983019182549282610868818616610a3a565b167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000809516179055426003850155875483836108a5818416610a3a565b1691161788556108ba60018901918254610a7a565b905560098701918254916108cf818416610a3a565b169116179055600885018054156108e7575b50610ad5565b4290555f6108e1565b823461014e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014e5773ffffffffffffffffffffffffffffffffffffffff61093d610972565b6109456109bc565b167fffffffffffffffffffffffff0000000000000000000000000000000000000000600254161760025580f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361099557565b5f80fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361099557565b73ffffffffffffffffffffffffffffffffffffffff5f541633036109dc57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90600161ffff80931601918211610a4d57565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b91908201809211610a4d57565b60405190610160820182811067ffffffffffffffff821117610aa857604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90610ade610a87565b91600981549161ffff8381809516875260101c166020860152600181015460408601526002810154606086015260038101546080860152600481015460a0860152600581015460c08601528260068201541660e086015260078101546101008601526008810154610120860152015416610140830152565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61ffff80931601918211610a4d57565b9061ffff808351169281602082015116604082015190606083015160808401519060a085015160c0860151908760e0880151169361010093848901519761012097888b01519b610140809c0151169c6040519e8f9173ffffffffffffffffffffffffffffffffffffffff16825260208201526040015260608d015260808c015260a08b015260c08a015260e08901528701528501528301526101608201526101807f2dd01e2b69318edb9d1b3c3b89892c0035f669809d9fa20e7a489c2663e0519491a156fea264697066735822122065fcc39730b1aed6d3f2404f485d895f2670e9db5f70835ed377b8e3cc41097264736f6c63430008140033";

type ActivityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ActivityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Activity__factory extends ContractFactory {
  constructor(...args: ActivityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Activity> {
    return super.deploy(overrides || {}) as Promise<Activity>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Activity {
    return super.attach(address) as Activity;
  }
  connect(signer: Signer): Activity__factory {
    return super.connect(signer) as Activity__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ActivityInterface {
    return new utils.Interface(_abi) as ActivityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Activity {
    return new Contract(address, _abi, signerOrProvider) as Activity;
  }
}
