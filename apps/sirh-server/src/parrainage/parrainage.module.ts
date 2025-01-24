import { Module } from "@nestjs/common";
import { ParrainageModuleBase } from "./base/parrainage.module.base";
import { ParrainageService } from "./parrainage.service";
import { ParrainageController } from "./parrainage.controller";
import { ParrainageResolver } from "./parrainage.resolver";

@Module({
  imports: [ParrainageModuleBase],
  controllers: [ParrainageController],
  providers: [ParrainageService, ParrainageResolver],
  exports: [ParrainageService],
})
export class ParrainageModule {}
