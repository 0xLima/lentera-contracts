/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LoanToValueRatio,
  LoanToValueRatioInterface,
} from "../LoanToValueRatio";

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
    inputs: [],
    name: "base",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBase",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
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
    name: "getLTV",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getRelativeLTV",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
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
    inputs: [],
    name: "scorePrice0",
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
    name: "scorePrice1",
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
    inputs: [
      {
        internalType: "address",
        name: "trustScore_",
        type: "address",
      },
      {
        internalType: "uint160",
        name: "minLTV_",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "maxLTV_",
        type: "uint160",
      },
    ],
    name: "setScore",
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
  "0x6080806040523461008e576104b060018060a01b031980600154166001555f5433828216175f55339060018060a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a36103e88160035416176003556004541617600455683635c9adc5dea0000060055568a2a15d09519be000006006556109b590816100938239f35b5f80fdfe60806040908082526004361015610014575f80fd5b5f91823560e01c9182632ffee7bd1461063f575081634b6adc3c146106025781635001f3b5146102e3578163715018a61461055d57816379ba50971461042b5781638a83f8cc146103cf5781638da5cb5b1461037e578163aca25f9a1461031d578163d104a136146102e3578163e30c397814610290578163e5941eef14610154575063f2fde38b146100a5575f80fd5b346101515760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610151576100dc610679565b6100e46106a0565b73ffffffffffffffffffffffffffffffffffffffff80911690817fffffffffffffffffffffffff000000000000000000000000000000000000000060015416176001558254167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e227008380a380f35b80fd5b90503461028c5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028c5761018d610679565b6024359073ffffffffffffffffffffffffffffffffffffffff9182811693848203610288576044359484861690818703610284576101c96106a0565b10156102275750610210836101de8193610803565b16947fffffffffffffffffffffffff000000000000000000000000000000000000000095866003541617600355610803565b168360045416176004551690600254161760025580f35b606490517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4552525f4c5456000000000000000000000000000000000000000000000000006044820152fd5b8780fd5b8580fd5b5080fd5b90503461028c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028c5760209073ffffffffffffffffffffffffffffffffffffffff600154169051908152f35b90503461028c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028c5760209051600a8152f35b90503461028c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028c5760209073ffffffffffffffffffffffffffffffffffffffff610376610371610679565b610833565b915191168152f35b90503461028c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028c5773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b90503461028c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028c5760209073ffffffffffffffffffffffffffffffffffffffff610376610422610679565b60243590610773565b90503461028c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028c576001549073ffffffffffffffffffffffffffffffffffffffff9033828416036104da57507fffffffffffffffffffffffff0000000000000000000000000000000000000000809216600155825491339083161783553391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b608490517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f74207468652060448201527f6e6577206f776e657200000000000000000000000000000000000000000000006064820152fd5b823461015157807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610151576105946106a0565b8073ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffff0000000000000000000000000000000000000000806001541660015582549081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b90503461028c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028c576020906005549051908152f35b83903461028c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028c576020906006548152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361069c57565b5f80fd5b73ffffffffffffffffffffffffffffffffffffffff5f541633036106c057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b91909173ffffffffffffffffffffffffffffffffffffffff8080941691160191821161074657565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b61077c90610833565b9060065481116107e557600554106107915790565b73ffffffffffffffffffffffffffffffffffffffff737fffffffffffffffffffffffffffffffffffffff6107ce826004541683600354169061071e565b60011c168091831611156107e0575090565b905090565b505073ffffffffffffffffffffffffffffffffffffffff6004541690565b9073ffffffffffffffffffffffffffffffffffffffff80921691600a83021691808304600a149015171561074657565b73ffffffffffffffffffffffffffffffffffffffff90602082602481600254169360405194859384927fd47875d00000000000000000000000000000000000000000000000000000000084521660048301525afa908115610974575f916108d7575b50908060045416908060035416809203928184116107465761ffff829116931690838202169281840414901517156107465760646108d492049061071e565b90565b60203d811161096d575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f820116820182811067ffffffffffffffff8211176109405760209183916040528101031261028c57519061ffff8216820361015157505f610895565b6024847f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b503d6108e1565b6040513d5f823e3d90fdfea2646970667358221220ea9eae668d2730f879336c132e583253ce3e683b930076bf002972bf3da04b3164736f6c63430008140033";

type LoanToValueRatioConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LoanToValueRatioConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LoanToValueRatio__factory extends ContractFactory {
  constructor(...args: LoanToValueRatioConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LoanToValueRatio> {
    return super.deploy(overrides || {}) as Promise<LoanToValueRatio>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LoanToValueRatio {
    return super.attach(address) as LoanToValueRatio;
  }
  connect(signer: Signer): LoanToValueRatio__factory {
    return super.connect(signer) as LoanToValueRatio__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LoanToValueRatioInterface {
    return new utils.Interface(_abi) as LoanToValueRatioInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LoanToValueRatio {
    return new Contract(address, _abi, signerOrProvider) as LoanToValueRatio;
  }
}
