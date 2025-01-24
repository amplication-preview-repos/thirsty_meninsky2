import { Module } from "@nestjs/common";
import { RecrueModuleBase } from "./base/recrue.module.base";
import { RecrueService } from "./recrue.service";
import { RecrueController } from "./recrue.controller";
import { RecrueResolver } from "./recrue.resolver";

@Module({
  imports: [RecrueModuleBase],
  controllers: [RecrueController],
  providers: [RecrueService, RecrueResolver],
  exports: [RecrueService],
})
export class RecrueModule {}
