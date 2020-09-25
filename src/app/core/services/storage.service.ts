import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';
import SecureStorage from 'secure-web-storage';
import { environment } from '@environments';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  private secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key): string {
      key = CryptoJs.SHA256(key, environment.SECRET_KEY);
      return key.toString();
    },
    encrypt: function encrypt(data): string {
      data = CryptoJs.AES.encrypt(data, environment.SECRET_KEY);
      return data.toString();
    },
    decrypt: function decrypt(data): string {
      data = CryptoJs.AES.decrypt(data, environment.SECRET_KEY);
      return data.toString(CryptoJs.enc.Utf8);
    }
  });
  setJsonValue(key: string, value: any): void {
    this.secureStorage.setItem(key, value);
  }
  getJsonValue(key: string): any {
    return this.secureStorage.getItem(key);
  }
  removeJsonItem(key: string): void {
    this.secureStorage.removeItem(key);
  }
}
