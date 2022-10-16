
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum PackageRight {
    VIEW = "VIEW",
    EDIT = "EDIT",
    ADMIN = "ADMIN"
}

export enum SpeechPart {
    NOUN = "NOUN",
    PRONOUN = "PRONOUN",
    VERB = "VERB",
    ADJECTIVE = "ADJECTIVE",
    ADVERB = "ADVERB",
    PREPOSITION = "PREPOSITION",
    CONJUNCTION = "CONJUNCTION",
    INTERJECTION = "INTERJECTION"
}

export interface INewGroup {
    name: string;
    active?: Nullable<boolean>;
    packageId: string;
    description?: Nullable<string>;
}

export interface IUpdateGroup {
    id: string;
    name?: Nullable<string>;
    active?: Nullable<boolean>;
    packageId?: Nullable<string>;
    description?: Nullable<string>;
}

export interface INewPackage {
    name: string;
    foreignLanguage: string;
    translatedLanguage: string;
}

export interface IUpdatePackage {
    id: string;
    name?: Nullable<string>;
    foreignLanguage?: Nullable<string>;
    translatedLanguage?: Nullable<string>;
}

export interface INewUserOnPackage {
    userId: string;
    packageId: string;
}

export interface INewUser {
    username: string;
    mail: string;
}

export interface IUpdateUser {
    id: string;
    username?: Nullable<string>;
    mail?: Nullable<string>;
}

export interface INewVocabulary {
    name: string;
    groupId: string;
    active?: Nullable<boolean>;
    favorite?: Nullable<boolean>;
    isKnown?: Nullable<boolean>;
    categorie?: Nullable<SpeechPart>;
    description?: Nullable<string>;
    sentence?: Nullable<string>;
}

export interface IUpdateVocabulary {
    id: string;
    name?: Nullable<string>;
    active?: Nullable<boolean>;
    favorite?: Nullable<boolean>;
    isKnown?: Nullable<boolean>;
    categorie?: Nullable<SpeechPart>;
    description?: Nullable<string>;
    sentence?: Nullable<string>;
}

export interface IGroup {
    __typename?: 'IGroup';
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    active: boolean;
    packageId: string;
    description?: Nullable<string>;
}

export interface IQuery {
    __typename?: 'IQuery';
    groupById(id: string): Nullable<IGroup> | Promise<Nullable<IGroup>>;
    packageById(id: string): Nullable<IPackage> | Promise<Nullable<IPackage>>;
    me(): Nullable<IUser> | Promise<Nullable<IUser>>;
    vocabularyById(id: string): Nullable<IVocabulary> | Promise<Nullable<IVocabulary>>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createGroup(input?: Nullable<INewGroup>): IGroup | Promise<IGroup>;
    updateGroup(input?: Nullable<IUpdateGroup>): IGroup | Promise<IGroup>;
    deleteGroup(id?: Nullable<string>): IGroup | Promise<IGroup>;
    createPackage(input?: Nullable<INewPackage>): IPackage | Promise<IPackage>;
    updatePackage(input?: Nullable<IUpdatePackage>): IPackage | Promise<IPackage>;
    deletePackage(id?: Nullable<string>): IPackage | Promise<IPackage>;
    createNewUserOnPackage(input?: Nullable<INewUserOnPackage>): Nullable<number> | Promise<Nullable<number>>;
    createUser(input?: Nullable<INewUser>): IUser | Promise<IUser>;
    updateUser(input?: Nullable<IUpdateUser>): IUser | Promise<IUser>;
    deleteUser(id?: Nullable<string>): IUser | Promise<IUser>;
    createVocabulary(input?: Nullable<INewVocabulary>): IVocabulary | Promise<IVocabulary>;
    updateVocabulary(input?: Nullable<IUpdateVocabulary>): IVocabulary | Promise<IVocabulary>;
    deleteVocabulary(id?: Nullable<string>): IVocabulary | Promise<IVocabulary>;
}

export interface IPackage {
    __typename?: 'IPackage';
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    foreignLanguage: string;
    translatedLanguage: string;
}

export interface IUserOnPackage {
    __typename?: 'IUserOnPackage';
    userId: string;
    packageId: string;
    packageRight: PackageRight;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser {
    __typename?: 'IUser';
    id: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    disabled?: Nullable<boolean>;
    mail: string;
}

export interface IPublicUser {
    __typename?: 'IPublicUser';
    username: string;
}

export interface IVocabulary {
    __typename?: 'IVocabulary';
    id: string;
    name: string;
    updatedAt: Date;
    createdAt: Date;
    active: boolean;
    favorite: boolean;
    isKnown: boolean;
    categorie?: Nullable<SpeechPart>;
    description?: Nullable<string>;
    sentence?: Nullable<string>;
}

type Nullable<T> = T | null;
