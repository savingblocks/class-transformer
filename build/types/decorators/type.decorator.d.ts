import { TypeHelpOptions, TypeOptions } from '../interfaces';
/**
 * Specifies a type of the property.
 * The given TypeFunction can return a constructor. A discriminator can be given in the options.
 *
 * Can be applied to class definitions and properties.
 */
export declare function Type(typeFunction?: (type?: TypeHelpOptions) => Function, options?: TypeOptions): PropertyDecorator & ClassDecorator;
