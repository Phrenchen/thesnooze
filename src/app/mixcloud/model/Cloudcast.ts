/**
 * value object
 * @module Mixcloud
 * @class Cloudcast
 */

export interface Item {
    id: string;
    key: string;
    created_time: string;       // date
    
    user: MixCloudUser;
    audio_length: number;
}

export interface Cloudcast extends Item {
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

export interface ItemBlob {
    data: Array<Item>;

}

export interface CloudcastBlob extends ItemBlob {
    name: string;
    paging: Object;
}

export interface User {
    pictures: Object;
}

export interface MixCloudUser extends User {
    key: string;
    name: string;
    url: string;
    username: string;
}
