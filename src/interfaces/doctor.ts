import { BaseParams } from './common';

export interface Doctor {
  id: number;
  phone: string;
  first_name: string;
  last_name: string;
  avatar: string;
  bank_acc: string;
  hospital_id: number; // Assuming this is a foreign key to a hospital table
  specialization: string;
  qualification: string;
  username: string;
  email: string;
  password: string;
  address: string;
  status: string;
}

export interface GetDoctorsRequest extends BaseParams {
  search?: string;
}

export interface DoctorParams extends BaseParams {
  search?: string;
  filterDoctor?: string;
}

export interface GetDoctorsResponse {
  doctors: Doctor[];
  total: number;
}
