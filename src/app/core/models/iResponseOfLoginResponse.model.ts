import { LoginResponse } from './loginresponse.model';
export interface IResponseOfLoginResponse {
    code: number;
    responseMessage: string;
    requestDate: Date;
    success: boolean;
    statusCode: number;
    dataResponse: LoginResponse;
}
