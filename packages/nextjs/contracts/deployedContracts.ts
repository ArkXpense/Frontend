/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  devnet: {
    ArkXpenseContractState: {
      address:
        "0x5aae7e354598db5b90831308d157342641d6f484ba073ba5337b4752fbc9f07",
      abi: [
        {
          type: "impl",
          name: "YourContractImpl",
          interface_name:
            "contracts::contracts::ArkXpenseContractState::IArkXpenseContractState",
        },
        {
          type: "interface",
          name: "contracts::contracts::ArkXpenseContractState::IArkXpenseContractState",
          items: [
            {
              type: "function",
              name: "test",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_user_groups",
              inputs: [
                {
                  name: "user_address",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::array::Array::<core::integer::u32>",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "impl",
          name: "OwnableMixinImpl",
          interface_name: "openzeppelin_access::ownable::interface::OwnableABI",
        },
        {
          type: "interface",
          name: "openzeppelin_access::ownable::interface::OwnableABI",
          items: [
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "transfer_ownership",
              inputs: [
                {
                  name: "new_owner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "renounce_ownership",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "transferOwnership",
              inputs: [
                {
                  name: "newOwner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "renounceOwnership",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "owner",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnershipTransferred",
              type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
              kind: "nested",
            },
            {
              name: "OwnershipTransferStarted",
              type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
              kind: "nested",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::contracts::ArkXpenseContractState::ArkXpenseContractState::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnableEvent",
              type: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
              kind: "flat",
            },
          ],
        },
      ],
      classHash:
        "0x668bc8067439519c15438d3dcbefd2f44e1c0874cc7b22174b383449eb80d80",
    },
  },
} as const;

export default deployedContracts;
