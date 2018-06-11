export default class Formation {
  private _nom: string;
  private _description:string;

  constructor(nom: string, description?:string,) {
    this._nom = nom;
    if (description){
      this._description = description;
    }
  }

  get nom(): string{
    return this._nom
  }

  set nom(nom:string){
    this._nom = nom;
  }

  get description():string {
    return this._description;
  }

  set description(description:string){
    this._description = description;
  }
}
