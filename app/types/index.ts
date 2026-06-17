import { ObjectId } from "mongodb";

export interface Patient {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: "M" | "F" | "Other";
  address: string;
  medicalHistory: string;
  insuranceProvider?: string;
  insuranceNumber?: string;
  status: "active" | "inactive" | "discharged";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Doctor {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialization: string;
  licenseNumber: string;
  yearsOfExperience: number;
  workingDays: string[];
  workingHours: { start: string; end: string };
  availability: "available" | "on-leave" | "retired";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Appointment {
  _id?: ObjectId;
  patientId: string;
  doctorId: string;
  appointmentDate: string;
  appointmentTime: string;
  reason: string;
  notes?: string;
  status: "scheduled" | "completed" | "cancelled" | "no-show";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Staff {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  salary: number;
  employmentDate: string;
  status: "active" | "inactive" | "on-leave";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Service {
  _id?: ObjectId;
  name: string;
  description: string;
  category: string;
  cost: number;
  duration: string;
  availability: "available" | "unavailable";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Invoice {
  _id?: ObjectId;
  patientId: string;
  appointmentId?: string;
  services: { serviceId: string; quantity: number; cost: number }[];
  totalAmount: number;
  paidAmount: number;
  status: "pending" | "paid" | "overdue" | "cancelled";
  issueDate: string;
  dueDate: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  _id?: ObjectId;
  email: string;
  password: string;
  role: "admin" | "doctor" | "staff" | "receptionist";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  code?: number;
}