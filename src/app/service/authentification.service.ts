export class AuthentificationService
{
  isAuth:boolean;

  constructor()
  {
    this.isAuth=false;
  }

  connect()
  {
    this.isAuth=true;
  }
  disconnect()
  {
    this.isAuth=false;
  }
}