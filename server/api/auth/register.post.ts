import { civUsernameAvailable, insertCivUser } from "../dbFuncs";

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

  if (!(await civUsernameAvailable(r.username))) {
    throw createError({ status: 409, statusMessage: "User Exists" });
  }

  await insertCivUser(
    r.username,
    r.name,
    r.phoneNumber,
    r.password,
    r.infoPublic,
    new Date(r.dateOfBirth),
    r.bloodType,
    r.organDonor
  );
});
