import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParrainageService } from "./parrainage.service";
import { ParrainageControllerBase } from "./base/parrainage.controller.base";

@swagger.ApiTags("parrainages")
@common.Controller("parrainages")
export class ParrainageController extends ParrainageControllerBase {
  constructor(protected readonly service: ParrainageService) {
    super(service);
  }
}
