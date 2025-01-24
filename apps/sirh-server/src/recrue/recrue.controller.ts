import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecrueService } from "./recrue.service";
import { RecrueControllerBase } from "./base/recrue.controller.base";

@swagger.ApiTags("recrues")
@common.Controller("recrues")
export class RecrueController extends RecrueControllerBase {
  constructor(protected readonly service: RecrueService) {
    super(service);
  }
}
