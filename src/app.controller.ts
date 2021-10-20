import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { LocalAuthGuard } from "./auth/guards/local-auth.guard";
import { PermissionsGuard } from "./auth/guards/permissions.guard";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(PermissionsGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
