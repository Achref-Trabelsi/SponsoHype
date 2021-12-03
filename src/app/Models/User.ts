export class User{
  id: number;
  name: string;
  email: string;
  role_id: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.role_id = 0;
  }
}
