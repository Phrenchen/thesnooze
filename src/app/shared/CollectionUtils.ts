/**
 * @module shared
 * @class CollectionUtils
 */
export class CollectionUtils {


  /**
   * prevents (re-)adding (null) items
   * @method safeAdd
   * @static
   * @param {Array<any>} collection
   * @param {any} item
   */
  public static safeAdd(collection: Array<any>, item: any): void {
    if (!collection || !item) {
      return;
    }

    if (collection.indexOf(item) < 0) {
      collection.push(item);
    }
  }
}
