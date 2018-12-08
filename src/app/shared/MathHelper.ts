/**
 * @module shared
*  @class MathHelper
 */
export class MathHelper {

    /**
     * 
     * @method getRandomInt
     * @static
     * @param min 
     * @param max 
     */
    public static getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}