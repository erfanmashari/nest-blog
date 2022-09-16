import { Resolver, Query } from '@nestjs/graphql';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet])
  async findAll(): Promise<Pet[]> {
    return await this.petsService.findAll();
  }
}
