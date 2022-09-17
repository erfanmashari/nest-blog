import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
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

  @Query(() => Pet)
  async pet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return await this.petsService.findOne(id);
  }

  @Mutation(() => Pet)
  async addPet(@Args('createPetDto') createPetDto: CreatePetDto): Promise<Pet> {
    return await this.petsService.create(createPetDto);
  }
}
