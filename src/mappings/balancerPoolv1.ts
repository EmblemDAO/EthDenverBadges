import { LOG_JOIN, LOG_SWAP } from "../../generated/templates/Pool/Pool";
import { processPoolJoinv1, processPoolSwapv1 } from "../Balancer/poolManager";

export function handleJoinPoolv1(event: LOG_JOIN): void {
  processPoolJoinv1(event);
}

export function handleSwapv1(event: LOG_SWAP): void {
  processPoolSwapv1(event);
}