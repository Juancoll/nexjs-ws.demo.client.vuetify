import { registerService } from '@/services/registerService';
import { Errors } from './Errors';

export const errors = new Errors();

registerService('errors', errors);
