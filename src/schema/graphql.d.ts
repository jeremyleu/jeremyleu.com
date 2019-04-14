
type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for
   * representation of dates and times using the Gregorian calendar.
 */
  Date: any,
};

/** Node of type DataJson */
export type DataJson = Node & {
  /** The id of this node. */
  id: Scalars['ID'],
  /** The parent of this node. */
  parent?: Maybe<Node>,
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>,
  key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  image?: Maybe<File>,
  familiarSkills?: Maybe<FamiliarSkills_2>,
  otherSkills?: Maybe<OtherSkills_2>,
  footer?: Maybe<Scalars['String']>,
  internal?: Maybe<Internal_13>,
};

/** A connection to a list of items. */
export type DataJsonConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DataJsonEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>,
  group?: Maybe<Array<Maybe<DataJsonGroupConnectionConnection>>>,
};


/** A connection to a list of items. */
export type DataJsonConnectionDistinctArgs = {
  field?: Maybe<DataJsonDistinctEnum>
};


/** A connection to a list of items. */
export type DataJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field?: Maybe<DataJsonGroupEnum>
};

export type DataJsonConnectionContentQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionFamiliarSkillsDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionFamiliarSkillsInputObject_2 = {
  description?: Maybe<DataJsonConnectionFamiliarSkillsDescriptionQueryString_2>,
  skills?: Maybe<DataJsonConnectionFamiliarSkillsSkillsQueryList_2>,
};

export type DataJsonConnectionFamiliarSkillsSkillsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionFooterQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionImageQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<DataJsonConnectionInternalContentDigestQueryString_2>,
  type?: Maybe<DataJsonConnectionInternalTypeQueryString_2>,
  owner?: Maybe<DataJsonConnectionInternalOwnerQueryString_2>,
};

export type DataJsonConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionKeyQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionOtherSkillsDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionOtherSkillsInputObject_2 = {
  description?: Maybe<DataJsonConnectionOtherSkillsDescriptionQueryString_2>,
  skills?: Maybe<DataJsonConnectionOtherSkillsSkillsQueryList_2>,
};

export type DataJsonConnectionOtherSkillsSkillsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonConnectionSort = {
  fields: Array<Maybe<DataJsonConnectionSortByFieldsEnum>>,
  order?: Maybe<Array<Maybe<DataJsonConnectionSortOrderValues>>>,
};

export enum DataJsonConnectionSortByFieldsEnum {
  Key = 'key',
  Title = 'title',
  Content = 'content',
  Image = 'image',
  FamiliarSkillsDescription = 'familiarSkills___description',
  FamiliarSkillsSkills = 'familiarSkills___skills',
  OtherSkillsDescription = 'otherSkills___description',
  OtherSkillsSkills = 'otherSkills___skills',
  Footer = 'footer',
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum DataJsonConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type DataJsonConnectionTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonContentQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export enum DataJsonDistinctEnum {
  Key = 'key',
  Title = 'title',
  Content = 'content',
  Image = 'image',
  FamiliarSkillsDescription = 'familiarSkills___description',
  FamiliarSkillsSkills = 'familiarSkills___skills',
  OtherSkillsDescription = 'otherSkills___description',
  OtherSkillsSkills = 'otherSkills___skills',
  Footer = 'footer',
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

/** An edge in a connection. */
export type DataJsonEdge = {
  /** The item at the end of the edge */
  node?: Maybe<DataJson>,
  /** The next edge in the connection */
  next?: Maybe<DataJson>,
  /** The previous edge in the connection */
  previous?: Maybe<DataJson>,
};

export type DataJsonFamiliarSkillsDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonFamiliarSkillsInputObject_2 = {
  description?: Maybe<DataJsonFamiliarSkillsDescriptionQueryString_2>,
  skills?: Maybe<DataJsonFamiliarSkillsSkillsQueryList_2>,
};

export type DataJsonFamiliarSkillsSkillsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonFooterQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** A connection to a list of items. */
export type DataJsonGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DataJsonGroupConnectionEdge>>>,
  field?: Maybe<Scalars['String']>,
  fieldValue?: Maybe<Scalars['String']>,
  totalCount?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type DataJsonGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<DataJson>,
  /** The next edge in the connection */
  next?: Maybe<DataJson>,
  /** The previous edge in the connection */
  previous?: Maybe<DataJson>,
};

export enum DataJsonGroupEnum {
  Key = 'key',
  Title = 'title',
  Content = 'content',
  Image = 'image',
  FamiliarSkillsDescription = 'familiarSkills___description',
  FamiliarSkillsSkills = 'familiarSkills___skills',
  OtherSkillsDescription = 'otherSkills___description',
  OtherSkillsSkills = 'otherSkills___skills',
  Footer = 'footer',
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export type DataJsonIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonImageQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonInternalInputObject_2 = {
  contentDigest?: Maybe<DataJsonInternalContentDigestQueryString_2>,
  type?: Maybe<DataJsonInternalTypeQueryString_2>,
  owner?: Maybe<DataJsonInternalOwnerQueryString_2>,
};

export type DataJsonInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonKeyQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonOtherSkillsDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonOtherSkillsInputObject_2 = {
  description?: Maybe<DataJsonOtherSkillsDescriptionQueryString_2>,
  skills?: Maybe<DataJsonOtherSkillsSkillsQueryList_2>,
};

export type DataJsonOtherSkillsSkillsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DataJsonTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type Dependencies_2 = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type DevDependencies_2 = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

/** Node of type Directory */
export type Directory = Node & {
  /** The id of this node. */
  id: Scalars['ID'],
  /** The parent of this node. */
  parent?: Maybe<Node>,
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>,
  internal?: Maybe<Internal_10>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Float']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
};


/** Node of type Directory */
export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type Directory */
export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type Directory */
export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type Directory */
export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type Directory */
export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type Directory */
export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type Directory */
export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type Directory */
export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type DirectoryAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type DirectoryBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryBlksizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryBlocksQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** A connection to a list of items. */
export type DirectoryConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DirectoryEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>,
  group?: Maybe<Array<Maybe<DirectoryGroupConnectionConnection>>>,
};


/** A connection to a list of items. */
export type DirectoryConnectionDistinctArgs = {
  field?: Maybe<DirectoryDistinctEnum>
};


/** A connection to a list of items. */
export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field?: Maybe<DirectoryGroupEnum>
};

export type DirectoryConnectionAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type DirectoryConnectionAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type DirectoryConnectionBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionBlksizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryConnectionBlocksQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryConnectionChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type DirectoryConnectionCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionDevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryConnectionDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionInoQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type DirectoryConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>,
  type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>,
  description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>,
  owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>,
};

