import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateGenreDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'name is too short' })
  @MaxLength(20, { message: 'name is too long' })
  public name: string;
}
