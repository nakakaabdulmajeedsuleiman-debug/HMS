export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
  return phoneRegex.test(phone);
}

export function validateDate(date: string): boolean {
  return !isNaN(new Date(date).getTime());
}

export function validateMongoId(id: string): boolean {
  return /^[0-9a-fA-F]{24}$/.test(id);
}

export function validateRequired(value: any): boolean {
  return value !== null && value !== undefined && value !== "";
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

export const validators = {
  patient: (data: any) => {
    const errors: Record<string, string> = {};
    if (!validateRequired(data.firstName)) errors.firstName = "First name is required";
    if (!validateRequired(data.lastName)) errors.lastName = "Last name is required";
    if (!validateEmail(data.email)) errors.email = "Valid email is required";
    if (!validatePhone(data.phone)) errors.phone = "Valid phone is required";
    if (!validateDate(data.dateOfBirth)) errors.dateOfBirth = "Valid date is required";
    return errors;
  },

  doctor: (data: any) => {
    const errors: Record<string, string> = {};
    if (!validateRequired(data.firstName)) errors.firstName = "First name is required";
    if (!validateRequired(data.lastName)) errors.lastName = "Last name is required";
    if (!validateEmail(data.email)) errors.email = "Valid email is required";
    if (!validatePhone(data.phone)) errors.phone = "Valid phone is required";
    if (!validateRequired(data.specialization)) errors.specialization = "Specialization is required";
    if (!validateRequired(data.licenseNumber)) errors.licenseNumber = "License number is required";
    return errors;
  },

  appointment: (data: any) => {
    const errors: Record<string, string> = {};
    if (!validateRequired(data.patientId)) errors.patientId = "Patient is required";
    if (!validateRequired(data.doctorId)) errors.doctorId = "Doctor is required";
    if (!validateDate(data.appointmentDate)) errors.appointmentDate = "Valid date is required";
    if (!validateRequired(data.appointmentTime)) errors.appointmentTime = "Time is required";
    if (!validateRequired(data.reason)) errors.reason = "Reason is required";
    return errors;
  },

  staff: (data: any) => {
    const errors: Record<string, string> = {};
    if (!validateRequired(data.firstName)) errors.firstName = "First name is required";
    if (!validateRequired(data.lastName)) errors.lastName = "Last name is required";
    if (!validateEmail(data.email)) errors.email = "Valid email is required";
    if (!validatePhone(data.phone)) errors.phone = "Valid phone is required";
    if (!validateRequired(data.department)) errors.department = "Department is required";
    if (!validateRequired(data.position)) errors.position = "Position is required";
    return errors;
  },
};