import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from '../Microsservices/notifications/notifications.module';
import { ReportsModule } from '../Microsservices/reports/reports.module';

@Module({
  imports: [EventsModule, UsersModule, NotificationsModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
