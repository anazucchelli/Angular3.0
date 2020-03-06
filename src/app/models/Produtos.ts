import { Grupo } from './Grupo';

export class Produtos{
    
    constructor(
        public cod: number, 
        public desc: string, 
        public regAnvisa: string, 
        public controlado: boolean, 
        public codGrupo: number
    ){  };

    dadosGrupo() {
        let codCatego = this.codGrupo;
        let _grupos: Grupo[] = [] 
    }
}