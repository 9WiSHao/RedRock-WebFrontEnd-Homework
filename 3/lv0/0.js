let reimu = {
    uname: 'Hakurei Reimu',
    species: 'human',
    sex: 'female',
    ability: 'Ability to Float',
}

let youmu = new Object();
youmu.uname = 'Konpaku Youmu';
youmu.species = 'Half-human Half-phantom';
youmu.sex = 'female';
youmu.ability = 'Handling sword techniques';

function Obj(uname,species,sex,ability) {
    this.name = uname;
    this.species = species;
    this.sex = sex;
    this.ability = ability;
}
new Obj('Kirisame Marisa','Human','female','Using magic')