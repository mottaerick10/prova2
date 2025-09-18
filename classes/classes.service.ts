import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassEntity } from './classes.entity';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(ClassEntity)
    private classesRepository: Repository<ClassEntity>,
  ) {}

  findAll() {
    return this.classesRepository.find();
  }

  findOne(id: number) {
    return this.classesRepository.findOneBy({ id });
  }

  create(classe: ClassEntity) {
    return this.classesRepository.save(classe);
  }

  update(id: number, classe: ClassEntity) {
    return this.classesRepository.update(id, classe);
  }

  remove(id: number) {
    return this.classesRepository.delete(id);
  }
}
