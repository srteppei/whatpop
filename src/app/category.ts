export class Category {

  static fromJsonToList(json: any[]): Category[] {
    return json.reduce((categories: Category[], category: any) => {
      categories.push(Category.fromJson(category));
      return categories;
    }, []);
  }

  static fromJson(json: any): Category {
    return new Category(
      +json.id,
      json.name
    );
  }

  constructor(
    public id: number,
    public name: string) { }

}
