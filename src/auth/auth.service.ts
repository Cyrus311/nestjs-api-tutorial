import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'SignUp' };
  }
  signin() {
    return { msg: 'SignIn' };
  }
}
