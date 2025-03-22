import { ObjectType } from '../types/app';
import React from 'react';
type Slot = Array<React.PropsWithChildren['children']> | React.PropsWithChildren['children'];
export declare const useSlots: (children: React.PropsWithChildren["children"], key?: string | Omit<React.ReactElement, string>) => ObjectType<Slot>;
export {};
