export class User {

  static fromJson(json: any): User {
    return new User(
      +json.id,
      json.name,
      json.nick,
      json.avatar,
      +json.latitude,
      +json.longitude,
      json.email
    );
  }

  static fromJsonToList(json: any[]): User[] {
    return json.reduce((users: User[], user: any) => {
      users.push(User.fromJson(user));
      return users;
    }, []);
  }

  constructor(
    public id: number,
    public name: string,
    public nick: string,
    public avatar: string,
    public latitude: number,
    public longitude: number,
    public email: string) { }

}