export type DirectoryConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryConnectionModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type DirectoryConnectionMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryConnectionPrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryConnectionRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryConnectionSort = {
  fields: Array<Maybe<DirectoryConnectionSortByFieldsEnum>>,
  order?: Maybe<Array<Maybe<DirectoryConnectionSortOrderValues>>>,
};

export enum DirectoryConnectionSortByFieldsEnum {
  Id = 'id',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum DirectoryConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type DirectoryConnectionSourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryConnectionUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type DirectoryCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryDevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export enum DirectoryDistinctEnum {
  Id = 'id',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

/** An edge in a connection. */
export type DirectoryEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Directory>,
  /** The next edge in the connection */
  next?: Maybe<Directory>,
  /** The previous edge in the connection */
  previous?: Maybe<Directory>,
};

export type DirectoryExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

/** A connection to a list of items. */
export type DirectoryGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DirectoryGroupConnectionEdge>>>,
  field?: Maybe<Scalars['String']>,
  fieldValue?: Maybe<Scalars['String']>,
  totalCount?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type DirectoryGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Directory>,
  /** The next edge in the connection */
  next?: Maybe<Directory>,
  /** The previous edge in the connection */
  previous?: Maybe<Directory>,
};

export enum DirectoryGroupEnum {
  Id = 'id',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export type DirectoryIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryInoQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type DirectoryInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryInternalInputObject_2 = {
  contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>,
  type?: Maybe<DirectoryInternalTypeQueryString_2>,
  description?: Maybe<DirectoryInternalDescriptionQueryString_2>,
  owner?: Maybe<DirectoryInternalOwnerQueryString_2>,
};

export type DirectoryInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type DirectoryMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryPrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectoryRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectorySizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DirectorySourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DirectoryUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type DuotoneGradient = {
  highlight?: Maybe<Scalars['String']>,
  shadow?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['Int']>,
};

export type FamiliarSkills_2 = {
  description?: Maybe<Scalars['String']>,
  skills?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** Node of type File */
export type File = Node & {
  /** The id of this node. */
  id: Scalars['ID'],
  /** The parent of this node. */
  parent?: Maybe<Node>,
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>,
  /** The child of this node of type imageSharp */
  childImageSharp?: Maybe<ImageSharp>,
  /** The child of this node of type dataJson */
  childDataJson?: Maybe<DataJson>,
  internal?: Maybe<Internal_11>,
  sourceInstanceName?: Maybe<Scalars['String']>,
  absolutePath?: Maybe<Scalars['String']>,
  relativePath?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  prettySize?: Maybe<Scalars['String']>,
  modifiedTime?: Maybe<Scalars['Date']>,
  accessTime?: Maybe<Scalars['Date']>,
  changeTime?: Maybe<Scalars['Date']>,
  birthTime?: Maybe<Scalars['Date']>,
  root?: Maybe<Scalars['String']>,
  dir?: Maybe<Scalars['String']>,
  base?: Maybe<Scalars['String']>,
  ext?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  relativeDirectory?: Maybe<Scalars['String']>,
  dev?: Maybe<Scalars['Int']>,
  mode?: Maybe<Scalars['Int']>,
  nlink?: Maybe<Scalars['Int']>,
  uid?: Maybe<Scalars['Int']>,
  gid?: Maybe<Scalars['Int']>,
  rdev?: Maybe<Scalars['Int']>,
  blksize?: Maybe<Scalars['Int']>,
  ino?: Maybe<Scalars['Float']>,
  blocks?: Maybe<Scalars['Int']>,
  atimeMs?: Maybe<Scalars['Float']>,
  mtimeMs?: Maybe<Scalars['Float']>,
  ctimeMs?: Maybe<Scalars['Float']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  atime?: Maybe<Scalars['Date']>,
  mtime?: Maybe<Scalars['Date']>,
  ctime?: Maybe<Scalars['Date']>,
  birthtime?: Maybe<Scalars['Date']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
};


/** Node of type File */
export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type File */
export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type File */
export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type File */
export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type File */
export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type File */
export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type File */
export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type File */
export type FileBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FileAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FileBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileBlksizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileBlocksQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** A connection to a list of items. */
export type FileConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FileEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>,
  group?: Maybe<Array<Maybe<FileGroupConnectionConnection>>>,
};


/** A connection to a list of items. */
export type FileConnectionDistinctArgs = {
  field?: Maybe<FileDistinctEnum>
};


/** A connection to a list of items. */
export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field?: Maybe<FileGroupEnum>
};

export type FileConnectionAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FileConnectionAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FileConnectionBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionBlksizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileConnectionBlocksQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileConnectionChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FileConnectionCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionDevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileConnectionDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionInoQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FileConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>,
  type?: Maybe<FileConnectionInternalTypeQueryString_2>,
  mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>,
  description?: Maybe<FileConnectionInternalDescriptionQueryString_2>,
  owner?: Maybe<FileConnectionInternalOwnerQueryString_2>,
};

export type FileConnectionInternalMediaTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileConnectionModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FileConnectionMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileConnectionPrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileConnectionRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileConnectionSort = {
  fields: Array<Maybe<FileConnectionSortByFieldsEnum>>,
  order?: Maybe<Array<Maybe<FileConnectionSortOrderValues>>>,
};

export enum FileConnectionSortByFieldsEnum {
  Id = 'id',
  Children = 'children',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL'
}

export enum FileConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type FileConnectionSourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileConnectionUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FileCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileDevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export enum FileDistinctEnum {
  Id = 'id',
  Children = 'children',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

/** An edge in a connection. */
export type FileEdge = {
  /** The item at the end of the edge */
  node?: Maybe<File>,
  /** The next edge in the connection */
  next?: Maybe<File>,
  /** The previous edge in the connection */
  previous?: Maybe<File>,
};

export type FileExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

/** A connection to a list of items. */
export type FileGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FileGroupConnectionEdge>>>,
  field?: Maybe<Scalars['String']>,
  fieldValue?: Maybe<Scalars['String']>,
  totalCount?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type FileGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<File>,
  /** The next edge in the connection */
  next?: Maybe<File>,
  /** The previous edge in the connection */
  previous?: Maybe<File>,
};

