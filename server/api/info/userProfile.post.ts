import { updateUserProfile } from "../dbFuncs";

export default eventHandler(async (event) => {
  interface bodyData {
    name: string;
    username: string;
    phoneNumber: string;
    password: string;
    infoPublic: boolean;
    dateOfBirth: number;
    bloodType: string;
    organDonor: boolean;
  }
  const r: bodyData = await readBody(event);

  await updateUserProfile(
    r.username,
    r.name,
    r.phoneNumber,
    r.infoPublic,
    r.password,
    new Date(r.dateOfBirth),
    r.bloodType,
    r.organDonor
  );
});