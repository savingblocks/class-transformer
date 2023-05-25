import { defaultMetadataStorage } from '../storage';
import { TypeHelpOptions, TypeOptions } from '../interfaces';

/**
 * Specifies a type of the property.
 * The given TypeFunction can return a constructor. A discriminator can be given in the options.
 *
 * Can be applied to class definitions and properties.
 */
export function Type(
  typeFunction?: (type?: TypeHelpOptions) => Function,
  options: TypeOptions = {}
): PropertyDecorator & ClassDecorator {
  return function (target: Object | Function, propertyName?: string | Symbol): void {
    const reflectedType = (Reflect as any).getMetadata('design:type', target, propertyName);
    defaultMetadataStorage.addTypeMetadata({
      target: target instanceof Function ? target : target.constructor,
      propertyName: propertyName as string,
      reflectedType,
      typeFunction,
      options,
    });
  };
}
