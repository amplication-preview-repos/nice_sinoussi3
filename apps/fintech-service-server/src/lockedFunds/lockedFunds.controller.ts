import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LockedFundsService } from "./lockedFunds.service";
import { LockedFundsControllerBase } from "./base/lockedFunds.controller.base";

@swagger.ApiTags("lockedFunds")
@common.Controller("lockedFunds")
export class LockedFundsController extends LockedFundsControllerBase {
  constructor(protected readonly service: LockedFundsService) {
    super(service);
  }
}
