import { Injectable } from "@nestjs/common";
import { AccessControl } from "accesscontrol";
import { Role } from "src/auth/role.enum";

@Injectable()
export class GrantsService {
  getGrants() {
    // this information can be from a database
    const grantsObject = {
      [Role.User]: {
        cat: {
          "read:any": ["*"],
        },
      },
      [Role.Admin]: {
        $extend: [Role.User],
        cat: {
          "create:any": ["*"],
        },
      },
    };

    return new AccessControl(grantsObject);
  }
}