export enum FileGroupEnum {
  Id = 'id',
  Children = 'children',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export type FileIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileInoQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FileInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileInternalInputObject_2 = {
  contentDigest?: Maybe<FileInternalContentDigestQueryString_2>,
  type?: Maybe<FileInternalTypeQueryString_2>,
  mediaType?: Maybe<FileInternalMediaTypeQueryString_2>,
  description?: Maybe<FileInternalDescriptionQueryString_2>,
  owner?: Maybe<FileInternalOwnerQueryString_2>,
};

export type FileInternalMediaTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FileMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FilePrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FileSourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FileUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

/** Filter connection on its fields */
export type FilterDataJson = {
  key?: Maybe<DataJsonConnectionKeyQueryString_2>,
  title?: Maybe<DataJsonConnectionTitleQueryString_2>,
  content?: Maybe<DataJsonConnectionContentQueryString_2>,
  image?: Maybe<DataJsonConnectionImageQueryString_2>,
  familiarSkills?: Maybe<DataJsonConnectionFamiliarSkillsInputObject_2>,
  otherSkills?: Maybe<DataJsonConnectionOtherSkillsInputObject_2>,
  footer?: Maybe<DataJsonConnectionFooterQueryString_2>,
  id?: Maybe<DataJsonConnectionIdQueryString_2>,
  internal?: Maybe<DataJsonConnectionInternalInputObject_2>,
};

/** Filter connection on its fields */
export type FilterDirectory = {
  id?: Maybe<DirectoryConnectionIdQueryString_2>,
  internal?: Maybe<DirectoryConnectionInternalInputObject_2>,
  sourceInstanceName?: Maybe<DirectoryConnectionSourceInstanceNameQueryString_2>,
  absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>,
  relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>,
  extension?: Maybe<DirectoryConnectionExtensionQueryString_2>,
  size?: Maybe<DirectoryConnectionSizeQueryInteger_2>,
  prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>,
  modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>,
  accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>,
  changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>,
  birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>,
  root?: Maybe<DirectoryConnectionRootQueryString_2>,
  dir?: Maybe<DirectoryConnectionDirQueryString_2>,
  base?: Maybe<DirectoryConnectionBaseQueryString_2>,
  ext?: Maybe<DirectoryConnectionExtQueryString_2>,
  name?: Maybe<DirectoryConnectionNameQueryString_2>,
  relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>,
  dev?: Maybe<DirectoryConnectionDevQueryInteger_2>,
  mode?: Maybe<DirectoryConnectionModeQueryInteger_2>,
  nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>,
  uid?: Maybe<DirectoryConnectionUidQueryInteger_2>,
  gid?: Maybe<DirectoryConnectionGidQueryInteger_2>,
  rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>,
  blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>,
  ino?: Maybe<DirectoryConnectionInoQueryFloat_2>,
  blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>,
  atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>,
  mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>,
  ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>,
  birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>,
  atime?: Maybe<DirectoryConnectionAtimeQueryString_2>,
  mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>,
  ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>,
  birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>,
};

/** Filter connection on its fields */
export type FilterFile = {
  id?: Maybe<FileConnectionIdQueryString_2>,
  internal?: Maybe<FileConnectionInternalInputObject_2>,
  sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>,
  absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>,
  relativePath?: Maybe<FileConnectionRelativePathQueryString_2>,
  extension?: Maybe<FileConnectionExtensionQueryString_2>,
  size?: Maybe<FileConnectionSizeQueryInteger_2>,
  prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>,
  modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>,
  accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>,
  changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>,
  birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>,
  root?: Maybe<FileConnectionRootQueryString_2>,
  dir?: Maybe<FileConnectionDirQueryString_2>,
  base?: Maybe<FileConnectionBaseQueryString_2>,
  ext?: Maybe<FileConnectionExtQueryString_2>,
  name?: Maybe<FileConnectionNameQueryString_2>,
  relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>,
  dev?: Maybe<FileConnectionDevQueryInteger_2>,
  mode?: Maybe<FileConnectionModeQueryInteger_2>,
  nlink?: Maybe<FileConnectionNlinkQueryInteger_2>,
  uid?: Maybe<FileConnectionUidQueryInteger_2>,
  gid?: Maybe<FileConnectionGidQueryInteger_2>,
  rdev?: Maybe<FileConnectionRdevQueryInteger_2>,
  blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>,
  ino?: Maybe<FileConnectionInoQueryFloat_2>,
  blocks?: Maybe<FileConnectionBlocksQueryInteger_2>,
  atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>,
  mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>,
  ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>,
  birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>,
  atime?: Maybe<FileConnectionAtimeQueryString_2>,
  mtime?: Maybe<FileConnectionMtimeQueryString_2>,
  ctime?: Maybe<FileConnectionCtimeQueryString_2>,
  birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>,
  publicURL?: Maybe<PublicUrlQueryString_4>,
};

/** Filter connection on its fields */
export type FilterImageSharp = {
  id?: Maybe<ImageSharpConnectionIdQueryString_2>,
  internal?: Maybe<ImageSharpConnectionInternalInputObject_2>,
  fixed?: Maybe<FixedTypeName_4>,
  resolutions?: Maybe<ResolutionsTypeName_4>,
  fluid?: Maybe<FluidTypeName_4>,
  sizes?: Maybe<SizesTypeName_4>,
  original?: Maybe<OriginalTypeName_4>,
  resize?: Maybe<ResizeTypeName_4>,
};

/** Filter connection on its fields */
export type FilterSitePage = {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>,
  internalComponentName?: Maybe<SitePageConnectionInternalComponentNameQueryString>,
  path?: Maybe<SitePageConnectionPathQueryString_2>,
  component?: Maybe<SitePageConnectionComponentQueryString>,
  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>,
  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>,
  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>,
  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>,
  id?: Maybe<SitePageConnectionIdQueryString_2>,
  internal?: Maybe<SitePageConnectionInternalInputObject_2>,
};

/** Filter connection on its fields */
export type FilterSitePlugin = {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>,
  id?: Maybe<SitePluginConnectionIdQueryString_2>,
  name?: Maybe<SitePluginConnectionNameQueryString_2>,
  version?: Maybe<SitePluginConnectionVersionQueryString_2>,
  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>,
  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>,
  browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>,
  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>,
  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>,
  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>,
  internal?: Maybe<SitePluginConnectionInternalInputObject_2>,
};

export type FixedAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FixedAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FixedBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedHeightQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FixedHeightQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FixedOriginalNameQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedOriginalNameQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FixedTypeName_3 = {
  base64?: Maybe<FixedBase64QueryString_3>,
  tracedSVG?: Maybe<FixedTracedSvgQueryString_3>,
  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>,
  width?: Maybe<FixedWidthQueryFloat_3>,
  height?: Maybe<FixedHeightQueryFloat_3>,
  src?: Maybe<FixedSrcQueryString_3>,
  srcSet?: Maybe<FixedSrcSetQueryString_3>,
  srcWebp?: Maybe<FixedSrcWebpQueryString_3>,
  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_3>,
  originalName?: Maybe<FixedOriginalNameQueryString_3>,
};

export type FixedTypeName_4 = {
  base64?: Maybe<FixedBase64QueryString_4>,
  tracedSVG?: Maybe<FixedTracedSvgQueryString_4>,
  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>,
  width?: Maybe<FixedWidthQueryFloat_4>,
  height?: Maybe<FixedHeightQueryFloat_4>,
  src?: Maybe<FixedSrcQueryString_4>,
  srcSet?: Maybe<FixedSrcSetQueryString_4>,
  srcWebp?: Maybe<FixedSrcWebpQueryString_4>,
  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_4>,
  originalName?: Maybe<FixedOriginalNameQueryString_4>,
};

export type FixedWidthQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FixedWidthQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FluidAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FluidAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type FluidBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidOriginalImgQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidOriginalImgQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidOriginalNameQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidOriginalNameQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidPresentationHeightQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FluidPresentationHeightQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FluidPresentationWidthQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FluidPresentationWidthQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type FluidSizesQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidSizesQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type FluidTypeName_3 = {
  base64?: Maybe<FluidBase64QueryString_3>,
  tracedSVG?: Maybe<FluidTracedSvgQueryString_3>,
  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>,
  src?: Maybe<FluidSrcQueryString_3>,
  srcSet?: Maybe<FluidSrcSetQueryString_3>,
  srcWebp?: Maybe<FluidSrcWebpQueryString_3>,
  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_3>,
  sizes?: Maybe<FluidSizesQueryString_3>,
  originalImg?: Maybe<FluidOriginalImgQueryString_3>,
  originalName?: Maybe<FluidOriginalNameQueryString_3>,
  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_3>,
  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_3>,
};

export type FluidTypeName_4 = {
  base64?: Maybe<FluidBase64QueryString_4>,
  tracedSVG?: Maybe<FluidTracedSvgQueryString_4>,
  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>,
  src?: Maybe<FluidSrcQueryString_4>,
  srcSet?: Maybe<FluidSrcSetQueryString_4>,
  srcWebp?: Maybe<FluidSrcWebpQueryString_4>,
  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_4>,
  sizes?: Maybe<FluidSizesQueryString_4>,
  originalImg?: Maybe<FluidOriginalImgQueryString_4>,
  originalName?: Maybe<FluidOriginalNameQueryString_4>,
  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_4>,
  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_4>,
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

/** Node of type ImageSharp */
export type ImageSharp = Node & {
  /** The id of this node. */
  id: Scalars['ID'],
  /** The parent of this node. */
  parent?: Maybe<Node>,
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>,
  internal?: Maybe<Internal_12>,
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
};


/** Node of type ImageSharp */
export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive: Scalars['Boolean'],
  pngCompressionSpeed: Scalars['Int'],
  grayscale: Scalars['Boolean'],
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  rotate: Scalars['Int']
};


/** Node of type ImageSharp */
export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive: Scalars['Boolean'],
  pngCompressionSpeed: Scalars['Int'],
  grayscale: Scalars['Boolean'],
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  rotate: Scalars['Int']
};


