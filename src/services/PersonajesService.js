import Global from "@/Global"
import axios from "axios"

export default class PersonajesService{

    getPersonajes(){
        return new Promise(function(resolve){
            let personajes = [];
            let request = "api/personajes"
            axios.get(Global.urlApi + request).then(response =>{
                personajes = response.data
                resolve(personajes)
            })
           }) 
    }

    getPersonaje(id){
        return new Promise(function(resolve){
            let personaje = [];
            let request = "api/personajes/" + id
            axios.get(Global.urlApi + request).then(response =>{
                personaje = response.data
                resolve(personaje)
            })
           }) 
    }
    postPersonaje(personaje){
        return new Promise(function(resolve){
            let request = "api/personajes"
            axios.post(Global.urlApi + request, personaje).then(() =>{
                resolve()
            })
        })
    }

    putPersonaje(idpersonaje,idserie){
        return new Promise(function(resolve){
            let request = "api/personajes/" + idpersonaje + "/" + idserie
            axios.put(Global.urlApi + request).then(() =>{
                resolve()
            })
        })
    }
}