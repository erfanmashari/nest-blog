import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  snippet: string;

  @Column()
  body: string;
}
