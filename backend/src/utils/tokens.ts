import jwt from "jsonwebtoken";
import type { JwtPayload } from "../types/jwt.js";

export const signAccessToken = (payload: JwtPayload) => 
    jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, { expiresIn: "15m"});

export const signRefreshToken = (payload: JwtPayload) => 
    jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, { expiresIn: "7d" });

export const verifyAccessToken = (token: string): JwtPayload => 
    jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as JwtPayload;

export const veifyRefreshToken = (token: string) => 
    jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as JwtPayload;