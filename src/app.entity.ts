import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class App {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public name: string;

  @Column({ nullable: true })
  public type: string;

  @Column({ nullable: true })
  public number: number;
}
