interface UserAttendance {
    user_code: string,
    employee_code: string,
    from: number,
    to_date: number,
    date: number,
    in: string,
    out: string,
    remarks?: string,
    verified_by: string,
    justification_code: string,
}