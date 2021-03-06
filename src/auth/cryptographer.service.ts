import { pbkdf2Sync, randomBytes } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptographerService {
  private getHash(password: string, salt: string) {
    return pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
  }

  hashPassword(password: string) {
    const salt = randomBytes(32).toString('hex');
    const hash = this.getHash(password, salt);

    return [salt, hash].join('$');
  }

  checkPassword(saltedPasswordHash: string, candidatePassword: string) {
    const originalHash = saltedPasswordHash.split('$')[1];
    const salt = saltedPasswordHash.split('$')[0];
    const hash = this.getHash(candidatePassword, salt);

    return hash === originalHash ? true : false;
  }
}
