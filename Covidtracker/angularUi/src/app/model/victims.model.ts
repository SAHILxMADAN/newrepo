import { Employee } from "../model/employee.model";

export class Victims{
    id?:number;
	employee:Employee;
	affectedDate:string;
	dosages:number;
	sickLeaves:number;
	funds:number;
	status:string;
}