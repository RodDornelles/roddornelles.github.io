class Aluno{


    //o construtor instancia um objeto do tipo Aluno
    constructor(nome,matricula,notas){
        //os parametros se tornam os atributos da classe
        this.nome=nome
        this.matricula=matricula
        this.notas=notas
    }

    calcularMedia(){
        let soma=0
        this.notas.forEach( 
            function(item){
                soma=soma+item
            }          
        )
        return soma / this.notas.length
    }


}