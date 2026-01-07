import type { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../src/utils/tokens.js";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.accessToken;
    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    req.user = verifyAccessToken(token);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
