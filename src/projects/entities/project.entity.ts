import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  company: string;

  @Column()
  deadline: string;

  @Column({ type: 'float' })
  totalPrice: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'boolean' })
  needsDeploy: boolean;
}
