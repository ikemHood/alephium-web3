/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as NFTCollectionWithRoyaltyTestContractJson } from "../nft/NFTCollectionWithRoyaltyTest.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace NFTCollectionWithRoyaltyTestTypes {
  export type Fields = {
    nftTemplateId: HexString;
    collectionUri: HexString;
    collectionOwner: Address;
    royaltyRate: bigint;
    totalSupply: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getCollectionUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    totalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    nftByIndex: {
      params: CallContractParams<{ index: bigint }>;
      result: CallContractResult<HexString>;
    };
    royaltyAmount: {
      params: CallContractParams<{ tokenId: HexString; salePrice: bigint }>;
      result: CallContractResult<bigint>;
    };
    mint: {
      params: CallContractParams<{ nftUri: HexString }>;
      result: CallContractResult<HexString>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  NFTCollectionWithRoyaltyTestInstance,
  NFTCollectionWithRoyaltyTestTypes.Fields
> {
  encodeFields(fields: NFTCollectionWithRoyaltyTestTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as NFTCollectionWithRoyaltyTestTypes.Fields;
  }

  consts = {
    ErrorCodes: {
      IncorrectTokenIndex: BigInt(0),
      NFTNotFound: BigInt(1),
      NFTNotPartOfCollection: BigInt(2),
      CollectionOwnerAllowedOnly: BigInt(1),
    },
  };

  at(address: string): NFTCollectionWithRoyaltyTestInstance {
    return new NFTCollectionWithRoyaltyTestInstance(address);
  }

  tests = {
    getCollectionUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<
          NFTCollectionWithRoyaltyTestTypes.Fields,
          never
        >,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getCollectionUri", params);
    },
    totalSupply: async (
      params: Omit<
        TestContractParamsWithoutMaps<
          NFTCollectionWithRoyaltyTestTypes.Fields,
          never
        >,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "totalSupply", params);
    },
    nftByIndex: async (
      params: TestContractParamsWithoutMaps<
        NFTCollectionWithRoyaltyTestTypes.Fields,
        { index: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "nftByIndex", params);
    },
    validateNFT: async (
      params: TestContractParamsWithoutMaps<
        NFTCollectionWithRoyaltyTestTypes.Fields,
        { nftId: HexString; nftIndex: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "validateNFT", params);
    },
    royaltyAmount: async (
      params: TestContractParamsWithoutMaps<
        NFTCollectionWithRoyaltyTestTypes.Fields,
        { tokenId: HexString; salePrice: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "royaltyAmount", params);
    },
    payRoyalty: async (
      params: TestContractParamsWithoutMaps<
        NFTCollectionWithRoyaltyTestTypes.Fields,
        { payer: Address; amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "payRoyalty", params);
    },
    withdrawRoyalty: async (
      params: TestContractParamsWithoutMaps<
        NFTCollectionWithRoyaltyTestTypes.Fields,
        { recipient: Address; amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "withdrawRoyalty", params);
    },
    mint: async (
      params: TestContractParamsWithoutMaps<
        NFTCollectionWithRoyaltyTestTypes.Fields,
        { nftUri: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "mint", params);
    },
  };
}

// Use this object to test and deploy the contract
export const NFTCollectionWithRoyaltyTest = new Factory(
  Contract.fromJson(
    NFTCollectionWithRoyaltyTestContractJson,
    "",
    "919808beff802a8043d62c5ff23249f22dbfdbd2fae56264f5f108af59eb171e",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class NFTCollectionWithRoyaltyTestInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<NFTCollectionWithRoyaltyTestTypes.State> {
    return fetchContractState(NFTCollectionWithRoyaltyTest, this);
  }

  methods = {
    getCollectionUri: async (
      params?: NFTCollectionWithRoyaltyTestTypes.CallMethodParams<"getCollectionUri">
    ): Promise<
      NFTCollectionWithRoyaltyTestTypes.CallMethodResult<"getCollectionUri">
    > => {
      return callMethod(
        NFTCollectionWithRoyaltyTest,
        this,
        "getCollectionUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params?: NFTCollectionWithRoyaltyTestTypes.CallMethodParams<"totalSupply">
    ): Promise<
      NFTCollectionWithRoyaltyTestTypes.CallMethodResult<"totalSupply">
    > => {
      return callMethod(
        NFTCollectionWithRoyaltyTest,
        this,
        "totalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    nftByIndex: async (
      params: NFTCollectionWithRoyaltyTestTypes.CallMethodParams<"nftByIndex">
    ): Promise<
      NFTCollectionWithRoyaltyTestTypes.CallMethodResult<"nftByIndex">
    > => {
      return callMethod(
        NFTCollectionWithRoyaltyTest,
        this,
        "nftByIndex",
        params,
        getContractByCodeHash
      );
    },
    royaltyAmount: async (
      params: NFTCollectionWithRoyaltyTestTypes.CallMethodParams<"royaltyAmount">
    ): Promise<
      NFTCollectionWithRoyaltyTestTypes.CallMethodResult<"royaltyAmount">
    > => {
      return callMethod(
        NFTCollectionWithRoyaltyTest,
        this,
        "royaltyAmount",
        params,
        getContractByCodeHash
      );
    },
    mint: async (
      params: NFTCollectionWithRoyaltyTestTypes.CallMethodParams<"mint">
    ): Promise<NFTCollectionWithRoyaltyTestTypes.CallMethodResult<"mint">> => {
      return callMethod(
        NFTCollectionWithRoyaltyTest,
        this,
        "mint",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<
    Calls extends NFTCollectionWithRoyaltyTestTypes.MultiCallParams
  >(
    calls: Calls
  ): Promise<NFTCollectionWithRoyaltyTestTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      NFTCollectionWithRoyaltyTest,
      this,
      calls,
      getContractByCodeHash
    )) as NFTCollectionWithRoyaltyTestTypes.MultiCallResults<Calls>;
  }
}
