import { BadgeMetric } from "../../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts/index";


export const BADGE_METRIC_BALANCER_POOLS_CREATED = "BALANCER_POOLS_CREATED";


export function generateBadgeMetrics(): void {
  createBadgeMetric(0, BADGE_METRIC_BALANCER_POOLS_CREATED);
}

function createBadgeMetric(metricNumber: i32, metricName: string): void {
  const badgeMetricId = BigInt.fromI32(metricNumber).toString();
  let badgeMetric = BadgeMetric.load(badgeMetricId);
  if (badgeMetric == null) {
    badgeMetric = new BadgeMetric(badgeMetricId);
    badgeMetric.metricNumber = metricNumber;
    badgeMetric.metricName = metricName;
    badgeMetric.save();
  }
}
