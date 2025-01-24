import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactParraineServiceBase } from "./base/contactParraine.service.base";

@Injectable()
export class ContactParraineService extends ContactParraineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
