import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './shared/access/components/access.component';
import { UserComponent } from './shared/user-registration/components/user/user.component';
import { EmploymentComponent } from './shared/employment/components/employment.component';
import { AttendanceComponent } from './shared/attendance/attendance.component';
import { SupervisorviewComponent } from './shared/supervisor-view/supervisor-view.component';
import { DepartmentComponent } from './shared/configuration/modules/department/components/department.component';
import { DivisionComponent } from './shared/configuration/modules/division/components/division.component';
import { GradeComponent } from './shared/configuration/modules/grade/components/grade.component';
import { JobpositionComponent } from './shared/configuration/modules/job-position/components/job-position.component';
import { JobtitleComponent } from './shared/configuration/modules/job-title/components/job-title.component';
import { JobtypeComponent } from './shared/configuration/modules/job-type/components/job-type.component';
import { OfficelocationComponent } from './shared/configuration/modules/office-location/components/office-location.component';

const routes: Routes=[
    {
        path:'access',
        component: AccessComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'employment',
        component: EmploymentComponent
    },
    {
        path: 'attendance',
        component: AttendanceComponent
    },
    {
        path:'supervisor-view',
        component: SupervisorviewComponent
    },
    {
        path: 'configuration/department',
        component: DepartmentComponent
    },
    {
        path: 'configuration/division',
        component: DivisionComponent
    },
    {
        path: 'configuration/grade',
        component: GradeComponent
    },
    {
        path: 'configuration/jobposition',
        component: JobpositionComponent
    },
    {
        path: 'configuration/jobtitle',
        component: JobtitleComponent
    },
    {
        path: 'configuration/jobtype',
        component: JobtypeComponent
    },
    {
        path: 'configuration/officelocation',
        component: OfficelocationComponent
    },
   
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}