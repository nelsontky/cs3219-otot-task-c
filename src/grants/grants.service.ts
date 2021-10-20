import { Injectable } from "@nestjs/common";
import { AccessControl } from "accesscontrol";

@Injectable()
export class GrantsService {
  getGrants() {
    // this information can be from a database
    const grantsObject = {
      user: {
        cat: {
          "read:any": ["*"],
        },
      },
      admin: {
        $extend: ["user"],
        cat: {
          "create:any": ["*"],
        },
      },
    };

    return new AccessControl(grantsObject);
  }
}
