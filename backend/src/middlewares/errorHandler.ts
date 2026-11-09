import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../shared/errors/AppError.js';
import { HttpStatus } from '../shared/constants/status_code.js';
import { ERROR_MESSAGES } from '../shared/constants/error_messages.js';
export const errorHandler = (err: unknown, req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
        console.log(`[${req.method} ${req.originalUrl}] - ${err.message}`);

        res.status(err.statusCode).json({
            success: false,
            message: err.message
        })

        return
    }

    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR
    });
    return;
}