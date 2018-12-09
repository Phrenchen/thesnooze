import { Item } from 'src/app/shared/gallery/model/Interfaces';

/**
 * value object
 * @module Art
 * @class ArtItem
 */

export interface ArtItem extends Item {
    title: string;
    description: string;

    imageUrl: string;
    externalUrl: string;
}
