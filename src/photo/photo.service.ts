import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async add(): Promise<Photo> {
    return await this.photoRepository.save({
      id: 1,
      name: 'photo',
      description: 'photo',
      filename: 'name',
      views: 0,
      isPublished: false,
    });
  }
}
