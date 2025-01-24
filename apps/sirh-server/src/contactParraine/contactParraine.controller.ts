import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactParraineService } from "./contactParraine.service";
import { ContactParraineControllerBase } from "./base/contactParraine.controller.base";

@swagger.ApiTags("contactParraines")
@common.Controller("contactParraines")
export class ContactParraineController extends ContactParraineControllerBase {
  constructor(protected readonly service: ContactParraineService) {
    super(service);
  }
}
