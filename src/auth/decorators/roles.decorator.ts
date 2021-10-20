import { SetMetadata } from "@nestjs/common";
import { IQueryInfo } from "accesscontrol";

export type RoleQueryInfo = Omit<IQueryInfo, "role">;

export const Roles = (roles: RoleQueryInfo) => SetMetadata("roles", roles);