/** Node of type ImageSharp */
export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale: Scalars['Boolean'],
  jpegProgressive: Scalars['Boolean'],
  pngCompressionSpeed: Scalars['Int'],
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background: Scalars['String'],
  rotate: Scalars['Int'],
  sizes: Scalars['String'],
  srcSetBreakpoints: Array<Maybe<Scalars['Int']>>
};


/** Node of type ImageSharp */
export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale: Scalars['Boolean'],
  jpegProgressive: Scalars['Boolean'],
  pngCompressionSpeed: Scalars['Int'],
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background: Scalars['String'],
  rotate: Scalars['Int'],
  sizes: Scalars['String'],
  srcSetBreakpoints: Array<Maybe<Scalars['Int']>>
};


/** Node of type ImageSharp */
export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegProgressive: Scalars['Boolean'],
  pngCompressionLevel: Scalars['Int'],
  pngCompressionSpeed: Scalars['Int'],
  grayscale: Scalars['Boolean'],
  duotone?: Maybe<DuotoneGradient>,
  base64: Scalars['Boolean'],
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  rotate: Scalars['Int']
};

/** A connection to a list of items. */
export type ImageSharpConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ImageSharpEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>,
  group?: Maybe<Array<Maybe<ImageSharpGroupConnectionConnection>>>,
};


/** A connection to a list of items. */
export type ImageSharpConnectionDistinctArgs = {
  field?: Maybe<ImageSharpDistinctEnum>
};


/** A connection to a list of items. */
export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field?: Maybe<ImageSharpGroupEnum>
};

export type ImageSharpConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ImageSharpConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ImageSharpConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<ImageSharpConnectionInternalContentDigestQueryString_2>,
  type?: Maybe<ImageSharpConnectionInternalTypeQueryString_2>,
  owner?: Maybe<ImageSharpConnectionInternalOwnerQueryString_2>,
};

export type ImageSharpConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ImageSharpConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ImageSharpConnectionSort = {
  fields: Array<Maybe<ImageSharpConnectionSortByFieldsEnum>>,
  order?: Maybe<Array<Maybe<ImageSharpConnectionSortOrderValues>>>,
};

export enum ImageSharpConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName'
}

export enum ImageSharpConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum ImageSharpDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

