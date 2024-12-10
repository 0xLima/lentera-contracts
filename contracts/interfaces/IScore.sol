// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IScore {
    function getScore(address user) external view returns (uint16);
}
