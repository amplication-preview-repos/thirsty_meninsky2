import * as graphql from "@nestjs/graphql";
import { ContactParraineResolverBase } from "./base/contactParraine.resolver.base";
import { ContactParraine } from "./base/ContactParraine";
import { ContactParraineService } from "./contactParraine.service";

@graphql.Resolver(() => ContactParraine)
export class ContactParraineResolver extends ContactParraineResolverBase {
  constructor(protected readonly service: ContactParraineService) {
    super(service);
  }
}
