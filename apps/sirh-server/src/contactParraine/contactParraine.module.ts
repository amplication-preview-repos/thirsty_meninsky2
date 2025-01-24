import { Module } from "@nestjs/common";
import { ContactParraineModuleBase } from "./base/contactParraine.module.base";
import { ContactParraineService } from "./contactParraine.service";
import { ContactParraineController } from "./contactParraine.controller";
import { ContactParraineResolver } from "./contactParraine.resolver";

@Module({
  imports: [ContactParraineModuleBase],
  controllers: [ContactParraineController],
  providers: [ContactParraineService, ContactParraineResolver],
  exports: [ContactParraineService],
})
export class ContactParraineModule {}
