/**
 * basic class to handle items as entities
 * @module shared
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
 * base to handle user-blobs as entities
 * @module shared
 * @class UserBlob
 */
export class UserBlob {
    data: Array<Item>;

}

/**
 * base to handle users as entities
 * @module shared
 * @class User
 */
export class User {
    pictures: Object;
}
