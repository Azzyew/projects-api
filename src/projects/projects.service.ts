import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = this.projectsRepository.create(createProjectDto);

    return await this.projectsRepository.save(project);
  }

  async findAll() {
    return await this.projectsRepository.find();
  }

  async findOne(id: number) {
    return await this.projectsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne(id);
    if (!project) {
      throw new NotFoundException();
    }

    Object.assign(project, updateProjectDto);

    return await this.projectsRepository.save(project);
  }

  async remove(id: number) {
    const project = await this.findOne(id);
    if (!project) {
      throw new NotFoundException();
    }

    return await this.projectsRepository.remove(project);
  }
}
