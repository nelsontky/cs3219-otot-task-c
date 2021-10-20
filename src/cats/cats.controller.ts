import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { PermissionsGuard } from "../auth/guards/permissions.guard";
import { Roles } from "../auth/decorators/roles.decorator";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { Cat } from "./interfaces/cat.interface";

@UseGuards(PermissionsGuard)
@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles({ action: "create:any", resource: "cat" })
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  @Roles({ action: "read:any", resource: "cat" })
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
