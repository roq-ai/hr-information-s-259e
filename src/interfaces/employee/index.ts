import { VacationInterface } from 'interfaces/vacation';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
  vacation_days?: number;
  payroll: number;
  created_at?: any;
  updated_at?: any;
  vacation?: VacationInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
}
