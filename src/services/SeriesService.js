import Global from "@/Global";
import axios from "axios";

export default class SeriesService{
    getSeries(){
       return new Promise(function(resolve){
        let series = [];
        let request = "api/series"
        axios.get(Global.urlApi + request).then(response =>{
            series = response.data
            resolve(series)
        })
       }) 
    }
    getSerie(id){
        return new Promise(function(resolve){
         let serie = [];
         let request = "api/series/" + id
         axios.get(Global.urlApi + request).then(response =>{
             serie = response.data
             resolve(serie)
         })
        }) 
     }

     getPersonajesSerie(idSerie){
        return new Promise(function(resolve){
         let personajes = [];
         let request = "api/series/personajesserie/"+ idSerie
         axios.get(Global.urlApi + request).then(response =>{
            personajes = response.data
             resolve(personajes)
         })
        }) 
     }
}