export default class Attribute {
  /**
   * @param {'object' | 'array' | 'number' | 'boolean' | 'string'} type
   */
  static typeApplier(type) {
    return (value) => {
      switch (type) {
        case 'object':
        case 'array':
          return JSON.parse(value);
        case 'number':
          return parseFloat(value);
        case 'boolean':
          return value === 'true';
        case 'string':
          return value;
        default:
          throw new Error('[typeApplier] Invalid type');
      }
    };
  }
}