/** An edge in a connection. */
export type ImageSharpEdge = {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>,
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>,
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>,
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

/** A connection to a list of items. */
export type ImageSharpGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ImageSharpGroupConnectionEdge>>>,
  field?: Maybe<Scalars['String']>,
  fieldValue?: Maybe<Scalars['String']>,
  totalCount?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type ImageSharpGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>,
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>,
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export type ImageSharpIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ImageSharpInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ImageSharpInternalInputObject_2 = {
  contentDigest?: Maybe<ImageSharpInternalContentDigestQueryString_2>,
  type?: Maybe<ImageSharpInternalTypeQueryString_2>,
  owner?: Maybe<ImageSharpInternalOwnerQueryString_2>,
};

export type ImageSharpInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ImageSharpInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type Internal_10 = {
  contentDigest?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
};

export type Internal_11 = {
  contentDigest?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  mediaType?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
};

export type Internal_12 = {
  contentDigest?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
};

export type Internal_13 = {
  contentDigest?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
};

export type Internal_14 = {
  contentDigest?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
};

export type Internal_8 = {
  type?: Maybe<Scalars['String']>,
  contentDigest?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
};

export type Internal_9 = {
  contentDigest?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
};

/** An object with an id, parent, and children */
export type Node = {
  /** The id of the node. */
  id: Scalars['ID'],
  /** The parent of this node. */
  parent?: Maybe<Node>,
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>,
};

export type OriginalHeightQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type OriginalHeightQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type OriginalSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type OriginalSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type OriginalTypeName_3 = {
  width?: Maybe<OriginalWidthQueryFloat_3>,
  height?: Maybe<OriginalHeightQueryFloat_3>,
  src?: Maybe<OriginalSrcQueryString_3>,
};

export type OriginalTypeName_4 = {
  width?: Maybe<OriginalWidthQueryFloat_4>,
  height?: Maybe<OriginalHeightQueryFloat_4>,
  src?: Maybe<OriginalSrcQueryString_4>,
};

export type OriginalWidthQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type OriginalWidthQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type OtherSkills_2 = {
  description?: Maybe<Scalars['String']>,
  skills?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type PackageJson_2 = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<Dependencies_2>>>,
  devDependencies?: Maybe<Array<Maybe<DevDependencies_2>>>,
  peerDependencies?: Maybe<Array<Maybe<PeerDependencies_2>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating, are there more items? */
  hasNextPage: Scalars['Boolean'],
};

export type PeerDependencies_2 = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type PluginOptions_2 = {
  pathToConfigModule?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type PublicUrlQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type PublicUrlQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type Query = {
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>,
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>,
  /** Connection to all Directory nodes */
  allDirectory?: Maybe<DirectoryConnection>,
  /** Connection to all File nodes */
  allFile?: Maybe<FileConnection>,
  /** Connection to all ImageSharp nodes */
  allImageSharp?: Maybe<ImageSharpConnection>,
  /** Connection to all DataJson nodes */
  allDataJson?: Maybe<DataJsonConnection>,
  sitePage?: Maybe<SitePage>,
  sitePlugin?: Maybe<SitePlugin>,
  site?: Maybe<Site>,
  directory?: Maybe<Directory>,
  file?: Maybe<File>,
  imageSharp?: Maybe<ImageSharp>,
  dataJson?: Maybe<DataJson>,
};


export type QueryAllSitePageArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SitePageConnectionSort>,
  filter?: Maybe<FilterSitePage>
};


export type QueryAllSitePluginArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SitePluginConnectionSort>,
  filter?: Maybe<FilterSitePlugin>
};


export type QueryAllDirectoryArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<DirectoryConnectionSort>,
  filter?: Maybe<FilterDirectory>
};


export type QueryAllFileArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<FileConnectionSort>,
  filter?: Maybe<FilterFile>
};


export type QueryAllImageSharpArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<ImageSharpConnectionSort>,
  filter?: Maybe<FilterImageSharp>
};


export type QueryAllDataJsonArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<DataJsonConnectionSort>,
  filter?: Maybe<FilterDataJson>
};


export type QuerySitePageArgs = {
  jsonName?: Maybe<SitePageJsonNameQueryString>,
  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>,
  path?: Maybe<SitePagePathQueryString_2>,
  component?: Maybe<SitePageComponentQueryString>,
  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>,
  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>,
  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>,
  componentPath?: Maybe<SitePageComponentPathQueryString>,
  id?: Maybe<SitePageIdQueryString_2>,
  internal?: Maybe<SitePageInternalInputObject_2>
};


export type QuerySitePluginArgs = {
  resolve?: Maybe<SitePluginResolveQueryString_2>,
  id?: Maybe<SitePluginIdQueryString_2>,
  name?: Maybe<SitePluginNameQueryString_2>,
  version?: Maybe<SitePluginVersionQueryString_2>,
  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>,
  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>,
  browserAPIs?: Maybe<SitePluginBrowserApIsQueryList_2>,
  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>,
  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>,
  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>,
  internal?: Maybe<SitePluginInternalInputObject_2>
};


export type QuerySiteArgs = {
  siteMetadata?: Maybe<SiteSiteMetadataInputObject_2>,
  port?: Maybe<SitePortQueryString_2>,
  host?: Maybe<SiteHostQueryString_2>,
  pathPrefix?: Maybe<SitePathPrefixQueryString_2>,
  polyfill?: Maybe<SitePolyfillQueryBoolean_2>,
  buildTime?: Maybe<SiteBuildTimeQueryString_2>,
  id?: Maybe<SiteIdQueryString_2>,
  internal?: Maybe<SiteInternalInputObject_2>
};


export type QueryDirectoryArgs = {
  id?: Maybe<DirectoryIdQueryString_2>,
  internal?: Maybe<DirectoryInternalInputObject_2>,
  sourceInstanceName?: Maybe<DirectorySourceInstanceNameQueryString_2>,
  absolutePath?: Maybe<DirectoryAbsolutePathQueryString_2>,
  relativePath?: Maybe<DirectoryRelativePathQueryString_2>,
  extension?: Maybe<DirectoryExtensionQueryString_2>,
  size?: Maybe<DirectorySizeQueryInteger_2>,
  prettySize?: Maybe<DirectoryPrettySizeQueryString_2>,
  modifiedTime?: Maybe<DirectoryModifiedTimeQueryString_2>,
  accessTime?: Maybe<DirectoryAccessTimeQueryString_2>,
  changeTime?: Maybe<DirectoryChangeTimeQueryString_2>,
  birthTime?: Maybe<DirectoryBirthTimeQueryString_2>,
  root?: Maybe<DirectoryRootQueryString_2>,
  dir?: Maybe<DirectoryDirQueryString_2>,
  base?: Maybe<DirectoryBaseQueryString_2>,
  ext?: Maybe<DirectoryExtQueryString_2>,
  name?: Maybe<DirectoryNameQueryString_2>,
  relativeDirectory?: Maybe<DirectoryRelativeDirectoryQueryString_2>,
  dev?: Maybe<DirectoryDevQueryInteger_2>,
  mode?: Maybe<DirectoryModeQueryInteger_2>,
  nlink?: Maybe<DirectoryNlinkQueryInteger_2>,
  uid?: Maybe<DirectoryUidQueryInteger_2>,
  gid?: Maybe<DirectoryGidQueryInteger_2>,
  rdev?: Maybe<DirectoryRdevQueryInteger_2>,
  blksize?: Maybe<DirectoryBlksizeQueryInteger_2>,
  ino?: Maybe<DirectoryInoQueryFloat_2>,
  blocks?: Maybe<DirectoryBlocksQueryInteger_2>,
  atimeMs?: Maybe<DirectoryAtimeMsQueryFloat_2>,
  mtimeMs?: Maybe<DirectoryMtimeMsQueryFloat_2>,
  ctimeMs?: Maybe<DirectoryCtimeMsQueryFloat_2>,
  birthtimeMs?: Maybe<DirectoryBirthtimeMsQueryFloat_2>,
  atime?: Maybe<DirectoryAtimeQueryString_2>,
  mtime?: Maybe<DirectoryMtimeQueryString_2>,
  ctime?: Maybe<DirectoryCtimeQueryString_2>,
  birthtime?: Maybe<DirectoryBirthtimeQueryString_2>
};


