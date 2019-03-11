import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DepartmentDataService{
    private updateObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private update$ = this.updateObservable.asObservable();
    private departmentObservable: BehaviorSubject<Department> = new BehaviorSubject<Department>({});
    private data$ = this.departmentObservable.asObservable();


    constructor(){
        this.updateObservable.next(false);
    }
    get isUpdate(){
        
        return this.update$;
    }    

    setUpdate(status: boolean){
        this.updateObservable.next(status);
    }

    get department(){
        return this.data$;
    }

    setDepartment(department: Department){
        this.departmentObservable.next(department);
    }
}