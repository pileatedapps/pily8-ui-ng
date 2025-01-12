import { User} from '@auth0/auth0-angular';

export interface Pily8UserModel extends User {
  user_id: string;
  roles: string[];
}
