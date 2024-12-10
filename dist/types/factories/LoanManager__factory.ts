/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LoanManager, LoanManagerInterface } from "../LoanManager";

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
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum LoanLibrary.State",
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
        internalType: "address",
        name: "collateralToken",
        type: "address",
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
        name: "currentPrincipal",
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
        internalType: "uint256",
        name: "currentCollateral",
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
        internalType: "uint256",
        name: "startDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maturityDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "graceDays",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "lender",
        type: "address",
      },
    ],
    name: "LoanCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralPriceInUSD",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "numInstallmentsPaid",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unClaimedPrincipal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unClaimedCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unClaimedDefaultCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unClaimedBorrowedPrincipal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalInterestPaid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "repaidOn",
        type: "uint256",
      },
    ],
    name: "LoanCreatedProperty",
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
    name: "DUST_AMOUNT",
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
    name: "ONE_DAY",
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
    name: "ONE_HOUR",
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
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "claimBorrowedPrincipal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "claimCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "claimDefaultCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "claimPrincipal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        internalType: "enum OfferLibrary.Type",
        name: "offerType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "principalToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "principalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralPriceInUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "daysToMaturity",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "unClaimedBorrowedPrincipal",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "lender",
        type: "address",
      },
    ],
    name: "createLoan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
    ],
    name: "getLoan",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "offerId",
            type: "uint256",
          },
          {
            internalType: "enum LoanLibrary.State",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "principalToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateralToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "initialPrincipal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentPrincipal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralPriceInUSD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maturityDate",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "graceDays",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "numInstallmentsPaid",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "unClaimedPrincipal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unClaimedCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unClaimedDefaultCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unClaimedBorrowedPrincipal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalInterestPaid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "repaidOn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "address",
            name: "lender",
            type: "address",
          },
        ],
        internalType: "struct LoanLibrary.Loan",
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
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "principalPaid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralRetrieved",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralPaid",
        type: "uint256",
      },
    ],
    name: "liquidateLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "loans",
    outputs: [
      {
        internalType: "uint256",
        name: "offerId",
        type: "uint256",
      },
      {
        internalType: "enum LoanLibrary.State",
        name: "state",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "principalToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialPrincipal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentPrincipal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralPriceInUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maturityDate",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "graceDays",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "numInstallmentsPaid",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "unClaimedPrincipal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unClaimedCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unClaimedDefaultCollateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unClaimedBorrowedPrincipal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalInterestPaid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repaidOn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "lender",
        type: "address",
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
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestPaid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "principalPaid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralRetrieved",
        type: "uint256",
      },
    ],
    name: "repayLoan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "days_",
        type: "uint16",
      },
    ],
    name: "setGraceDays",
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
  "0x6080806040523461007b57600180546001600160a01b03199081169091555f805433928116831782556001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a360646002556006805461ffff60a01b1916600560a01b179055611c9a90816100808239f35b5f80fdfe6101806040526004361015610012575f80fd5b5f3560e01c8063113aa8b1146114c8578063129773e214611358578063165035e21461131e578063189a4b761461128857806319467e2714610d6f5780633799ba3f14610b73578063504006ca14610973578063715018a6146108d057806378fe76ec1461084157806379ba509714610714578063863e76db146106d95780638da5cb5b1461068957806397f641ab1461064e578063a5aca380146105b8578063e1ec3c68146103a8578063e30c397814610357578063e41936d714610284578063f2fde38b146101d95763f400c743146100eb575f80fd5b346101d55760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d55760043561012561156d565b9073ffffffffffffffffffffffffffffffffffffffff806006541633036101d5576101d190825f52600460205261016a60405f20948280601388015416911614611939565b610191600c8501935f85549561018187151561199e565b5561018b8661179a565b90611a68565b6001845494015460081c166040519384938491604091949373ffffffffffffffffffffffffffffffffffffffff9160608501968552602085015216910152565b0390f35b5f80fd5b346101d55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d55761021061154a565b6102186115d9565b73ffffffffffffffffffffffffffffffffffffffff80911690817fffffffffffffffffffffffff000000000000000000000000000000000000000060015416176001555f54167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e227005f80a3005b346101d55760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d5576004356102be61156d565b9073ffffffffffffffffffffffffffffffffffffffff806006541633036101d5576101d190825f52600460205261030360405f20948280601388015416911614611939565b61031a600e8501935f85549561018187151561199e565b60028454940154166040519384938491604091949373ffffffffffffffffffffffffffffffffffffffff9160608501968552602085015216910152565b346101d5575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d557602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b346101d55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d5576004355f52600460205260405f208061012052808054600182015460a052600282015473ffffffffffffffffffffffffffffffffffffffff166101005260038201546004830154600584015460068501546007860154600887015490600988015492600a89015494600b8a015496600c8b015498600d8c01549a600e8d01549c600f01549d601081015460e0526011810154608052601281015473ffffffffffffffffffffffffffffffffffffffff1660c0526013015473ffffffffffffffffffffffffffffffffffffffff16610160526040518061014052526101405160200160a05160ff16906104c8916115cc565b60a05160081c73ffffffffffffffffffffffffffffffffffffffff16610140516040015261010051610140516060015261014051608001526101405160a001526101405160c001526101405160e0015261014051610100015261014051610120015261014051610140015261014051610160015261ffff811661014051610180015260101c60ff16610140516101a00152610140516101c00152610140516101e0015261014051610200015261014051610220015260e05161014051610240015260805161014051610260015260c05161014051610280015261016051610140516102a00152610140516102c090f35b346101d55760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d5576004356105f261156d565b9073ffffffffffffffffffffffffffffffffffffffff806006541633036101d5576101d190825f52600460205261063760405f20948280601288015416911614611a03565b61031a600d8501935f85549561018187151561199e565b346101d5575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d5576020600254604051908152f35b346101d5575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d557602073ffffffffffffffffffffffffffffffffffffffff5f5416604051908152f35b346101d5575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d5576020604051620151808152f35b346101d5575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d55760015473ffffffffffffffffffffffffffffffffffffffff33818316036107bd577fffffffffffffffffffffffff00000000000000000000000000000000000000008092166001555f549133908316175f553391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f74207468652060448201527f6e6577206f776e657200000000000000000000000000000000000000000000006064820152fd5b346101d55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d55760043561ffff811681036101d5576108866115d9565b7fffffffffffffffffffff0000ffffffffffffffffffffffffffffffffffffffff75ffff00000000000000000000000000000000000000006006549260a01b169116176006555f80f35b346101d5575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d5576109066115d9565b5f73ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffff0000000000000000000000000000000000000000806001541660015582549081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b346101d55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d5575f6102a06109ae611779565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e0820152826102008201528261022082015282610240820152826102608201528261028082015201526004355f5260046020526102c0610a5160405f2061179a565b73ffffffffffffffffffffffffffffffffffffffff6102a06040519280518452610a83602082015160208601906115cc565b8260408201511660408501528260608201511660608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e085015261010081015161010085015261012081015161012085015261014081015161014085015261016081015161016085015261ffff6101808201511661018085015260ff6101a0820151166101a08501526101c08101516101c08501526101e08101516101e085015261020081015161020085015261022081015161022085015261024081015161024085015261026081015161026085015282610280820151166102808501520151166102a0820152f35b346101d557610b8136611590565b9073ffffffffffffffffffffffffffffffffffffffff6006949394541633036101d557825f52600460205260405f2090600182019081549060ff82166004811015610d4257610bd090156118c7565b61ffff600b85015416620151809080820291820403610d1557610bf790600a8601546118ba565b4211610cb757610c7a9661018b95600a92610c176004880193845461192c565b809355610c296006880191825461192c565b91828255610c3c600e89019182546118ba565b905581610ca8575b505011610c7c575060037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905561179a565b005b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600217905561179a565b5f91600d880155558880610c44565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4552525f4c4f414e5f4e4f545f4d4154555245440000000000000000000000006044820152fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b346101d5576101807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d55760243560028110156101d5576044359073ffffffffffffffffffffffffffffffffffffffff821682036101d5576064359173ffffffffffffffffffffffffffffffffffffffff831683036101d557610104359261ffff84168094036101d557610144359073ffffffffffffffffffffffffffffffffffffffff821682036101d557610164359173ffffffffffffffffffffffffffffffffffffffff831683036101d55773ffffffffffffffffffffffffffffffffffffffff6006541633036101d557600160035401948560035573ffffffffffffffffffffffffffffffffffffffff821673ffffffffffffffffffffffffffffffffffffffff85161461122a5761120157600435610eb9610eb38383611bf2565b15611657565b5f526005602052610ecd8160405f206116fe565b620151809580870296870403610d155761ffff73ffffffffffffffffffffffffffffffffffffffff94859384610f0560209a426118ba565b9181600654945f610f14611779565b9d8e600435815201521660408c01521660608a015260843560808a015260843560a08a015260a4358060c08b015260e08a015260c4356101008a015260e4356101208a0152426101408a015261016089015260a01c166101808701525f6101a08701525f6101c08701525f6101e08701525f610200870152610124356102208701525f6102408701525f61026087015216610280850152166102a0830152805f52600460205260405f20918051835560208101516004811015610d42576102a060138573ffffffffffffffffffffffffffffffffffffffff936001602098019081547fffffffffffffffffffffff00000000000000000000000000000000000000000060ff74ffffffffffffffffffffffffffffffffffffffff0060408b015160081b169316911617179055836060860151167fffffffffffffffffffffffff00000000000000000000000000000000000000006002830154161760028201556080850151600382015560a0850151600482015560c0850151600582015560e08501516006820155610100850151600782015561012085015160088201556101408501516009820155610160850151600a82015561113c600b820161ffff610180880151167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000082541617815560ff6101a0880151167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff62ff000083549260101b169116179055565b6101c0850151600c8201556101e0850151600d820155610200850151600e820155610220850151600f820155610240850151601082015561026085015160118201556012810184610280870151167fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905501920151167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055805f52600482526111f96111f360405f2061179a565b82611a68565b604051908152f35b600435611211610eb38583611bf2565b5f5260056020526112258360405f206116fe565b610ecd565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4552525f43414e545f424f52524f575f4f574e000000000000000000000000006044820152fd5b346101d55760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d5576004356112c261156d565b9073ffffffffffffffffffffffffffffffffffffffff806006541633036101d5576101d190825f52600460205261130760405f20948280601288015416911614611a03565b610191600f8501935f85549561018187151561199e565b346101d5575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d5576020604051610e108152f35b346101d55761136636611590565b9273ffffffffffffffffffffffffffffffffffffffff6006939293541633036101d557805f52600460205260405f2092600184019360ff8554166004811015610d42576113b390156118c7565b600b810191600160ff845460101c16019660ff8811610d15576114286114819661141160ff9a61018b97907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff62ff000083549260101b169116179055565b601085016114208282546118ba565b9055836118ba565b611437600c85019182546118ba565b9055600d83016114488282546118ba565b90556114596004840192835461192c565b80925561146b6006840191825461192c565b9055426011830155600254101561149a5761179a565b54166004811015610d4257602090600160405191148152f35b60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086541617855561179a565b346101d55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d55773ffffffffffffffffffffffffffffffffffffffff61151461154a565b61151c6115d9565b167fffffffffffffffffffffffff000000000000000000000000000000000000000060065416176006555f80f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036101d557565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036101d557565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60809101126101d55760043590602435906044359060643590565b906004821015610d425752565b73ffffffffffffffffffffffffffffffffffffffff5f541633036115f957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b1561165e57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4552525f414c52454144595f424f52524f5745440000000000000000000000006044820152fd5b80548210156116d1575f5260205f2001905f90565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b80546801000000000000000081101561174c57611720916001820181556116bc565b819291549060031b9173ffffffffffffffffffffffffffffffffffffffff809116831b921b1916179055565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051906102c0820182811067ffffffffffffffff82111761174c57604052565b906117a3611779565b918054835260018101549060ff8216906004821015610d4257601391602086015273ffffffffffffffffffffffffffffffffffffffff809360081c16604086015282600282015416606086015260038101546080860152600481015460a0860152600581015460c0860152600681015460e0860152600781015461010086015260088101546101208601526009810154610140860152600a81015461016086015260ff600b82015461ffff811661018088015260101c166101a0860152600c8101546101c0860152600d8101546101e0860152600e810154610200860152600f81015461022086015260108101546102408601526011810154610260860152826012820154166102808601520154166102a0830152565b91908201809211610d1557565b156118ce57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4552525f4c4f414e5f4e4f545f414354495645000000000000000000000000006044820152fd5b91908203918211610d1557565b1561194057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4552525f4e4f545f4c454e4445520000000000000000000000000000000000006044820152fd5b156119a557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4552525f5a45524f5f42414c414e4345000000000000000000000000000000006044820152fd5b15611a0a57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4552525f4e4f545f424f52524f574552000000000000000000000000000000006044820152fd5b908051906020810151916004831015610d42578173ffffffffffffffffffffffffffffffffffffffff9185828460408201511694806060830151169760808301519660a084015160c08501519060e0860151996101209c8d88015194610140890151966101608a015198806101808c015161ffff169b6102800151169f6102a00151169b6040519b8c5260208c015260408b01611b04916115cc565b60608a0152608089015260a088015260c087015260e08601526101009788860152898501526101408401526101608301526101808201526101a094858201526101c091828201526101e090817f1b94239d4d6b6892c4b24e380f7225897bf6df2f2c7398b28e57b275e8cd103f91a1838301519483015160ff1691830151908301516102008401519161022085015193610240860151956102600151976040519a8b5260208b015260408a01526060890152608088015260a087015260c086015260e08501528301527faf2b20ce1bba15f4786bb5e0af37efddd250236bdb204fa4a170338d090c5c8291a1565b91905f5b835f52600560205260405f20805461ffff83161015611c5c5781611c19916116bc565b905473ffffffffffffffffffffffffffffffffffffffff908185169260031b1c1614611c545761ffff809116908114610d1557600101611bf6565b506001925050565b505f9350505056fea26469706673582212201903e44a1b2d1de345b26824a8465c06bc3b5c098fcadcd3eb4764029e8c47d264736f6c63430008140033";

type LoanManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LoanManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LoanManager__factory extends ContractFactory {
  constructor(...args: LoanManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LoanManager> {
    return super.deploy(overrides || {}) as Promise<LoanManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LoanManager {
    return super.attach(address) as LoanManager;
  }
  connect(signer: Signer): LoanManager__factory {
    return super.connect(signer) as LoanManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LoanManagerInterface {
    return new utils.Interface(_abi) as LoanManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LoanManager {
    return new Contract(address, _abi, signerOrProvider) as LoanManager;
  }
}
