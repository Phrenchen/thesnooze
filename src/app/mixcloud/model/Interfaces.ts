/**
 * basic class to handle items as entities
 * @module Mixcloud
 * @class Item
 */

export class Item {
    /**
     * unique identifier
     * @attribute {string} id
     * */
    id: string;

    /**
     * source url for Mixcloud widget
     * * TODO! MOVE THIS TO CloudcastItem!
     * @attribute {string} key
     * */
    key: string;

    /**
     * creation-date-string - use for Date
     * @attribute {string} created_time
     */
    created_time: string;       // date

    /**
     * contains avatar url etc.
     * @attribute {User} user
     */
    user: User;

    /**
     * use for Date
     * * TODO! MOVE THIS TO CloudcastItem!
     * @attribute audio_length
     */
    audio_length: number;
}

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
 * base to handle user-blobs as entities
 * @module Mixcloud
 * @class UserBlob
 */
export class UserBlob {
    data: Array<Item>;

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
 * base to handle users as entities
 * @module Mixcloud
 * @class User
 */
export class User {
    pictures: Object;
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
