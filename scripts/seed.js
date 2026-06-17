import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/hms";

async function seedDatabase() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("hms");

    // Drop existing collections if they exist
    for (const collectionName of [
      "patients",
      "doctors",
      "appointments",
      "staff",
      "services",
      "invoices",
    ]) {
      const collection = db.collection(collectionName);
      try {
        await collection.drop();
      } catch (error) {
        // Ignore missing collections
      }
    }

    const patientsResult = await db.collection("patients").insertMany([
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "+1-555-0001",
        dateOfBirth: "1985-03-15",
        gender: "M",
        address: "123 Main St, New York, NY 10001",
        medicalHistory: "Hypertension, Diabetes Type 2",
        insuranceProvider: "Blue Cross",
        insuranceNumber: "BC123456789",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phone: "+1-555-0002",
        dateOfBirth: "1990-07-22",
        gender: "F",
        address: "456 Oak Ave, Los Angeles, CA 90001",
        medicalHistory: "Asthma",
        insuranceProvider: "Aetna",
        insuranceNumber: "AET987654321",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Michael",
        lastName: "Johnson",
        email: "mjohnson@example.com",
        phone: "+1-555-0003",
        dateOfBirth: "1978-11-08",
        gender: "M",
        address: "789 Pine Rd, Chicago, IL 60601",
        medicalHistory: "None",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log(`✅ Seeded ${patientsResult.insertedIds.length} patients`);

    const doctorsResult = await db.collection("doctors").insertMany([
      {
        firstName: "Dr. Sarah",
        lastName: "Williams",
        email: "sarah.williams@healthhub.com",
        phone: "+1-555-1001",
        specialization: "Cardiology",
        licenseNumber: "LIC123456",
        yearsOfExperience: 15,
        workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        workingHours: { start: "09:00", end: "17:00" },
        availability: "available",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Dr. James",
        lastName: "Brown",
        email: "james.brown@healthhub.com",
        phone: "+1-555-1002",
        specialization: "Pediatrics",
        licenseNumber: "LIC789012",
        yearsOfExperience: 12,
        workingDays: ["Monday", "Wednesday", "Friday"],
        workingHours: { start: "08:00", end: "16:00" },
        availability: "available",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Dr. Emily",
        lastName: "Davis",
        email: "emily.davis@healthhub.com",
        phone: "+1-555-1003",
        specialization: "Neurology",
        licenseNumber: "LIC345678",
        yearsOfExperience: 8,
        workingDays: ["Tuesday", "Thursday"],
        workingHours: { start: "10:00", end: "18:00" },
        availability: "on-leave",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log(`✅ Seeded ${doctorsResult.insertedIds.length} doctors`);

    const appointmentsResult = await db.collection("appointments").insertMany([
      {
        patientId: patientsResult.insertedIds[0].toString(),
        doctorId: doctorsResult.insertedIds[0].toString(),
        appointmentDate: "2026-06-20",
        appointmentTime: "10:00",
        reason: "Regular check-up",
        notes: "Patient reports normal conditions.",
        status: "scheduled",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        patientId: patientsResult.insertedIds[1].toString(),
        doctorId: doctorsResult.insertedIds[1].toString(),
        appointmentDate: "2026-06-22",
        appointmentTime: "14:30",
        reason: "Asthma management",
        notes: "Refill inhaler prescription.",
        status: "scheduled",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log(`✅ Seeded ${appointmentsResult.insertedIds.length} appointments`);

    const staffResult = await db.collection("staff").insertMany([
      {
        firstName: "Robert",
        lastName: "Wilson",
        email: "robert.wilson@healthhub.com",
        phone: "+1-555-2001",
        department: "Nursing",
        position: "Head Nurse",
        salary: 65000,
        employmentDate: "2015-06-01",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Lisa",
        lastName: "Anderson",
        email: "lisa.anderson@healthhub.com",
        phone: "+1-555-2002",
        department: "Administration",
        position: "Office Manager",
        salary: 50000,
        employmentDate: "2018-03-15",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "David",
        lastName: "Martinez",
        email: "david.martinez@healthhub.com",
        phone: "+1-555-2003",
        department: "Lab",
        position: "Lab Technician",
        salary: 45000,
        employmentDate: "2020-01-20",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log(`✅ Seeded ${staffResult.insertedIds.length} staff members`);

    const servicesResult = await db.collection("services").insertMany([
      {
        name: "General Consultation",
        description: "Standard doctor consultation",
        category: "Consultation",
        cost: 100,
        duration: "30 mins",
        availability: "available",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blood Test",
        description: "Complete blood count and analysis",
        category: "Diagnostics",
        cost: 75,
        duration: "15 mins",
        availability: "available",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "X-Ray",
        description: "Digital X-Ray imaging",
        category: "Diagnostics",
        cost: 150,
        duration: "20 mins",
        availability: "available",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Specialist Consultation",
        description: "Consultation with specialist doctor",
        category: "Consultation",
        cost: 200,
        duration: "45 mins",
        availability: "available",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log(`✅ Seeded ${servicesResult.insertedIds.length} services`);

    const invoicesResult = await db.collection("invoices").insertMany([
      {
        patientId: patientsResult.insertedIds[0].toString(),
        appointmentId: appointmentsResult.insertedIds[0].toString(),
        services: [
          {
            serviceId: servicesResult.insertedIds[0].toString(),
            quantity: 1,
            cost: 100,
          },
        ],
        totalAmount: 100,
        paidAmount: 100,
        status: "paid",
        issueDate: "2026-06-01",
        dueDate: "2026-06-15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        patientId: patientsResult.insertedIds[1].toString(),
        appointmentId: appointmentsResult.insertedIds[1].toString(),
        services: [
          {
            serviceId: servicesResult.insertedIds[1].toString(),
            quantity: 1,
            cost: 75,
          },
        ],
        totalAmount: 75,
        paidAmount: 0,
        status: "pending",
        issueDate: "2026-06-05",
        dueDate: "2026-06-20",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log(`✅ Seeded ${invoicesResult.insertedIds.length} invoices`);

    console.log("\n🎉 Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seedDatabase();
