import { BigInt } from "@graphprotocol/graph-ts";
import { createOrLoadBadgeDefinition } from "../Emblem/emblemModels";
import {
  BADGE_METRIC_BALANCER_POOLS_CREATED
} from "./metrics";

// In order for retroactive badge drops to cover the entire subgraph
// history, this function needs to be called from the first event.
export function generateGenesisBadgeDefinitions(): void {
  //////// INDEXER BADGES ////////

  createOrLoadBadgeDefinition(
    "Swimmer I",
    "Create a balancer pool",
    BADGE_METRIC_BALANCER_POOLS_CREATED,
    BigInt.fromI32(1),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Swimmer II",
    "Create a balancer pool",
    BADGE_METRIC_BALANCER_POOLS_CREATED,
    BigInt.fromI32(5),
    BigInt.fromI32(1),
    ""
  );
  createOrLoadBadgeDefinition(
    "Swimmer III",
    "Create a balancer pool",
    BADGE_METRIC_BALANCER_POOLS_CREATED,
    BigInt.fromI32(10),
    BigInt.fromI32(1),
    ""
  );
}
