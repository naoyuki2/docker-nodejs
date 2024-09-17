import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('varchar')
  @IsString()
  @IsNotEmpty()
  name!: string

  @Column({
    type: 'varchar',
    unique: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @Column('varchar')
  @IsString()
  @IsNotEmpty()
  password!: string

  @Column('varchar')
  @IsString()
  telephone!: string

  @Column('varchar')
  @IsString()
  address!: string

  @Column('varchar')
  @IsString()
  test!: string
}
