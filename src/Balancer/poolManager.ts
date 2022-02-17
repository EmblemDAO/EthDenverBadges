import { PoolCreated } from "../../generated/WeightedPoolFactory/WeightedPoolFactory";
import { LOG_NEW_POOL } from '../../generated/Factory/Factory'
import { createOrLoadBalancerUser } from "./balancerModels";
import { incrementProgress } from "../Emblem/metricProgress";
import { BADGE_METRIC_BALANCER_POOLS_CREATED } from "../Emblem/metrics";
import { EarnedBadgeEventData } from "../Emblem/emblemModels";

export function processPoolCreated(event: PoolCreated): void {
  const eventData = new EarnedBadgeEventData(event);
  const userAddressString = event.transaction.from.toHexString();
  const balancerUser = createOrLoadBalancerUser(userAddressString);
  balancerUser.poolsCreated = balancerUser.poolsCreated + 1;
  balancerUser.poolsCreatedv2 = balancerUser.poolsCreatedv2 + 1;
  balancerUser.save();
  
  incrementProgress(userAddressString, BADGE_METRIC_BALANCER_POOLS_CREATED, eventData);
}

export function processPoolCreatedv1(event: LOG_NEW_POOL): void {
  const eventData = new EarnedBadgeEventData(event);
  const userAddressString = event.transaction.from.toHexString();
  const balancerUser = createOrLoadBalancerUser(userAddressString);
  balancerUser.poolsCreated = balancerUser.poolsCreated + 1;
  balancerUser.poolsCreatedv1 = balancerUser.poolsCreatedv1 + 1;
  balancerUser.save();

  incrementProgress(userAddressString, BADGE_METRIC_BALANCER_POOLS_CREATED, eventData);
}