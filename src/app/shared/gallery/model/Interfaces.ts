/**
 * basic class to handle items as entities
 * @module shared
 * @class Item
 */

export interface Item {
    id: string;

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

    thumbnailUrl: string;

    pictures: Array<string>;

}

/**
 * base to handle user-blobs as entities
 * @module shared
 * @class UserBlob
 */
export interface UserBlob {
    data: Array<Item>;

}

/**
 * base to handle users as entities
 * @module shared
 * @class User
 */
export interface User {
    pictures: Object;
}
