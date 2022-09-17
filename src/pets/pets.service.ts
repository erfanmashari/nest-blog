import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {}

  async findAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const newPet = this.petRepository.create(createPetDto);

    return await this.petRepository.save(newPet);
  }
}
