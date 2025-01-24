import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecrueServiceBase } from "./base/recrue.service.base";

@Injectable()
export class RecrueService extends RecrueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
