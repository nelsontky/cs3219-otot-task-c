import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { RoleQueryInfo } from "../decorators/roles.decorator";
import { GrantsService } from "src/grants/grants.service";
import { Role } from "../role.enum";

@Injectable()
export class PermissionsGuard extends AuthGuard("jwt") {
  constructor(
    private readonly reflector: Reflector,
    private readonly grantsService: GrantsService
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const roles = this.reflector.get<RoleQueryInfo>(
      "roles",
      context.getHandler()
    );
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const grants = this.grantsService.getGrants();
    const hasRole = () =>
      user.roles.some(
        (role: Role) =>
          grants.permission({
            role,
            ...roles,
          }).granted
      );

    return user && user.roles && hasRole();
  }
}