export type QueryFileArgs = {
  id?: Maybe<FileIdQueryString_2>,
  internal?: Maybe<FileInternalInputObject_2>,
  sourceInstanceName?: Maybe<FileSourceInstanceNameQueryString_2>,
  absolutePath?: Maybe<FileAbsolutePathQueryString_2>,
  relativePath?: Maybe<FileRelativePathQueryString_2>,
  extension?: Maybe<FileExtensionQueryString_2>,
  size?: Maybe<FileSizeQueryInteger_2>,
  prettySize?: Maybe<FilePrettySizeQueryString_2>,
  modifiedTime?: Maybe<FileModifiedTimeQueryString_2>,
  accessTime?: Maybe<FileAccessTimeQueryString_2>,
  changeTime?: Maybe<FileChangeTimeQueryString_2>,
  birthTime?: Maybe<FileBirthTimeQueryString_2>,
  root?: Maybe<FileRootQueryString_2>,
  dir?: Maybe<FileDirQueryString_2>,
  base?: Maybe<FileBaseQueryString_2>,
  ext?: Maybe<FileExtQueryString_2>,
  name?: Maybe<FileNameQueryString_2>,
  relativeDirectory?: Maybe<FileRelativeDirectoryQueryString_2>,
  dev?: Maybe<FileDevQueryInteger_2>,
  mode?: Maybe<FileModeQueryInteger_2>,
  nlink?: Maybe<FileNlinkQueryInteger_2>,
  uid?: Maybe<FileUidQueryInteger_2>,
  gid?: Maybe<FileGidQueryInteger_2>,
  rdev?: Maybe<FileRdevQueryInteger_2>,
  blksize?: Maybe<FileBlksizeQueryInteger_2>,
  ino?: Maybe<FileInoQueryFloat_2>,
  blocks?: Maybe<FileBlocksQueryInteger_2>,
  atimeMs?: Maybe<FileAtimeMsQueryFloat_2>,
  mtimeMs?: Maybe<FileMtimeMsQueryFloat_2>,
  ctimeMs?: Maybe<FileCtimeMsQueryFloat_2>,
  birthtimeMs?: Maybe<FileBirthtimeMsQueryFloat_2>,
  atime?: Maybe<FileAtimeQueryString_2>,
  mtime?: Maybe<FileMtimeQueryString_2>,
  ctime?: Maybe<FileCtimeQueryString_2>,
  birthtime?: Maybe<FileBirthtimeQueryString_2>,
  publicURL?: Maybe<PublicUrlQueryString_3>
};


export type QueryImageSharpArgs = {
  id?: Maybe<ImageSharpIdQueryString_2>,
  internal?: Maybe<ImageSharpInternalInputObject_2>,
  fixed?: Maybe<FixedTypeName_3>,
  resolutions?: Maybe<ResolutionsTypeName_3>,
  fluid?: Maybe<FluidTypeName_3>,
  sizes?: Maybe<SizesTypeName_3>,
  original?: Maybe<OriginalTypeName_3>,
  resize?: Maybe<ResizeTypeName_3>
};


export type QueryDataJsonArgs = {
  key?: Maybe<DataJsonKeyQueryString_2>,
  title?: Maybe<DataJsonTitleQueryString_2>,
  content?: Maybe<DataJsonContentQueryString_2>,
  image?: Maybe<DataJsonImageQueryString_2>,
  familiarSkills?: Maybe<DataJsonFamiliarSkillsInputObject_2>,
  otherSkills?: Maybe<DataJsonOtherSkillsInputObject_2>,
  footer?: Maybe<DataJsonFooterQueryString_2>,
  id?: Maybe<DataJsonIdQueryString_2>,
  internal?: Maybe<DataJsonInternalInputObject_2>
};

export type ResizeAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ResizeAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ResizeHeightQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type ResizeHeightQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type ResizeOriginalNameQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResizeOriginalNameQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResizeSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResizeSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResizeTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResizeTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResizeTypeName_3 = {
  src?: Maybe<ResizeSrcQueryString_3>,
  tracedSVG?: Maybe<ResizeTracedSvgQueryString_3>,
  width?: Maybe<ResizeWidthQueryInt_3>,
  height?: Maybe<ResizeHeightQueryInt_3>,
  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_3>,
  originalName?: Maybe<ResizeOriginalNameQueryString_3>,
};

export type ResizeTypeName_4 = {
  src?: Maybe<ResizeSrcQueryString_4>,
  tracedSVG?: Maybe<ResizeTracedSvgQueryString_4>,
  width?: Maybe<ResizeWidthQueryInt_4>,
  height?: Maybe<ResizeHeightQueryInt_4>,
  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_4>,
  originalName?: Maybe<ResizeOriginalNameQueryString_4>,
};

export type ResizeWidthQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type ResizeWidthQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type ResolutionsAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ResolutionsAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ResolutionsBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsHeightQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ResolutionsHeightQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ResolutionsOriginalNameQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsOriginalNameQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ResolutionsTypeName_3 = {
  base64?: Maybe<ResolutionsBase64QueryString_3>,
  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_3>,
  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>,
  width?: Maybe<ResolutionsWidthQueryFloat_3>,
  height?: Maybe<ResolutionsHeightQueryFloat_3>,
  src?: Maybe<ResolutionsSrcQueryString_3>,
  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>,
  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_3>,
  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_3>,
  originalName?: Maybe<ResolutionsOriginalNameQueryString_3>,
};

export type ResolutionsTypeName_4 = {
  base64?: Maybe<ResolutionsBase64QueryString_4>,
  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_4>,
  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>,
  width?: Maybe<ResolutionsWidthQueryFloat_4>,
  height?: Maybe<ResolutionsHeightQueryFloat_4>,
  src?: Maybe<ResolutionsSrcQueryString_4>,
  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>,
  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_4>,
  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_4>,
  originalName?: Maybe<ResolutionsOriginalNameQueryString_4>,
};

export type ResolutionsWidthQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ResolutionsWidthQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

/** Node of type Site */
export type Site = Node & {
  /** The id of this node. */
  id: Scalars['ID'],
  /** The parent of this node. */
  parent?: Maybe<Node>,
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>,
  siteMetadata?: Maybe<SiteMetadata_2>,
  port?: Maybe<Scalars['Date']>,
  host?: Maybe<Scalars['String']>,
  pathPrefix?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  buildTime?: Maybe<Scalars['Date']>,
  internal?: Maybe<Internal_14>,
};


