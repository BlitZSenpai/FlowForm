"use server";

import { currentUser } from "@clerk/nextjs";

export const GetFormStats = async () => {
  const user = currentUser();
  if (!user) throw new Error("Not authenticated");
};
