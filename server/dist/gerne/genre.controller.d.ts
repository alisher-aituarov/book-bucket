import { AuthService } from './auth.service';
import { SignUpDTO } from 'src/DTO/users/signUp.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(singInBody: {
        email: string;
        password: string;
    }, response: any): Promise<void>;
    signUp(signUpBody: SignUpDTO): Promise<any>;
}
