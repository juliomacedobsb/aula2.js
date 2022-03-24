console.log ('eu sou script js')
// var type boolean true - false
var enabled = false;
console.log (enabled)
var test = 'false'
console.log ('false')
//array - index
var names = ['julio', 'xepa', 'gustavo', 'viniçao']; // alunos antigos

console.log (names)
console.log (names[2])

names.push('woody') //aluno novo
console.log (names.length)

var teams = new Array(); 
teams.push ('brazil')
console.log(teams)

//if -  condicional

function testName(names) {
    if (names.length > 10) {
         return 'nome grande'
        } else {
            return 'nome pequeno'
        }}
        function isEqual (names){
        if (names == 'julio'){
            return 'e igual a julio'
        } else if (names == 'maria'){
        return ' e igual a maria'}
        else { return 'nao e igual a nada' }}
        

        console.log(testName('julio'))
        console.log(isEqual('marcos'))
        
    

