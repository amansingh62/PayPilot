import { Plan, PlanStatus } from "../../generated/prisma/client.js";

export interface JwtPayload {
  userId: string;
  plan: Plan;
  planStatus: PlanStatus;
}
