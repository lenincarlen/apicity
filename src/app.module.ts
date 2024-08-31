import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { PadronModule } from './padron/padron.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { RecintoModule } from './recinto/recinto.module';
import { SectorParajeModule } from './sector-paraje/sector-paraje.module';
import { MunicipioModule } from './municipio/municipio.module';
import { ColegioModule } from './colegio/colegio.module';
import { CiudadSeccionModule } from './ciudad-seccion/ciudad-seccion.module';
import { CircunscripcionModule } from './circunscripcion/circunscripcion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Elimina el puerto de aquí
      port: 3306, // Este es el lugar correcto para el puerto
      username: 'apiDB',
      password: '12345678',
      database: 'apiDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    
    }),

  
  UsersModule,

  RecintoModule,
  SectorParajeModule,
  MunicipioModule,
  ColegioModule,
  CiudadSeccionModule,
  PadronModule,
  ProvinciaModule,
 CircunscripcionModule,

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
