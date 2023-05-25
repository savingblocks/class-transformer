import { defaultMetadataStorage } from '../storage';
/**
 * Specifies a type of the property.
 * The given TypeFunction can return a constructor. A discriminator can be given in the options.
 *
 * Can be applied to class definitions and properties.
 */
export function Type(typeFunction, options = {}) {
    return function (target, propertyName) {
        const reflectedType = Reflect.getMetadata('design:type', target, propertyName);
        defaultMetadataStorage.addTypeMetadata({
            target: target instanceof Function ? target : target.constructor,
            propertyName: propertyName,
            reflectedType,
            typeFunction,
            options,
        });
    };
}
//# sourceMappingURL=type.decorator.js.map