/** Node of type Site */
export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


/** Node of type Site */
export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteBuildTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SiteHostQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SiteIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SiteInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SiteInternalInputObject_2 = {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>,
  type?: Maybe<SiteInternalTypeQueryString_2>,
  owner?: Maybe<SiteInternalOwnerQueryString_2>,
};

export type SiteInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SiteInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SiteMetadata_2 = {
  title?: Maybe<Scalars['String']>,
};

/** Node of type SitePage */
export type SitePage = Node & {
  /** The id of this node. */
  id: Scalars['ID'],
  /** The parent of this node. */
  parent?: Maybe<Node>,
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>,
  jsonName?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
  internal?: Maybe<Internal_8>,
};

export type SitePageComponentChunkNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageComponentPathQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageComponentQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** A connection to a list of items. */
export type SitePageConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePageEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>,
  group?: Maybe<Array<Maybe<SitePageGroupConnectionConnection>>>,
};


/** A connection to a list of items. */
export type SitePageConnectionDistinctArgs = {
  field?: Maybe<SitePageDistinctEnum>
};


/** A connection to a list of items. */
export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field?: Maybe<SitePageGroupEnum>
};

export type SitePageConnectionComponentChunkNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionComponentPathQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionComponentQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionInternalComponentNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionInternalDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionInternalInputObject_2 = {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>,
  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>,
  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>,
  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>,
};

export type SitePageConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorBrowserApIsQueryList = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorIdQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorInputObject = {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>,
  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>,
  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>,
  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>,
  pluginOptions?: Maybe<SitePageConnectionPluginCreatorPluginOptionsInputObject>,
  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>,
  browserAPIs?: Maybe<SitePageConnectionPluginCreatorBrowserApIsQueryList>,
  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>,
  pluginFilepath?: Maybe<SitePageConnectionPluginCreatorPluginFilepathQueryString>,
  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>,
  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>,
};

export type SitePageConnectionPluginCreatorInternalContentDigestQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorInternalInputObject = {
  contentDigest?: Maybe<SitePageConnectionPluginCreatorInternalContentDigestQueryString>,
  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>,
  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>,
};

export type SitePageConnectionPluginCreatorInternalOwnerQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorInternalTypeQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorNodeApIsQueryList = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonAuthorQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject = {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString>,
  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString>,
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList = {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject>,
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject = {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString>,
  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString>,
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList = {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject>,
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonInputObject = {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>,
  description?: Maybe<SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString>,
  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>,
  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>,
  author?: Maybe<SitePageConnectionPluginCreatorPackageJsonAuthorQueryString>,
  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>,
  dependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList>,
  devDependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList>,
  peerDependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList>,
  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>,
};

export type SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonLicenseQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonMainQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject = {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString>,
  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString>,
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList = {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject>,
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPackageJsonVersionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPluginFilepathQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPluginOptionsInputObject = {
  pathToConfigModule?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString>,
  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>,
  pathCheck?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean>,
};

export type SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type SitePageConnectionPluginCreatorPluginOptionsPathQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorResolveQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorSsrApIsQueryList = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionPluginCreatorVersionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageConnectionSort = {
  fields: Array<Maybe<SitePageConnectionSortByFieldsEnum>>,
  order?: Maybe<Array<Maybe<SitePageConnectionSortOrderValues>>>,
};

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner'
}

export enum SitePageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SitePageDistinctEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner'
}

/** An edge in a connection. */
export type SitePageEdge = {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>,
  /** The next edge in the connection */
  next?: Maybe<SitePage>,
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>,
};

/** A connection to a list of items. */
export type SitePageGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePageGroupConnectionEdge>>>,
  field?: Maybe<Scalars['String']>,
  fieldValue?: Maybe<Scalars['String']>,
  totalCount?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type SitePageGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>,
  /** The next edge in the connection */
  next?: Maybe<SitePage>,
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>,
};

export enum SitePageGroupEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner'
}

export type SitePageIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageInternalComponentNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageInternalDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageInternalInputObject_2 = {
  type?: Maybe<SitePageInternalTypeQueryString_2>,
  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>,
  description?: Maybe<SitePageInternalDescriptionQueryString>,
  owner?: Maybe<SitePageInternalOwnerQueryString_2>,
};

export type SitePageInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePageJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorBrowserApIsQueryList = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorIdQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorInputObject = {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>,
  id?: Maybe<SitePagePluginCreatorIdQueryString>,
  name?: Maybe<SitePagePluginCreatorNameQueryString>,
  version?: Maybe<SitePagePluginCreatorVersionQueryString>,
  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>,
  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>,
  browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>,
  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>,
  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>,
  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>,
  internal?: Maybe<SitePagePluginCreatorInternalInputObject>,
};

export type SitePagePluginCreatorInternalContentDigestQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorInternalInputObject = {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>,
  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>,
  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>,
};

export type SitePagePluginCreatorInternalOwnerQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorInternalTypeQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorNodeApIsQueryList = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonAuthorQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonDependenciesInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>,
  version?: Maybe<SitePagePluginCreatorPackageJsonDependenciesVersionQueryString>,
};

export type SitePagePluginCreatorPackageJsonDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonDependenciesQueryList = {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>,
};

export type SitePagePluginCreatorPackageJsonDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonDevDependenciesInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>,
  version?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString>,
};

export type SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonDevDependenciesQueryList = {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>,
};

export type SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>,
  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>,
  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>,
  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>,
  author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>,
  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>,
  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>,
  devDependencies?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesQueryList>,
  peerDependencies?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesQueryList>,
  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>,
};

export type SitePagePluginCreatorPackageJsonKeywordsQueryList = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonLicenseQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonMainQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>,
  version?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString>,
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesQueryList = {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesInputObject>,
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPackageJsonVersionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPluginFilepathQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPluginOptionsInputObject = {
  pathToConfigModule?: Maybe<SitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString>,
  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>,
  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>,
};

export type SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type SitePagePluginCreatorPluginOptionsPathQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorResolveQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorSsrApIsQueryList = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePagePluginCreatorVersionQueryString = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePathPrefixQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** Node of type SitePlugin */
export type SitePlugin = Node & {
  /** The id of this node. */
  id: Scalars['ID'],
  /** The parent of this node. */
  parent?: Maybe<Node>,
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<PluginOptions_2>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<PackageJson_2>,
  internal?: Maybe<Internal_9>,
};

export type SitePluginBrowserApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** A connection to a list of items. */
export type SitePluginConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePluginEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>,
  group?: Maybe<Array<Maybe<SitePluginGroupConnectionConnection>>>,
};


