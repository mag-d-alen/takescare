import { z } from 'zod';
export const peselRegex =
  /^[0-9]{2}([02468]1|[13579][012])(0[1-9]|1[0-9]|2[0-9]|3[01])[0-9]{5}$/;

const passportRegex = /^[a-zA-Z0-9]+$/;

const PatientSchema = z.object({
  patientAge: z.date(),
  patientSymptoms: z.string().optional(),
  patientId: z.discriminatedUnion('type', [
    z.object({
      type: z.literal('pesel'),
      idNumber: z.string().regex(peselRegex, 'Niepoprawny numer PESEL'),
    }),
    z
      .object({
        type: z.literal('passport'),
        idNumber: z
          .string()
          .regex(passportRegex, 'Niepoprawny numer paszportu'),
      })
      .strict(),
  ]),
  patientName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  patientAddress: z.object({
    country: z.string(),
    street: z.string(),
    number: z.string(),
  }),
  visitAddress: z
    .object({
      country: z.string(),
      street: z.string(),
      number: z.string(),
    })
    .optional(),
});
export const FormSchema = z.object({
  appointmentNumber: z.number(),
  appointmentType: z.string(),
  specialization: z.string(),
  appointmentDate: z.date(),
  appointmentLanguage: z.string(),
  topic: z.string(),
  appointmentTime: z.object({
    from: z.string(),
    to: z.string(),
  }),
  additionalInformation: z.string().optional(),
  patient: PatientSchema,
});
