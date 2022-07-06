import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({ providedIn: 'root' })
export class StorageService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public LS = {
    get: async (key): Promise<any> => {
      console.log(key, 'get');
      const { value } = await Storage.get({ key });
      try {
        console.log(JSON.parse(value), 'get value via json');

        return JSON.parse(value);
      } catch (e) {
        console.log(value, 'get value');
        return value;
      }
    },
    set: async (key, data): Promise<any> => {
      console.log(key, data, ' set');
      if (typeof data == 'object' && data != null) {
        await Storage.set({ key, value: JSON.stringify(data) });
      } else {
        await Storage.set({ key, value: data });
      }
      return this.LS.get(key);
    },
    remove: async (key): Promise<any> => {
      console.log(key, 'remove');
      await Storage.remove({ key });
      return this.LS.get(key);
    },
    clear: async (): Promise<any> => {
      console.log('clear storage fired');
      await Storage.clear();
    },
  };
}