/** A connection to a list of items. */
export type SitePluginConnectionDistinctArgs = {
  field?: Maybe<SitePluginDistinctEnum>
};


/** A connection to a list of items. */
export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field?: Maybe<SitePluginGroupEnum>
};

export type SitePluginConnectionBrowserApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>,
  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>,
  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>,
};

export type SitePluginConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionNodeApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonAuthorQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonDependenciesInputObject_2 = {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>,
  version?: Maybe<SitePluginConnectionPackageJsonDependenciesVersionQueryString_2>,
};

export type SitePluginConnectionPackageJsonDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>,
};

export type SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonDevDependenciesInputObject_2 = {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>,
  version?: Maybe<SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2>,
};

export type SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonDevDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDevDependenciesInputObject_2>,
};

export type SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonInputObject_2 = {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>,
  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>,
  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>,
  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>,
  author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>,
  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>,
  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>,
  devDependencies?: Maybe<SitePluginConnectionPackageJsonDevDependenciesQueryList_2>,
  peerDependencies?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesQueryList_2>,
  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>,
};

export type SitePluginConnectionPackageJsonKeywordsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonLicenseQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonMainQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 = {
  name?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2>,
  version?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2>,
};

export type SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesInputObject_2>,
};

export type SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPackageJsonVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPluginFilepathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPluginOptionsInputObject_2 = {
  pathToConfigModule?: Maybe<SitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2>,
  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>,
  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>,
};

export type SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type SitePluginConnectionPluginOptionsPathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionResolveQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionSort = {
  fields: Array<Maybe<SitePluginConnectionSortByFieldsEnum>>,
  order?: Maybe<Array<Maybe<SitePluginConnectionSortOrderValues>>>,
};

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum SitePluginConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SitePluginConnectionSsrApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginConnectionVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export enum SitePluginDistinctEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

/** An edge in a connection. */
export type SitePluginEdge = {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>,
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>,
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>,
};

/** A connection to a list of items. */
export type SitePluginGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePluginGroupConnectionEdge>>>,
  field?: Maybe<Scalars['String']>,
  fieldValue?: Maybe<Scalars['String']>,
  totalCount?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type SitePluginGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>,
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>,
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginGroupEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export type SitePluginIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginInternalInputObject_2 = {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>,
  type?: Maybe<SitePluginInternalTypeQueryString_2>,
  owner?: Maybe<SitePluginInternalOwnerQueryString_2>,
};

export type SitePluginInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginNodeApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonAuthorQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependenciesInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>,
  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>,
};

export type SitePluginPackageJsonDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>,
};

export type SitePluginPackageJsonDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDevDependenciesInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>,
  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>,
};

export type SitePluginPackageJsonDevDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDevDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>,
};

export type SitePluginPackageJsonDevDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>,
  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>,
  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>,
  main?: Maybe<SitePluginPackageJsonMainQueryString_2>,
  author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>,
  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>,
  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>,
};

export type SitePluginPackageJsonKeywordsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonLicenseQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonMainQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonPeerDependenciesInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>,
  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>,
};

export type SitePluginPackageJsonPeerDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonPeerDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>,
};

export type SitePluginPackageJsonPeerDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginFilepathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsInputObject_2 = {
  pathToConfigModule?: Maybe<SitePluginPluginOptionsPathToConfigModuleQueryString_2>,
  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>,
  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>,
};

export type SitePluginPluginOptionsPathCheckQueryBoolean_2 = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type SitePluginPluginOptionsPathQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPluginOptionsPathToConfigModuleQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginResolveQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginSsrApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePolyfillQueryBoolean_2 = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};

export type SitePortQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SiteSiteMetadataInputObject_2 = {
  title?: Maybe<SiteSiteMetadataTitleQueryString_2>,
};

export type SiteSiteMetadataTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type SizesAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type SizesBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesOriginalImgQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesOriginalImgQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesOriginalNameQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesOriginalNameQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesPresentationHeightQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type SizesPresentationHeightQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type SizesPresentationWidthQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type SizesPresentationWidthQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type SizesSizesQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesSizesQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SizesTypeName_3 = {
  base64?: Maybe<SizesBase64QueryString_3>,
  tracedSVG?: Maybe<SizesTracedSvgQueryString_3>,
  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>,
  src?: Maybe<SizesSrcQueryString_3>,
  srcSet?: Maybe<SizesSrcSetQueryString_3>,
  srcWebp?: Maybe<SizesSrcWebpQueryString_3>,
  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_3>,
  sizes?: Maybe<SizesSizesQueryString_3>,
  originalImg?: Maybe<SizesOriginalImgQueryString_3>,
  originalName?: Maybe<SizesOriginalNameQueryString_3>,
  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_3>,
  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_3>,
};

export type SizesTypeName_4 = {
  base64?: Maybe<SizesBase64QueryString_4>,
  tracedSVG?: Maybe<SizesTracedSvgQueryString_4>,
  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>,
  src?: Maybe<SizesSrcQueryString_4>,
  srcSet?: Maybe<SizesSrcSetQueryString_4>,
  srcWebp?: Maybe<SizesSrcWebpQueryString_4>,
  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_4>,
  sizes?: Maybe<SizesSizesQueryString_4>,
  originalImg?: Maybe<SizesOriginalImgQueryString_4>,
  originalName?: Maybe<SizesOriginalNameQueryString_4>,
  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_4>,
  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_4>,
};
export type GetIntroDataQueryVariables = {};


export type GetIntroDataQuery = ({ __typename?: 'Query' } & { dataJson: Maybe<({ __typename?: 'DataJson' } & Pick<DataJson, 'title' | 'content' | 'footer'> & { image: Maybe<({ __typename?: 'File' } & Pick<File, 'id'> & { childImageSharp: Maybe<({ __typename?: 'ImageSharp' } & { fluid: Maybe<({ __typename?: 'ImageSharpFluid' } & Pick<ImageSharpFluid, 'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'>)> })> })>, familiarSkills: Maybe<({ __typename?: 'familiarSkills_2' } & Pick<FamiliarSkills_2, 'description' | 'skills'>)>, otherSkills: Maybe<({ __typename?: 'otherSkills_2' } & Pick<OtherSkills_2, 'description' | 'skills'>)> })> });

declare module '*/getIntroData.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const getIntroData: DocumentNode;

  export default defaultDocument;
}
    