import { Module } from "@nestjs/common";
import { LockedFundsModuleBase } from "./base/lockedFunds.module.base";
import { LockedFundsService } from "./lockedFunds.service";
import { LockedFundsController } from "./lockedFunds.controller";
import { LockedFundsResolver } from "./lockedFunds.resolver";

@Module({
  imports: [LockedFundsModuleBase],
  controllers: [LockedFundsController],
  providers: [LockedFundsService, LockedFundsResolver],
  exports: [LockedFundsService],
})
export class LockedFundsModule {}
