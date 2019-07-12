import { Mongo } from 'meteor/mongo';

export const SVGCollection = new Mongo.Collection('svgs')
global.SVGCollection = SVGCollection;