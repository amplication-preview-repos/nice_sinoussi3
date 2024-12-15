import * as graphql from "@nestjs/graphql";
import { LockedFundsResolverBase } from "./base/lockedFunds.resolver.base";
import { LockedFunds } from "./base/LockedFunds";
import { LockedFundsService } from "./lockedFunds.service";

@graphql.Resolver(() => LockedFunds)
export class LockedFundsResolver extends LockedFundsResolverBase {
  constructor(protected readonly service: LockedFundsService) {
    super(service);
  }
}
