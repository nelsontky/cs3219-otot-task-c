import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { CatsModule } from "./cats/cats.module";
import { UsersModule } from "./users/users.module";
import { GrantsModule } from "./grants/grants.module";
import { AppController } from "./app.controller";

@Module({
  imports: [AuthModule, CatsModule, UsersModule, GrantsModule],
  controllers: [AppController],
})
export class AppModule {}
