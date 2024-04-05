import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class DeleteGenreDTO {
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  public ids: number;
}
