import { Item, UserBlob, User } from 'src/app/shared/gallery/model/Interfaces';


/**
 * * concrete item variant
 * * Mixcloud specific values
 * @module Mixcloud
 * @class CloudcastItem
 * @extends Mixcloud.Item
 */

export class CloudcastItem extends Item {
    tags: Array<string>;
    play_count: number;
    slug: string;
    favorite_count: number;
    listener_count: number;
    name: string;
    url: string;
    pictures: Array<any>;
    repost_count: number;
    updated_time: string;       // date
    comment_count: number;
}



/**
 * * concrete variant of UserBlob
 * * Mixcloud specific values <br/>
 * @module Mixcloud
 * @class CloudcastUserBlob
 * @constructor
 * @extends Mixcloud.UserBlob
 */
 // * @extends {{#crossLink "Mixcloud.UserBlob"}}UserBlob{{/crossLink}}
export class CloudcastUserBlob extends UserBlob {
    name: string;
    paging: Object;
}



/**
 * * concrete variant of User
 * * Mixcloud specific values
 * extends {{#crossLink "Mixcloud.User"}}User{{/crossLink}}
 * @module Mixcloud
 * @class MixcloudUser
 * @extends Mixcloud.User
 */
export class MixCloudUser extends User {
    key: string;
    name: string;
    url: string;
    username: string;
}
