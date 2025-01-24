import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParrainageServiceBase } from "./base/parrainage.service.base";

@Injectable()
export class ParrainageService extends ParrainageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
