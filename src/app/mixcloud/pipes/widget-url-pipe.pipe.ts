import { Pipe, PipeTransform } from '@angular/core';
import { CloudcastItem } from '../model/Interfaces';
import { MixcloudComponent } from '../mixcloud.component';

@Pipe({
  name: 'widgetUrlPipe'
})
export class WidgetUrlPipePipe implements PipeTransform {

  transform(cloudcast: CloudcastItem, widgetConfig?: any): any {
    if (!cloudcast) {
      console.log('no cloudcast for pipe');
      return '';
    }
    console.log(cloudcast);
    console.log(widgetConfig);
    // let key = cloudcast.key;
    let config = '';

    widgetConfig.map(cfg => {
      config += '&' + cfg;
    });

    const result = MixcloudComponent.WIDGET_BASE_URL + cloudcast.key + config;
    console.log(result);
    return result;
  }

}
