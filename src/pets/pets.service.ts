import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { OwnersService } from 'src/owners/owners.service';
import { Owner } from 'src/owners/entities/owner.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private ownerService: OwnersService,
  ) {}

  async findAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async findOne(id: number): Promise<Pet> {
    return await this.petRepository.findOneByOrFail({ id });
  }

  async getOwner(ownerId: number): Promise<Owner> {
    return this.ownerService.findOne(ownerId);
  }

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const newPet = this.petRepository.create(createPetDto);

    return await this.petRepository.save(newPet);
  }
}
