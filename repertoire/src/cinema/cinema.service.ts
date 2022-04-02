import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Cinema } from './cinema.model';
import { CreateCinemaDto } from './dto/create-cinema.dto';

@Injectable()
export class CinemaService {
  private cinemas: Cinema[] = [];

  getAllCinemas(): Cinema[] {
    return this.cinemas;
  }

  createCinema(createCinemaDto: CreateCinemaDto) {
    const { name, location, email, mobile } = createCinemaDto;

    const cinema: Cinema = {
      id: uuid(),
      name,
      location,
      email,
      mobile,
    };

    this.cinemas.push(cinema);
    return cinema;
  }
}
