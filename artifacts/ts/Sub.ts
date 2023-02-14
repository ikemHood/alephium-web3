/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  web3,
  Address,
  Contract,
  ContractState,
  node,
  binToHex,
  TestContractResult,
  Asset,
  HexString,
  ContractFactory,
  contractIdFromAddress,
  ONE_ALPH,
  groupOfAddress,
  fromApiVals,
  subscribeToEvents,
  SubscribeOptions,
  Subscription,
  EventSubscription,
  randomTxId,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeEventsFromContract,
  subscribeContractCreatedEvent,
  subscribeContractDestroyedEvent,
  subscribeContractEvent,
  subscribeAllEvents,
  testMethod,
  callMethod,
  fetchContractState,
  decodeContractCreatedEvent,
  decodeContractDestroyedEvent,
  ContractCreatedEvent,
  ContractDestroyedEvent,
} from "@alephium/web3";
import { default as SubContractJson } from "../sub/sub.ral.json";

export namespace SubTypes {
  export type Fields = {
    result: bigint;
  };

  export type State = ContractState<Fields>;

  export type SubEvent = ContractEvent<{ x: bigint; y: bigint }>;
}

class Factory extends ContractFactory<SubInstance, SubTypes.Fields> {
  at(address: string): SubInstance {
    return new SubInstance(address);
  }

  async testSubMethod(
    params: TestContractParams<SubTypes.Fields, { array: [bigint, bigint] }>
  ): Promise<TestContractResult<bigint>> {
    return testMethod(this, "sub", params);
  }
}

export const Sub = new Factory(
  Contract.fromJson(
    SubContractJson,
    "",
    "513645f5c95a28d55a51070f3d5c51edbda05a98f46b23cad59952e2ee4846a1"
  )
);

export class SubInstance {
  readonly address: Address;
  readonly contractId: string;
  readonly groupIndex: number;

  constructor(address: Address) {
    this.address = address;
    this.contractId = binToHex(contractIdFromAddress(address));
    this.groupIndex = groupOfAddress(address);
  }

  async fetchState(): Promise<SubTypes.State> {
    return fetchContractState(Sub, this);
  }

  subscribeContractCreatedEvent(
    options: SubscribeOptions<ContractCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractCreatedEvent(this, options, fromCount);
  }

  subscribeContractDestroyedEvent(
    options: SubscribeOptions<ContractDestroyedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractDestroyedEvent(this, options, fromCount);
  }

  subscribeSubEvent(
    options: SubscribeOptions<SubTypes.SubEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Sub.contract,
      this,
      options,
      "Sub",
      fromCount
    );
  }

  subscribeAllEvents(
    options: SubscribeOptions<
      SubTypes.SubEvent | ContractCreatedEvent | ContractDestroyedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeAllEvents(Sub.contract, this, options, fromCount);
  }

  async callSubMethod(
    params: CallContractParams<{ array: [bigint, bigint] }>
  ): Promise<CallContractResult<bigint>> {
    return callMethod(Sub, this, "sub", params);
  }
}
