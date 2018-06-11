import {Injectable} from '@angular/core';
import Formation from '../Model/Formation';
import FormationApi from './FormationApi';

@Injectable()
export default class FormationService {

    constructor(private formationApi:FormationApi){}

    getFormation(): Promise<Array<Formation>> {
      return this.formationApi.fetchFormation();
    }
}
