import { InputType, Field } from '@nestjs/graphql';
// import { Pet } from 'src/pets/pet.entity';

@InputType()
export class CreateOwnerInput {
  @Field()
  name: string;
}
