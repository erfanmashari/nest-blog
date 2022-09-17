import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet])
  async pets(): Promise<Pet[]> {
    return await this.petsService.findAll();
  }

  @Mutation(() => Pet)
  async addPet(@Args('createPetDto') createPetDto: CreatePetDto): Promise<Pet> {
    return await this.petsService.create(createPetDto);
  }
}
