import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    { name: "Default Cat 1", age: 2, breed: "Siamese" },
    { name: "Default Cat 2", age: 10, breed: "Persian" },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
