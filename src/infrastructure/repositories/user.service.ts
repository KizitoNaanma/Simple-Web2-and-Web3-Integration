import { User } from '../../domain/entities/user.model';
import { IUser } from '../../domain/interfaces/user.interface';

export class UserService {
  static async findAll(): Promise<IUser[]> {
    return User.find().exec();
  }

  static async create(data: Partial<IUser>): Promise<IUser> {
    const newUser = new User(data);
    return newUser.save();
  }
}
