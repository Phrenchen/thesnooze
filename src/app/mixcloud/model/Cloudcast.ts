export interface Cloudcast {
    tags: Array<string>;
    play_count: number;
    user: MixCloudUser;
    key: string;
    created_time: string;       // date
    slug: string;
    favorite_count: number;
    listener_count: number;
    name: string;
    url: string;
    pictures: Array<any>;
    repost_count: number;
    updated_time: string;       // date
    comment_count: number;
    audio_length: number;
}

export interface CloudcastBlob {
    name: string;
    data: Array<Cloudcast>;
    paging: Object;
}

export interface MixCloudUser {
    key: string;
    name: string;
    pictures: Object;
    url: string;
    username: string;
}
