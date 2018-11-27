import { Injectable, Output, EventEmitter } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MixcloudService {

  private static USER_THESNOOZE = 'thesnooze';

  private static CLOUD_CASTS = 'cloudcasts';
  private static META_DATA = '?metadata=1';


  constructor() { }

  public static getEndPointBase(user: string, requestName: string): string {
    return 'https://api.mixcloud.com/' + user + '/' + requestName + '/';
  }



  public async getNextCloudcastBatch(batchUrl: string): Promise<any> {
    return Axios.get(batchUrl)
      .then((response: AxiosResponse<any>) => {
        return response.data;
      })
      .catch(error => {
        console.log('error: ' + error);
        return null;
      });
  }

  public async getCloudcasts(limit: number = 0): Promise<any> {
    let endpoint = MixcloudService.getEndPointBase(MixcloudService.USER_THESNOOZE, MixcloudService.CLOUD_CASTS);
    // batches contain max 100 cloudcasts. load in batches of a 100
    if (limit === 0) {
      // const metaData = await this.getMetaData();
      // limit = metaData.cloudcast_count;
      limit = 100;
    }

    endpoint += '?limit=' + limit;

    return Axios.get(endpoint)
      .then((response: AxiosResponse<any>) => {
        return response.data;
      })
      .catch(error => {
        console.log('error: ' + error);
        return null;
      });
  }

  // helper
  private getMetaData(): Promise<any> {
    const endpoint = MixcloudService.getEndPointBase(MixcloudService.USER_THESNOOZE, MixcloudService.META_DATA);

    return Axios.get(endpoint)
      .then((response: AxiosResponse<any>) => {
        return response.data;

      })
      .catch(error => {
        console.log('error: ' + error);
        return null;
      });
  }
}
