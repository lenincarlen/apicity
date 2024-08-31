import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { PadronModule } from './padron/padron.module';

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

  
  PadronModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
