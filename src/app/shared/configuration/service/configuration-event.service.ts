import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ConfigurationEventService{
    list: any[] = [];

    constructor(){

    }

    addObserver(observer: any){
        this.list.push(observer);
    }

    removeObservere(observer: any){
        this.list.splice(this.list.indexOf(observer),1);
    }

    notify(){
        this.list.forEach(o => {
            o.notify();
        });
    }
}