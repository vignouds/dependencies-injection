import Formation from '../Model/Formation';

export default class FormationApi {
    fetchFormation():Promise<Array<Formation>> {
      return new Promise((resolve)=>{
        setTimeout(()=> {
          resolve([
            new Formation('Module Angular'),
            new Formation('Module JavaScript'),
            new Formation('Module TypeScript')
          ])
        }, 2000);
      });
    }
}
