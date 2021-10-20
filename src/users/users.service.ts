import { Injectable } from "@nestjs/common";
import { Role } from "../auth/role.enum";

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: "nelson",
        password: "password",
        roles: [Role.User],
      },
      {
        userId: 2,
        username: "admin",
        password: "password",
        roles: [Role.Admin],
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
