const loki = require('lokijs');

export let DB = new loki("./ludus.db.json",{
    autoload:true,
    autosave:true,
    autosaveInterval:4000
});