import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { Presences } from './entities/presences.entity';
import { Schedule } from './entities/schedule.entity';
import { Turma } from './entities/turmas.entity';

@Injectable()
export class PresencesService {

  constructor(
    @InjectRepository(Presences)
    private presencesRepository: Repository<Presences>,

    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,

    @InjectRepository(Turma)
    private classRepository: Repository<Turma>,
  ) { }

  async findAll(): Promise<Presences[]> {
    let presences = await this.presencesRepository.find({relations: ['alunos', 'turmas', 'aulas']});
    return presences
  }

  async findAllS(): Promise<Schedule[]> {
    let schedules = await this.scheduleRepository.find({relations: ['turmas','professors']});
    return schedules
  }

  async findAllT(): Promise<Turma[]> {
    let turmas = await this.classRepository.find({relations: []});
    return turmas
  }

  async create(userId: number, body: any) {
    let presences = await this.presencesRepository.findOne({where: {id: userId}, relations: ['turmas', 'aulas', 'alunos']});
    if (!presences) {
      await this.presencesRepository.save(this.presencesRepository.create(body as DeepPartial<Presences>));
    } else {
      throw new HttpException('Presença já cadastrado', 406)
    }
  }

  async createS(userId: number, body: any) {
    let aulas = await this.scheduleRepository.findOne({where: {id: userId}, relations: ['turmas', 'professors']});
    if (!aulas) {
      await this.scheduleRepository.save(this.scheduleRepository.create(body as DeepPartial<Schedule>));
    } else {
      throw new HttpException('Aula já cadastrada', 406)
    }
  }

  async createT(userId: number, body: any) {
    let turma = await this.classRepository.findOne({where: {id: userId}, relations: []});
    if (!turma) {
      await this.classRepository.save(this.classRepository.create(body as DeepPartial<Turma>));
    } else {
      throw new HttpException('Turma já cadastrada', 406)
    }
  }

  async findOne(userId: number): Promise<Presences> {
    let presences = await this.presencesRepository.findOne({where: {id: userId}, relations: ['turmas', 'aulas', 'alunos']});
    return presences;
  }

  async findOneS(userId: number): Promise<Schedule> {
    let aulas = await this.scheduleRepository.findOne({where: {id: userId}, relations: ['turmas', 'professors']});
    return aulas;
  }

  async findOneT(userId: number): Promise<Turma> {
    let turmas = await this.classRepository.findOne({where: {id: userId}, relations: ['turmas']});
    return turmas;
  }

  async update(userId:number, body:any) {
    let presences = await this.presencesRepository.findOne({where: {id: userId}, relations:['turmas', 'aulas', 'alunos']});
    if (presences) {
        presences = body
      return this.presencesRepository.save(presences);
    }
  }

  async updateS(userId:number, body:any) {
    let aulas = await this.scheduleRepository.findOne({where: {id: userId}, relations:['turmas', 'professors']});
    if (aulas) {
        aulas = body
      return this.scheduleRepository.save(aulas);
    }
  }

  async updateT(userId:number, body:any) {
    let turmas = await this.classRepository.findOne({where: {id: userId}, relations:['turmas']});
    if (turmas) {
        turmas = body
      return this.classRepository.save(turmas);
    }
  }

    async remove(userId: number) {
      let presences = await this.presencesRepository.findOne({where: {id: userId}, relations: ['turmas', 'aulas', 'alunos']});
      return this.presencesRepository.delete(userId)
    }

    async removeS(userId: number) {
        let aulas = await this.scheduleRepository.findOne({where: {id: userId}, relations: ['turmas', 'professors']});
        return this.scheduleRepository.delete(userId)
      }

    async removeT(userId: number) {
      let turmas = await this.classRepository.findOne({where: {id: userId}, relations: ['turmas']});
      return this.classRepository.delete(userId)
    }

}
