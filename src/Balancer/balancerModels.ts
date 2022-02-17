import { Address } from "@graphprotocol/graph-ts";
import { BalancerUser } from "../../generated/schema";
import { createOrLoadBadgeUser } from "../Emblem/emblemModels";

export function createOrLoadBalancerUser(address: string): BalancerUser {
  let user = BalancerUser.load(address);
  if (user == null) {
    user = new BalancerUser(address);
    user.poolsCreated = 0;
    user.poolsCreatedv1 = 0;
    user.poolsCreatedv2 = 0;
    user.save();

    createOrLoadBadgeUser(address);
  }

  return user;
}