import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";

@Injectable()

export class FakeBackendInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // Read Department 
        if(req.url.endsWith('/configuration/department') && req.method === 'GET'){
            let departments: Department [] = JSON.parse(localStorage.getItem('departments')) || [];

           return of(new HttpResponse({status: 200,body: departments}))
        }

        // Save Department 
        if(req.url.endsWith('/configuration/department') && req.method === 'POST'){
            let newDepartment = req.body;
            let departments: Department[]= JSON.parse(localStorage.getItem('departments')) || [];
            departments.push(newDepartment);

            localStorage.setItem('departments', JSON.stringify(departments));
            return of(new HttpResponse({status:201}));
        }
        
        // Read Division
        if(req.url.endsWith('configuration/division') && req.method === 'GET'){
            let divisions: Division [] = JSON.parse(localStorage.getItem('divisions')) || [];
            
            return of (new HttpResponse({status: 200, body: divisions}))
        }

         // Save Division
        if (req.url.endsWith('configuration/division') && req.method === 'POST'){
            let newDivision = req.body;
            let divisions: Division[] = JSON.parse(localStorage.getItem('divisions')) || [];
            divisions.push(JSON.parse(JSON.stringify(newDivision)));

            localStorage.setItem('divisions',JSON.stringify(divisions));
            return of(new HttpResponse({status: 201}));
        }

        // Read Grade
        if(req.url.endsWith('configuration/grade') && req.method === 'GET'){
           let grades: Grade[]= JSON.parse(localStorage.getItem('grades')) || [];
            return of(new HttpResponse({status: 200, body: grades}))
        }

        // Save Grade 
        if(req.url.endsWith('configuration/grade') && req.method === 'POST'){
            let newGrade = req.body;
            let grades: Grade[]= JSON.parse(localStorage.getItem('grades')) || [];
            grades.push(newGrade);

            localStorage.setItem('grades', JSON.stringify(grades));
            return of(new HttpResponse({status: 201}));
        }

         // Read Job Position
        if(req.url.endsWith('configuration/jobposition') && req.method === 'GET'){
            let jobPositions: JobPosition[] = JSON.parse(localStorage.getItem('jobPositions')) || [];
            
            return of(new HttpResponse({status:200, body: jobPositions}));
        }

        // Save Job Position
        if(req.url.endsWith('configuration/jobposition') && req.method === 'POST'){
            let newJobPosition = req.body;
            let jobPositions: JobPosition []= JSON.parse(localStorage.getItem('jobPositions')) || [];
            jobPositions.push(newJobPosition);

            localStorage.setItem('jobPositions', JSON.stringify(jobPositions));

            return of(new HttpResponse ({status: 201}));
        }

         // Read Job Titles
        if(req.url.endsWith('configuration/jobtitle') && req.method === 'GET'){
            let jobTitles: JobTitle[] = JSON.parse(localStorage.getItem('jobTitles')) || [];

            return of(new HttpResponse ({status: 200, body: jobTitles}));
        }

         // Save Job Titles
        if(req.url.endsWith('configuration/jobtitle') && req.method === 'POST'){
            let newJobTitle = req.body;
            let jobTitles: JobTitle[]= JSON.parse(localStorage.getItem('jobTitles')) || [];
            jobTitles.push(newJobTitle);

            localStorage.setItem('jobTitles', JSON.stringify(jobTitles))

            return of(new HttpResponse ({status: 201}));
        }

        // Read Job Type
        if(req.url.endsWith('configuration/jobtype') && req.method === 'GET'){
            let jobTypes: JobType[]= JSON.parse(localStorage.getItem('jobTypes')) || [];

            return of(new HttpResponse ({status: 200, body: jobTypes}));
        }

        // Save Job Type 
        if(req.url.endsWith('configuration/jobtype') && req.method === 'POST'){
            let newJobType= req.body;
            let jobTypes: JobType[]= JSON.parse(localStorage.getItem('jobTypes')) || [];
            jobTypes.push(newJobType);

            localStorage.setItem('jobTypes', JSON.stringify(jobTypes));
            return of(new HttpResponse ({status:201}));
        }

        // Read Office Location
        if(req.url.endsWith('configuration/officelocation') && req.method === 'GET'){
            // console.log('get method initiated');
            let officeLocations: OfficeLocation[] = JSON.parse(localStorage.getItem('officeLocations')) || [];

            return of(new HttpResponse ({status: 200, body: officeLocations}));
        }

        // Save OfficeLocation
        if(req.url.endsWith('configuration/officelocation') && req.method === 'POST'){
            // console.log('Post method executed');
            let newOfficeLocation= req.body;
            let officeLocations: OfficeLocation[]= JSON.parse(localStorage.getItem('officeLocations')) || [];
            officeLocations.push(newOfficeLocation);

            localStorage.setItem('officeLocations', JSON.stringify(officeLocations));
            return of(new HttpResponse ({status: 201}));
        }

        // Update Department 
        if(req.url.endsWith('configuration/department') && req.method === 'PUT'){
            let updateDepartment: Department = req.body;
            console.log('updating from fake backend');
            let departments:Department[] = JSON.parse(localStorage.getItem('departments'));
            departments.forEach( (department: Department, index) => {
                if(updateDepartment.department_code === department.department_code){
                    console.log("Updating of index ",index);
                    // remove old entry from array
                    departments.splice(index,1);

                    // add new entry that read from form
                    departments.push(updateDepartment);

                    // remove department entries from localstorage
                    localStorage.removeItem('departments');

                    // add newly updated entry to the localstorage
                    localStorage.setItem('departments', JSON.stringify(departments));
                    
                }
            });
        }
        // update division
        if(req.url.endsWith('configuration/division') && req.method === 'PUT'){
            let updateDivision: Division = req.body;
            console.log('updating from fake backend');
            let divisions: Division[] = JSON.parse(localStorage.getItem('divisions'));
            divisions.forEach((division: Division, index) =>{
                if(updateDivision.division_code === division.division_code){
                    console.log('Updating of index', index);
                    // remove old entry from array
                    divisions.splice(index,1);

                    // add new entry that read from form
                    divisions.push(updateDivision);

                    // remove division entries from localstorage
                    localStorage.removeItem('divisions');

                    // add newly update entry to the localstorage
                    localStorage.setItem('divisions', JSON.stringify(division));
                }
            });
        }

        // update job position
        if(req.url.endsWith('configuration/jobposition') && req.method === 'PUT'){
            let updateJobPosition: JobPosition  = req.body;
            console.log('updating from fake backend');
            let jobPositions: JobPosition[] = JSON.parse(localStorage.getItem('jobPositions'));
            jobPositions.forEach((jobPosition: JobPosition, index)=>{
                if(updateJobPosition.job_position_code === jobPosition.job_position_code){
                    console.log('Updating of index', index);
                    // remove old entry from array 
                    jobPositions.splice(index,1);

                    // add new entry that read from form 
                    jobPositions.push(updateJobPosition);

                    // remove job position entries from localstorage 
                    localStorage.removeItem('jobPositions');

                    // add newly updated entry to the localstorage
                    localStorage.setItem('jobPositions', JSON.stringify(jobPositions));
                }
            })
        }

        // update Grade 
        if(req.url.endsWith('configuration/grade') && req.method === 'PUT'){
            let updateGrade: Grade = req.body;
            console.log("Updating from fake backend");
            let grades: Grade[] = JSON.parse(localStorage.getItem('grades'));
            grades.forEach((grade: Grade, index)=>{
                if(updateGrade.grade_code === grade.grade_code){
                    console.log('Updating of index', index);
                    // remove old entry from array 
                    grades.splice(index,1);

                    // add new entry that read from form
                    grades.push(updateGrade);

                    // remove grade entries from localstorage
                    localStorage.removeItem('grades');

                    // add newly updated entry to the localstorage
                    localStorage.setItem('grades', JSON.stringify(grades));
                }
            })
        } 

        // Update Job Title
        if(req.url.endsWith('configuration/jobtitle') && req.method === 'PUT'){
            let updateTitle: JobTitle = req.body;
            console.log('updating from fake backend');
            let jobTitles: JobTitle[]= JSON.parse(localStorage.getItem('jobTitles'));
            jobTitles.forEach((jobTitle: JobTitle, index)=>{
                if(updateTitle.job_title_code === jobTitle.job_title_code){
                    console.log('Updating of index', index);
                    // remove old entry from array
                    jobTitles.splice(index,1);

                    // add new entry that read from form
                    jobTitles.push(updateTitle);

                    // remove Job title entries from localstorage
                    localStorage.removeItem('jobTitles');

                    // add newly updated entry to the localstorage
                    localStorage.setItem('jobTitles', JSON.stringify(jobTitles));
                }
            })
        }

        // Update Job Type
        if(req.url.endsWith('configuration/jobtype') && req.method === 'PUT'){
            let updateType: JobType = req.body;
            console.log("Updating from fake backend");
            let jobTypes: JobType[] = JSON.parse(localStorage.getItem('jobTypes'));
            jobTypes.forEach((jobType: JobType, index)=>{
                if(updateType.job_type_code === jobType.job_type_code){
                    console.log("updating of index", index);
                    // remove old entry from an array
                    jobTypes.splice(index,1);

                    // add new entry that read from form
                    jobTypes.push(updateType);

                    // remove job type entries from localstorage
                    localStorage.removeItem('jobTypes');

                    // add newyl updated entry to the localStorage 
                    localStorage.setItem('jobTypes', JSON.stringify(jobTypes));
                }
            })
        }

        // update office location
        if(req.url.endsWith('configuration/officelocation') && req.method === 'PUT'){
            let updateOfficeLocation: OfficeLocation = req.body;
            console.log("updating from fake backend");
            let officeLocations: OfficeLocation[] = JSON.parse(localStorage.getItem('officeLocations'));
            officeLocations.forEach((officeLocation: OfficeLocation, index)=>{
                if(updateOfficeLocation.office_location_code === officeLocation.office_location_code){
                    console.log("Updating of index", index);

                    // remove old entry from an array
                    officeLocations.splice(index,1);

                    // add new entry that read from form
                    officeLocations.push(updateOfficeLocation);

                    // remove offieclocation from localstorage
                    localStorage.removeItem('officeLocations');

                    // add newly updated entry to the local storage
                    localStorage.setItem('officeLocations', JSON.stringify(officeLocations));
                }
            })
        }


        // Delete Department 
        if(req.url.includes('configuration/department') && req.method === 'DELETE'){
            // get id from a url 
            console.log(req.url);
            let code = req.url.split("=")[1];            
            console.log('deleting from fake backend with code => ', code);
            let departments:Department[] = JSON.parse(localStorage.getItem('departments')) || [];
            departments.forEach((department: Department, index)=>{
                if(code === department.department_code){
                    console.log('Deleting of index', index);
                    departments.splice(index,1);
                    
                    localStorage.removeItem('departments');
                    localStorage.setItem('departments', JSON.stringify(departments));
                }
            })
        }

        // Delete Division
        if(req.url.includes('configuration/division') && req.method === 'DELETE'){
            console.log(req.url);
            let code=req.url.split("=")[1];
            console.log('deleteing from fake backend with code =>', code);
            let divisions: Division[] = JSON.parse(localStorage.getItem('divisions')) || [];
            divisions.forEach((division: Division, index)=>{
                if(code === division.division_code){
                    console.log('Deleting of index', index);
                    divisions.splice(index,1);

                    localStorage.removeItem('divisions');
                    localStorage.setItem('division', JSON.stringify(divisions));
                }
            })
        }

        // Delete Job Position
        if(req.url.includes('configuration/jobposition') && req.method === 'DELETE'){
            console.log(req.url);
            let code= req.url.split("=")[1];
            console.log('deleting from fake backend with code=>', code);
            let jobPositions: JobPosition[] = JSON.parse(localStorage.getItem('jobPositions')) || [];
            jobPositions.forEach((jobPosition: JobPosition, index)=>{
                if(code === jobPosition.job_position_code){
                    console.log('Deleting of index', index);
                    jobPositions.splice(index,1);

                    localStorage.removeItem('jobPositions');
                    localStorage.setItem('jobPositions', JSON.stringify(jobPositions));
                }
            })
        }

        // Delete Grage
        if(req.url.includes('configuration/grade') && req.method === 'DELETE'){
            console.log(req.url);
            let code= req.url.split("=")[1];
            console.log('deleting from fake backend with code=>', code);
            let grades: Grade[] = JSON.parse(localStorage.getItem('grades')) || [];
            grades.forEach((grade: Grade,index)=>{
                if(code === grade.grade_code){
                    console.log("Deleng of index", index);
                    grades.splice(index,1);

                    localStorage.removeItem('grades');
                    localStorage.setItem('grades', JSON.stringify(grades));
                }
            })
        }

        // Delete job title
        if(req.url.includes('configuration/jobtitle') && req.method === 'DELETE'){
            console.log(req.url);
            let code= req.url.split("=")[1];
            console.log('Deleting from fake backend with code=>', code);
            let jobTitles: JobTitle[] = JSON.parse(localStorage.getItem('jobTitles')) || [];
            jobTitles.forEach((jobTitle: JobTitle, index)=>{
                if(code === jobTitle.job_title_code){
                    console.log('Deleting of index', index);
                    jobTitles.splice(index,1);

                    localStorage.removeItem('jobTitles');
                    localStorage.setItem('jobTitles', JSON.stringify(jobTitles));
                }
            })
        }

        // Delete Job Type
        if(req.url.includes('configuration/jobtype') && req.method === 'DELETE'){
            console.log(req.url);
            let code=req.url.split("=")[1];
            console.log("Deleting from fake backend with code=>", code);
            let jobTypes: JobType[]= JSON.parse(localStorage.getItem('jobTypes')) || [];
            jobTypes.forEach((jobType: JobType, index)=>{
                if(code=== jobType.job_type_code){
                    console.log("Deleting of index", index);
                    jobTypes.splice(index,1);

                    localStorage.removeItem('jobTypes');
                    localStorage.setItem('jobTypes', JSON.stringify(jobTypes));
                }
            })
        }

        // Delete office location
        if(req.url.includes('configuration/officelocation') && req.method === 'DELETE'){
            console.log(req.url);
            let code= req.url.split("=")[1];
            console.log("Deleting from fake backend with code=>", code);
            let OfficeLocations: OfficeLocation[]= JSON.parse(localStorage.getItem('officeLocations')) || [];
            OfficeLocations.forEach((officeLocation: OfficeLocation, index)=>{
                if(code === officeLocation.office_location_code){
                    console.log("deleting of index", index);
                    OfficeLocations.splice(index,1);

                    localStorage.removeItem('officeLocations');
                    localStorage.setItem('officeLocations', JSON.stringify(OfficeLocations));
                }
            })
        }

        // save user info 
        if(req.url.endsWith('user') && req.method === 'POST'){
            let newUserInfo: UserInfo = req.body;
            let userInfos: UserInfo[] = JSON.parse(localStorage.getItem('userInfos')) || [];
            userInfos.push(newUserInfo);

            localStorage.setItem('userInfos', JSON.stringify(userInfos));
            return of(new HttpResponse ({status: 201}));
        }

        // save Employment
        if(req.url.endsWith('employment') && req.method === 'POST'){
            let newEmployment: Employment = req.body;
            let employments : Employment [] = JSON.parse(localStorage.getItem('employments')) || [];
            employments.push(newEmployment);

            localStorage.setItem('employments', JSON.stringify(employments));
            return of(new HttpResponse ({status: 201}));
        }

        // save Access
        if(req.url.endsWith('access') && req.method === 'POST'){
            let newAccess: UserAccess = req.body;
            let accesses: UserAccess[]= JSON.parse(localStorage.getItem('accesses')) || [];
            accesses.push(newAccess);

            localStorage.setItem('accesses', JSON.stringify(accesses));
            return of(new HttpResponse ({status: 201}));
        }

        // save User Employment 
        if(req.url.endsWith('user') && req.method === 'POST'){
            let newUserEmp: Employment = req.body;
            let userEmployments: Employment [] = JSON.parse(localStorage.getItem('userEmployments')) || [];
            userEmployments.push(newUserEmp);

            localStorage.setItem('userEmployments', JSON.stringify(userEmployments));
            return of(new HttpResponse ({status: 201}));
        }

        return throwError({ status: 401, error: { message: 'url not implemented at' } });
    }
    
   
    
} 

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};