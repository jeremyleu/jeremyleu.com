export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  introJson?: Maybe<IntroJson>;
  allIntroJson: IntroJsonConnection;
  schoolJson?: Maybe<SchoolJson>;
  allSchoolJson: SchoolJsonConnection;
  workJson?: Maybe<WorkJson>;
  allWorkJson: WorkJsonConnection;
  projectsJson?: Maybe<ProjectsJson>;
  allProjectsJson: ProjectsJsonConnection;
  contactJson?: Maybe<ContactJson>;
  allContactJson: ContactJsonConnection;
  dataJson?: Maybe<DataJson>;
  allDataJson: DataJsonConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childDataJson?: Maybe<DataJsonFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryIntroJsonArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  faces?: Maybe<FileFilterListInput>;
  familiarSkills?: Maybe<SkillsFilterInput>;
  otherSkills?: Maybe<SkillsFilterInput>;
  footer?: Maybe<StringQueryOperatorInput>;
  resume?: Maybe<FileFilterInput>;
  numSections?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllIntroJsonArgs = {
  filter?: Maybe<IntroJsonFilterInput>;
  sort?: Maybe<IntroJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySchoolJsonArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  titleEmoji?: Maybe<StringQueryOperatorInput>;
  titleEmojiLabel?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  geisel?: Maybe<FileFilterInput>;
  courses?: Maybe<StringQueryOperatorInput>;
  numSections?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSchoolJsonArgs = {
  filter?: Maybe<SchoolJsonFilterInput>;
  sort?: Maybe<SchoolJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWorkJsonArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  work?: Maybe<JobFilterListInput>;
  numSections?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWorkJsonArgs = {
  filter?: Maybe<WorkJsonFilterInput>;
  sort?: Maybe<WorkJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProjectsJsonArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<ProjectFilterListInput>;
  numSections?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllProjectsJsonArgs = {
  filter?: Maybe<ProjectsJsonFilterInput>;
  sort?: Maybe<ProjectsJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContactJsonArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  titleEmoji?: Maybe<StringQueryOperatorInput>;
  titleEmojiLabel?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  linkedIn?: Maybe<StringQueryOperatorInput>;
  instagram?: Maybe<StringQueryOperatorInput>;
  gitHub?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  footer?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContactJsonArgs = {
  filter?: Maybe<ContactJsonFilterInput>;
  sort?: Maybe<ContactJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDataJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  linkedIn?: Maybe<StringQueryOperatorInput>;
  instagram?: Maybe<StringQueryOperatorInput>;
  gitHub?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  footer?: Maybe<StringQueryOperatorInput>;
  numSections?: Maybe<IntQueryOperatorInput>;
  faces?: Maybe<FileFilterListInput>;
  familiarSkills?: Maybe<DataJsonFamiliarSkillsFilterInput>;
  otherSkills?: Maybe<DataJsonOtherSkillsFilterInput>;
  resume?: Maybe<FileFilterInput>;
  titleEmoji?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<DataJsonProjectsFilterListInput>;
  geisel?: Maybe<FileFilterInput>;
  courses?: Maybe<StringQueryOperatorInput>;
  work?: Maybe<DataJsonWorkFilterListInput>;
  titleEmojiLabel?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllDataJsonArgs = {
  filter?: Maybe<DataJsonFilterInput>;
  sort?: Maybe<DataJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};


export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DataJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  linkedIn?: Maybe<StringQueryOperatorInput>;
  instagram?: Maybe<StringQueryOperatorInput>;
  gitHub?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  footer?: Maybe<StringQueryOperatorInput>;
  numSections?: Maybe<IntQueryOperatorInput>;
  faces?: Maybe<FileFilterListInput>;
  familiarSkills?: Maybe<DataJsonFamiliarSkillsFilterInput>;
  otherSkills?: Maybe<DataJsonOtherSkillsFilterInput>;
  resume?: Maybe<FileFilterInput>;
  titleEmoji?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<DataJsonProjectsFilterListInput>;
  geisel?: Maybe<FileFilterInput>;
  courses?: Maybe<StringQueryOperatorInput>;
  work?: Maybe<DataJsonWorkFilterListInput>;
  titleEmojiLabel?: Maybe<StringQueryOperatorInput>;
};

export type FileFilterListInput = {
  elemMatch?: Maybe<FileFilterInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childDataJson?: Maybe<DataJsonFilterInput>;
};

export type DataJsonFamiliarSkillsFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
  skills?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonOtherSkillsFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
  skills?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonProjectsFilterListInput = {
  elemMatch?: Maybe<DataJsonProjectsFilterInput>;
};

export type DataJsonProjectsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  codeLink?: Maybe<StringQueryOperatorInput>;
  mobileTitle?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonWorkFilterListInput = {
  elemMatch?: Maybe<DataJsonWorkFilterInput>;
};

export type DataJsonWorkFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childDataJson?: Maybe<DataJson>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

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
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type DataJson = Node & {
  __typename?: 'DataJson';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedIn?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  gitHub?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  numSections?: Maybe<Scalars['Int']>;
  faces?: Maybe<Array<Maybe<File>>>;
  familiarSkills?: Maybe<DataJsonFamiliarSkills>;
  otherSkills?: Maybe<DataJsonOtherSkills>;
  resume?: Maybe<File>;
  titleEmoji?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<DataJsonProjects>>>;
  geisel?: Maybe<File>;
  courses?: Maybe<Array<Maybe<Scalars['String']>>>;
  work?: Maybe<Array<Maybe<DataJsonWork>>>;
  titleEmojiLabel?: Maybe<Scalars['String']>;
};

export type DataJsonFamiliarSkills = {
  __typename?: 'DataJsonFamiliarSkills';
  description?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DataJsonOtherSkills = {
  __typename?: 'DataJsonOtherSkills';
  description?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DataJsonProjects = {
  __typename?: 'DataJsonProjects';
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Scalars['String']>>>;
  link?: Maybe<Scalars['String']>;
  codeLink?: Maybe<Scalars['String']>;
  mobileTitle?: Maybe<Scalars['String']>;
};

export type DataJsonWork = {
  __typename?: 'DataJsonWork';
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Scalars['String']>>>;
  link?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum FileFieldsEnum {
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
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildDataJsonId = 'childDataJson___id',
  ChildDataJsonParentId = 'childDataJson___parent___id',
  ChildDataJsonParentParentId = 'childDataJson___parent___parent___id',
  ChildDataJsonParentParentChildren = 'childDataJson___parent___parent___children',
  ChildDataJsonParentChildren = 'childDataJson___parent___children',
  ChildDataJsonParentChildrenId = 'childDataJson___parent___children___id',
  ChildDataJsonParentChildrenChildren = 'childDataJson___parent___children___children',
  ChildDataJsonParentInternalContent = 'childDataJson___parent___internal___content',
  ChildDataJsonParentInternalContentDigest = 'childDataJson___parent___internal___contentDigest',
  ChildDataJsonParentInternalDescription = 'childDataJson___parent___internal___description',
  ChildDataJsonParentInternalFieldOwners = 'childDataJson___parent___internal___fieldOwners',
  ChildDataJsonParentInternalIgnoreType = 'childDataJson___parent___internal___ignoreType',
  ChildDataJsonParentInternalMediaType = 'childDataJson___parent___internal___mediaType',
  ChildDataJsonParentInternalOwner = 'childDataJson___parent___internal___owner',
  ChildDataJsonParentInternalType = 'childDataJson___parent___internal___type',
  ChildDataJsonChildren = 'childDataJson___children',
  ChildDataJsonChildrenId = 'childDataJson___children___id',
  ChildDataJsonChildrenParentId = 'childDataJson___children___parent___id',
  ChildDataJsonChildrenParentChildren = 'childDataJson___children___parent___children',
  ChildDataJsonChildrenChildren = 'childDataJson___children___children',
  ChildDataJsonChildrenChildrenId = 'childDataJson___children___children___id',
  ChildDataJsonChildrenChildrenChildren = 'childDataJson___children___children___children',
  ChildDataJsonChildrenInternalContent = 'childDataJson___children___internal___content',
  ChildDataJsonChildrenInternalContentDigest = 'childDataJson___children___internal___contentDigest',
  ChildDataJsonChildrenInternalDescription = 'childDataJson___children___internal___description',
  ChildDataJsonChildrenInternalFieldOwners = 'childDataJson___children___internal___fieldOwners',
  ChildDataJsonChildrenInternalIgnoreType = 'childDataJson___children___internal___ignoreType',
  ChildDataJsonChildrenInternalMediaType = 'childDataJson___children___internal___mediaType',
  ChildDataJsonChildrenInternalOwner = 'childDataJson___children___internal___owner',
  ChildDataJsonChildrenInternalType = 'childDataJson___children___internal___type',
  ChildDataJsonInternalContent = 'childDataJson___internal___content',
  ChildDataJsonInternalContentDigest = 'childDataJson___internal___contentDigest',
  ChildDataJsonInternalDescription = 'childDataJson___internal___description',
  ChildDataJsonInternalFieldOwners = 'childDataJson___internal___fieldOwners',
  ChildDataJsonInternalIgnoreType = 'childDataJson___internal___ignoreType',
  ChildDataJsonInternalMediaType = 'childDataJson___internal___mediaType',
  ChildDataJsonInternalOwner = 'childDataJson___internal___owner',
  ChildDataJsonInternalType = 'childDataJson___internal___type',
  ChildDataJsonKey = 'childDataJson___key',
  ChildDataJsonTitle = 'childDataJson___title',
  ChildDataJsonContent = 'childDataJson___content',
  ChildDataJsonLinkedIn = 'childDataJson___linkedIn',
  ChildDataJsonInstagram = 'childDataJson___instagram',
  ChildDataJsonGitHub = 'childDataJson___gitHub',
  ChildDataJsonEmail = 'childDataJson___email',
  ChildDataJsonFooter = 'childDataJson___footer',
  ChildDataJsonNumSections = 'childDataJson___numSections',
  ChildDataJsonFaces = 'childDataJson___faces',
  ChildDataJsonFacesSourceInstanceName = 'childDataJson___faces___sourceInstanceName',
  ChildDataJsonFacesAbsolutePath = 'childDataJson___faces___absolutePath',
  ChildDataJsonFacesRelativePath = 'childDataJson___faces___relativePath',
  ChildDataJsonFacesExtension = 'childDataJson___faces___extension',
  ChildDataJsonFacesSize = 'childDataJson___faces___size',
  ChildDataJsonFacesPrettySize = 'childDataJson___faces___prettySize',
  ChildDataJsonFacesModifiedTime = 'childDataJson___faces___modifiedTime',
  ChildDataJsonFacesAccessTime = 'childDataJson___faces___accessTime',
  ChildDataJsonFacesChangeTime = 'childDataJson___faces___changeTime',
  ChildDataJsonFacesBirthTime = 'childDataJson___faces___birthTime',
  ChildDataJsonFacesRoot = 'childDataJson___faces___root',
  ChildDataJsonFacesDir = 'childDataJson___faces___dir',
  ChildDataJsonFacesBase = 'childDataJson___faces___base',
  ChildDataJsonFacesExt = 'childDataJson___faces___ext',
  ChildDataJsonFacesName = 'childDataJson___faces___name',
  ChildDataJsonFacesRelativeDirectory = 'childDataJson___faces___relativeDirectory',
  ChildDataJsonFacesDev = 'childDataJson___faces___dev',
  ChildDataJsonFacesMode = 'childDataJson___faces___mode',
  ChildDataJsonFacesNlink = 'childDataJson___faces___nlink',
  ChildDataJsonFacesUid = 'childDataJson___faces___uid',
  ChildDataJsonFacesGid = 'childDataJson___faces___gid',
  ChildDataJsonFacesRdev = 'childDataJson___faces___rdev',
  ChildDataJsonFacesIno = 'childDataJson___faces___ino',
  ChildDataJsonFacesAtimeMs = 'childDataJson___faces___atimeMs',
  ChildDataJsonFacesMtimeMs = 'childDataJson___faces___mtimeMs',
  ChildDataJsonFacesCtimeMs = 'childDataJson___faces___ctimeMs',
  ChildDataJsonFacesAtime = 'childDataJson___faces___atime',
  ChildDataJsonFacesMtime = 'childDataJson___faces___mtime',
  ChildDataJsonFacesCtime = 'childDataJson___faces___ctime',
  ChildDataJsonFacesBirthtime = 'childDataJson___faces___birthtime',
  ChildDataJsonFacesBirthtimeMs = 'childDataJson___faces___birthtimeMs',
  ChildDataJsonFacesBlksize = 'childDataJson___faces___blksize',
  ChildDataJsonFacesBlocks = 'childDataJson___faces___blocks',
  ChildDataJsonFacesPublicUrl = 'childDataJson___faces___publicURL',
  ChildDataJsonFacesChildImageSharpId = 'childDataJson___faces___childImageSharp___id',
  ChildDataJsonFacesChildImageSharpChildren = 'childDataJson___faces___childImageSharp___children',
  ChildDataJsonFacesId = 'childDataJson___faces___id',
  ChildDataJsonFacesParentId = 'childDataJson___faces___parent___id',
  ChildDataJsonFacesParentChildren = 'childDataJson___faces___parent___children',
  ChildDataJsonFacesChildren = 'childDataJson___faces___children',
  ChildDataJsonFacesChildrenId = 'childDataJson___faces___children___id',
  ChildDataJsonFacesChildrenChildren = 'childDataJson___faces___children___children',
  ChildDataJsonFacesInternalContent = 'childDataJson___faces___internal___content',
  ChildDataJsonFacesInternalContentDigest = 'childDataJson___faces___internal___contentDigest',
  ChildDataJsonFacesInternalDescription = 'childDataJson___faces___internal___description',
  ChildDataJsonFacesInternalFieldOwners = 'childDataJson___faces___internal___fieldOwners',
  ChildDataJsonFacesInternalIgnoreType = 'childDataJson___faces___internal___ignoreType',
  ChildDataJsonFacesInternalMediaType = 'childDataJson___faces___internal___mediaType',
  ChildDataJsonFacesInternalOwner = 'childDataJson___faces___internal___owner',
  ChildDataJsonFacesInternalType = 'childDataJson___faces___internal___type',
  ChildDataJsonFacesChildDataJsonId = 'childDataJson___faces___childDataJson___id',
  ChildDataJsonFacesChildDataJsonChildren = 'childDataJson___faces___childDataJson___children',
  ChildDataJsonFacesChildDataJsonKey = 'childDataJson___faces___childDataJson___key',
  ChildDataJsonFacesChildDataJsonTitle = 'childDataJson___faces___childDataJson___title',
  ChildDataJsonFacesChildDataJsonContent = 'childDataJson___faces___childDataJson___content',
  ChildDataJsonFacesChildDataJsonLinkedIn = 'childDataJson___faces___childDataJson___linkedIn',
  ChildDataJsonFacesChildDataJsonInstagram = 'childDataJson___faces___childDataJson___instagram',
  ChildDataJsonFacesChildDataJsonGitHub = 'childDataJson___faces___childDataJson___gitHub',
  ChildDataJsonFacesChildDataJsonEmail = 'childDataJson___faces___childDataJson___email',
  ChildDataJsonFacesChildDataJsonFooter = 'childDataJson___faces___childDataJson___footer',
  ChildDataJsonFacesChildDataJsonNumSections = 'childDataJson___faces___childDataJson___numSections',
  ChildDataJsonFacesChildDataJsonFaces = 'childDataJson___faces___childDataJson___faces',
  ChildDataJsonFacesChildDataJsonTitleEmoji = 'childDataJson___faces___childDataJson___titleEmoji',
  ChildDataJsonFacesChildDataJsonProjects = 'childDataJson___faces___childDataJson___projects',
  ChildDataJsonFacesChildDataJsonCourses = 'childDataJson___faces___childDataJson___courses',
  ChildDataJsonFacesChildDataJsonWork = 'childDataJson___faces___childDataJson___work',
  ChildDataJsonFacesChildDataJsonTitleEmojiLabel = 'childDataJson___faces___childDataJson___titleEmojiLabel',
  ChildDataJsonFamiliarSkillsDescription = 'childDataJson___familiarSkills___description',
  ChildDataJsonFamiliarSkillsSkills = 'childDataJson___familiarSkills___skills',
  ChildDataJsonOtherSkillsDescription = 'childDataJson___otherSkills___description',
  ChildDataJsonOtherSkillsSkills = 'childDataJson___otherSkills___skills',
  ChildDataJsonResumeSourceInstanceName = 'childDataJson___resume___sourceInstanceName',
  ChildDataJsonResumeAbsolutePath = 'childDataJson___resume___absolutePath',
  ChildDataJsonResumeRelativePath = 'childDataJson___resume___relativePath',
  ChildDataJsonResumeExtension = 'childDataJson___resume___extension',
  ChildDataJsonResumeSize = 'childDataJson___resume___size',
  ChildDataJsonResumePrettySize = 'childDataJson___resume___prettySize',
  ChildDataJsonResumeModifiedTime = 'childDataJson___resume___modifiedTime',
  ChildDataJsonResumeAccessTime = 'childDataJson___resume___accessTime',
  ChildDataJsonResumeChangeTime = 'childDataJson___resume___changeTime',
  ChildDataJsonResumeBirthTime = 'childDataJson___resume___birthTime',
  ChildDataJsonResumeRoot = 'childDataJson___resume___root',
  ChildDataJsonResumeDir = 'childDataJson___resume___dir',
  ChildDataJsonResumeBase = 'childDataJson___resume___base',
  ChildDataJsonResumeExt = 'childDataJson___resume___ext',
  ChildDataJsonResumeName = 'childDataJson___resume___name',
  ChildDataJsonResumeRelativeDirectory = 'childDataJson___resume___relativeDirectory',
  ChildDataJsonResumeDev = 'childDataJson___resume___dev',
  ChildDataJsonResumeMode = 'childDataJson___resume___mode',
  ChildDataJsonResumeNlink = 'childDataJson___resume___nlink',
  ChildDataJsonResumeUid = 'childDataJson___resume___uid',
  ChildDataJsonResumeGid = 'childDataJson___resume___gid',
  ChildDataJsonResumeRdev = 'childDataJson___resume___rdev',
  ChildDataJsonResumeIno = 'childDataJson___resume___ino',
  ChildDataJsonResumeAtimeMs = 'childDataJson___resume___atimeMs',
  ChildDataJsonResumeMtimeMs = 'childDataJson___resume___mtimeMs',
  ChildDataJsonResumeCtimeMs = 'childDataJson___resume___ctimeMs',
  ChildDataJsonResumeAtime = 'childDataJson___resume___atime',
  ChildDataJsonResumeMtime = 'childDataJson___resume___mtime',
  ChildDataJsonResumeCtime = 'childDataJson___resume___ctime',
  ChildDataJsonResumeBirthtime = 'childDataJson___resume___birthtime',
  ChildDataJsonResumeBirthtimeMs = 'childDataJson___resume___birthtimeMs',
  ChildDataJsonResumeBlksize = 'childDataJson___resume___blksize',
  ChildDataJsonResumeBlocks = 'childDataJson___resume___blocks',
  ChildDataJsonResumePublicUrl = 'childDataJson___resume___publicURL',
  ChildDataJsonResumeChildImageSharpId = 'childDataJson___resume___childImageSharp___id',
  ChildDataJsonResumeChildImageSharpChildren = 'childDataJson___resume___childImageSharp___children',
  ChildDataJsonResumeId = 'childDataJson___resume___id',
  ChildDataJsonResumeParentId = 'childDataJson___resume___parent___id',
  ChildDataJsonResumeParentChildren = 'childDataJson___resume___parent___children',
  ChildDataJsonResumeChildren = 'childDataJson___resume___children',
  ChildDataJsonResumeChildrenId = 'childDataJson___resume___children___id',
  ChildDataJsonResumeChildrenChildren = 'childDataJson___resume___children___children',
  ChildDataJsonResumeInternalContent = 'childDataJson___resume___internal___content',
  ChildDataJsonResumeInternalContentDigest = 'childDataJson___resume___internal___contentDigest',
  ChildDataJsonResumeInternalDescription = 'childDataJson___resume___internal___description',
  ChildDataJsonResumeInternalFieldOwners = 'childDataJson___resume___internal___fieldOwners',
  ChildDataJsonResumeInternalIgnoreType = 'childDataJson___resume___internal___ignoreType',
  ChildDataJsonResumeInternalMediaType = 'childDataJson___resume___internal___mediaType',
  ChildDataJsonResumeInternalOwner = 'childDataJson___resume___internal___owner',
  ChildDataJsonResumeInternalType = 'childDataJson___resume___internal___type',
  ChildDataJsonResumeChildDataJsonId = 'childDataJson___resume___childDataJson___id',
  ChildDataJsonResumeChildDataJsonChildren = 'childDataJson___resume___childDataJson___children',
  ChildDataJsonResumeChildDataJsonKey = 'childDataJson___resume___childDataJson___key',
  ChildDataJsonResumeChildDataJsonTitle = 'childDataJson___resume___childDataJson___title',
  ChildDataJsonResumeChildDataJsonContent = 'childDataJson___resume___childDataJson___content',
  ChildDataJsonResumeChildDataJsonLinkedIn = 'childDataJson___resume___childDataJson___linkedIn',
  ChildDataJsonResumeChildDataJsonInstagram = 'childDataJson___resume___childDataJson___instagram',
  ChildDataJsonResumeChildDataJsonGitHub = 'childDataJson___resume___childDataJson___gitHub',
  ChildDataJsonResumeChildDataJsonEmail = 'childDataJson___resume___childDataJson___email',
  ChildDataJsonResumeChildDataJsonFooter = 'childDataJson___resume___childDataJson___footer',
  ChildDataJsonResumeChildDataJsonNumSections = 'childDataJson___resume___childDataJson___numSections',
  ChildDataJsonResumeChildDataJsonFaces = 'childDataJson___resume___childDataJson___faces',
  ChildDataJsonResumeChildDataJsonTitleEmoji = 'childDataJson___resume___childDataJson___titleEmoji',
  ChildDataJsonResumeChildDataJsonProjects = 'childDataJson___resume___childDataJson___projects',
  ChildDataJsonResumeChildDataJsonCourses = 'childDataJson___resume___childDataJson___courses',
  ChildDataJsonResumeChildDataJsonWork = 'childDataJson___resume___childDataJson___work',
  ChildDataJsonResumeChildDataJsonTitleEmojiLabel = 'childDataJson___resume___childDataJson___titleEmojiLabel',
  ChildDataJsonTitleEmoji = 'childDataJson___titleEmoji',
  ChildDataJsonProjects = 'childDataJson___projects',
  ChildDataJsonProjectsTitle = 'childDataJson___projects___title',
  ChildDataJsonProjectsContent = 'childDataJson___projects___content',
  ChildDataJsonProjectsLink = 'childDataJson___projects___link',
  ChildDataJsonProjectsCodeLink = 'childDataJson___projects___codeLink',
  ChildDataJsonProjectsMobileTitle = 'childDataJson___projects___mobileTitle',
  ChildDataJsonGeiselSourceInstanceName = 'childDataJson___geisel___sourceInstanceName',
  ChildDataJsonGeiselAbsolutePath = 'childDataJson___geisel___absolutePath',
  ChildDataJsonGeiselRelativePath = 'childDataJson___geisel___relativePath',
  ChildDataJsonGeiselExtension = 'childDataJson___geisel___extension',
  ChildDataJsonGeiselSize = 'childDataJson___geisel___size',
  ChildDataJsonGeiselPrettySize = 'childDataJson___geisel___prettySize',
  ChildDataJsonGeiselModifiedTime = 'childDataJson___geisel___modifiedTime',
  ChildDataJsonGeiselAccessTime = 'childDataJson___geisel___accessTime',
  ChildDataJsonGeiselChangeTime = 'childDataJson___geisel___changeTime',
  ChildDataJsonGeiselBirthTime = 'childDataJson___geisel___birthTime',
  ChildDataJsonGeiselRoot = 'childDataJson___geisel___root',
  ChildDataJsonGeiselDir = 'childDataJson___geisel___dir',
  ChildDataJsonGeiselBase = 'childDataJson___geisel___base',
  ChildDataJsonGeiselExt = 'childDataJson___geisel___ext',
  ChildDataJsonGeiselName = 'childDataJson___geisel___name',
  ChildDataJsonGeiselRelativeDirectory = 'childDataJson___geisel___relativeDirectory',
  ChildDataJsonGeiselDev = 'childDataJson___geisel___dev',
  ChildDataJsonGeiselMode = 'childDataJson___geisel___mode',
  ChildDataJsonGeiselNlink = 'childDataJson___geisel___nlink',
  ChildDataJsonGeiselUid = 'childDataJson___geisel___uid',
  ChildDataJsonGeiselGid = 'childDataJson___geisel___gid',
  ChildDataJsonGeiselRdev = 'childDataJson___geisel___rdev',
  ChildDataJsonGeiselIno = 'childDataJson___geisel___ino',
  ChildDataJsonGeiselAtimeMs = 'childDataJson___geisel___atimeMs',
  ChildDataJsonGeiselMtimeMs = 'childDataJson___geisel___mtimeMs',
  ChildDataJsonGeiselCtimeMs = 'childDataJson___geisel___ctimeMs',
  ChildDataJsonGeiselAtime = 'childDataJson___geisel___atime',
  ChildDataJsonGeiselMtime = 'childDataJson___geisel___mtime',
  ChildDataJsonGeiselCtime = 'childDataJson___geisel___ctime',
  ChildDataJsonGeiselBirthtime = 'childDataJson___geisel___birthtime',
  ChildDataJsonGeiselBirthtimeMs = 'childDataJson___geisel___birthtimeMs',
  ChildDataJsonGeiselBlksize = 'childDataJson___geisel___blksize',
  ChildDataJsonGeiselBlocks = 'childDataJson___geisel___blocks',
  ChildDataJsonGeiselPublicUrl = 'childDataJson___geisel___publicURL',
  ChildDataJsonGeiselChildImageSharpId = 'childDataJson___geisel___childImageSharp___id',
  ChildDataJsonGeiselChildImageSharpChildren = 'childDataJson___geisel___childImageSharp___children',
  ChildDataJsonGeiselId = 'childDataJson___geisel___id',
  ChildDataJsonGeiselParentId = 'childDataJson___geisel___parent___id',
  ChildDataJsonGeiselParentChildren = 'childDataJson___geisel___parent___children',
  ChildDataJsonGeiselChildren = 'childDataJson___geisel___children',
  ChildDataJsonGeiselChildrenId = 'childDataJson___geisel___children___id',
  ChildDataJsonGeiselChildrenChildren = 'childDataJson___geisel___children___children',
  ChildDataJsonGeiselInternalContent = 'childDataJson___geisel___internal___content',
  ChildDataJsonGeiselInternalContentDigest = 'childDataJson___geisel___internal___contentDigest',
  ChildDataJsonGeiselInternalDescription = 'childDataJson___geisel___internal___description',
  ChildDataJsonGeiselInternalFieldOwners = 'childDataJson___geisel___internal___fieldOwners',
  ChildDataJsonGeiselInternalIgnoreType = 'childDataJson___geisel___internal___ignoreType',
  ChildDataJsonGeiselInternalMediaType = 'childDataJson___geisel___internal___mediaType',
  ChildDataJsonGeiselInternalOwner = 'childDataJson___geisel___internal___owner',
  ChildDataJsonGeiselInternalType = 'childDataJson___geisel___internal___type',
  ChildDataJsonGeiselChildDataJsonId = 'childDataJson___geisel___childDataJson___id',
  ChildDataJsonGeiselChildDataJsonChildren = 'childDataJson___geisel___childDataJson___children',
  ChildDataJsonGeiselChildDataJsonKey = 'childDataJson___geisel___childDataJson___key',
  ChildDataJsonGeiselChildDataJsonTitle = 'childDataJson___geisel___childDataJson___title',
  ChildDataJsonGeiselChildDataJsonContent = 'childDataJson___geisel___childDataJson___content',
  ChildDataJsonGeiselChildDataJsonLinkedIn = 'childDataJson___geisel___childDataJson___linkedIn',
  ChildDataJsonGeiselChildDataJsonInstagram = 'childDataJson___geisel___childDataJson___instagram',
  ChildDataJsonGeiselChildDataJsonGitHub = 'childDataJson___geisel___childDataJson___gitHub',
  ChildDataJsonGeiselChildDataJsonEmail = 'childDataJson___geisel___childDataJson___email',
  ChildDataJsonGeiselChildDataJsonFooter = 'childDataJson___geisel___childDataJson___footer',
  ChildDataJsonGeiselChildDataJsonNumSections = 'childDataJson___geisel___childDataJson___numSections',
  ChildDataJsonGeiselChildDataJsonFaces = 'childDataJson___geisel___childDataJson___faces',
  ChildDataJsonGeiselChildDataJsonTitleEmoji = 'childDataJson___geisel___childDataJson___titleEmoji',
  ChildDataJsonGeiselChildDataJsonProjects = 'childDataJson___geisel___childDataJson___projects',
  ChildDataJsonGeiselChildDataJsonCourses = 'childDataJson___geisel___childDataJson___courses',
  ChildDataJsonGeiselChildDataJsonWork = 'childDataJson___geisel___childDataJson___work',
  ChildDataJsonGeiselChildDataJsonTitleEmojiLabel = 'childDataJson___geisel___childDataJson___titleEmojiLabel',
  ChildDataJsonCourses = 'childDataJson___courses',
  ChildDataJsonWork = 'childDataJson___work',
  ChildDataJsonWorkTitle = 'childDataJson___work___title',
  ChildDataJsonWorkDate = 'childDataJson___work___date',
  ChildDataJsonWorkContent = 'childDataJson___work___content',
  ChildDataJsonWorkLink = 'childDataJson___work___link',
  ChildDataJsonTitleEmojiLabel = 'childDataJson___titleEmojiLabel'
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum DirectoryFieldsEnum {
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
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  android?: Maybe<BooleanQueryOperatorInput>;
  appleIcon?: Maybe<BooleanQueryOperatorInput>;
  appleStartup?: Maybe<BooleanQueryOperatorInput>;
  coast?: Maybe<BooleanQueryOperatorInput>;
  favicons?: Maybe<BooleanQueryOperatorInput>;
  firefox?: Maybe<BooleanQueryOperatorInput>;
  yandex?: Maybe<BooleanQueryOperatorInput>;
  windows?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathToConfigModule?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  icons?: Maybe<SitePluginPluginOptionsIcons>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  android?: Maybe<Scalars['Boolean']>;
  appleIcon?: Maybe<Scalars['Boolean']>;
  appleStartup?: Maybe<Scalars['Boolean']>;
  coast?: Maybe<Scalars['Boolean']>;
  favicons?: Maybe<Scalars['Boolean']>;
  firefox?: Maybe<Scalars['Boolean']>;
  yandex?: Maybe<Scalars['Boolean']>;
  windows?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreatorPluginOptionsLogo = 'pluginCreator___pluginOptions___logo',
  PluginCreatorPluginOptionsIconsAndroid = 'pluginCreator___pluginOptions___icons___android',
  PluginCreatorPluginOptionsIconsAppleIcon = 'pluginCreator___pluginOptions___icons___appleIcon',
  PluginCreatorPluginOptionsIconsAppleStartup = 'pluginCreator___pluginOptions___icons___appleStartup',
  PluginCreatorPluginOptionsIconsCoast = 'pluginCreator___pluginOptions___icons___coast',
  PluginCreatorPluginOptionsIconsFavicons = 'pluginCreator___pluginOptions___icons___favicons',
  PluginCreatorPluginOptionsIconsFirefox = 'pluginCreator___pluginOptions___icons___firefox',
  PluginCreatorPluginOptionsIconsYandex = 'pluginCreator___pluginOptions___icons___yandex',
  PluginCreatorPluginOptionsIconsWindows = 'pluginCreator___pluginOptions___icons___windows',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ImageSharpFieldsEnum {
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
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SkillsFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
  skills?: Maybe<StringQueryOperatorInput>;
};

export type IntroJson = Node & {
  __typename?: 'IntroJson';
  title: Scalars['String'];
  content: Array<Scalars['String']>;
  faces: Array<File>;
  familiarSkills: Skills;
  otherSkills: Skills;
  footer: Scalars['String'];
  resume: File;
  numSections: Scalars['Int'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Skills = {
  __typename?: 'Skills';
  description: Scalars['String'];
  skills: Array<Scalars['String']>;
};

export type IntroJsonFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  faces?: Maybe<FileFilterListInput>;
  familiarSkills?: Maybe<SkillsFilterInput>;
  otherSkills?: Maybe<SkillsFilterInput>;
  footer?: Maybe<StringQueryOperatorInput>;
  resume?: Maybe<FileFilterInput>;
  numSections?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type IntroJsonSortInput = {
  fields?: Maybe<Array<Maybe<IntroJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum IntroJsonFieldsEnum {
  Title = 'title',
  Content = 'content',
  Faces = 'faces',
  FacesSourceInstanceName = 'faces___sourceInstanceName',
  FacesAbsolutePath = 'faces___absolutePath',
  FacesRelativePath = 'faces___relativePath',
  FacesExtension = 'faces___extension',
  FacesSize = 'faces___size',
  FacesPrettySize = 'faces___prettySize',
  FacesModifiedTime = 'faces___modifiedTime',
  FacesAccessTime = 'faces___accessTime',
  FacesChangeTime = 'faces___changeTime',
  FacesBirthTime = 'faces___birthTime',
  FacesRoot = 'faces___root',
  FacesDir = 'faces___dir',
  FacesBase = 'faces___base',
  FacesExt = 'faces___ext',
  FacesName = 'faces___name',
  FacesRelativeDirectory = 'faces___relativeDirectory',
  FacesDev = 'faces___dev',
  FacesMode = 'faces___mode',
  FacesNlink = 'faces___nlink',
  FacesUid = 'faces___uid',
  FacesGid = 'faces___gid',
  FacesRdev = 'faces___rdev',
  FacesIno = 'faces___ino',
  FacesAtimeMs = 'faces___atimeMs',
  FacesMtimeMs = 'faces___mtimeMs',
  FacesCtimeMs = 'faces___ctimeMs',
  FacesAtime = 'faces___atime',
  FacesMtime = 'faces___mtime',
  FacesCtime = 'faces___ctime',
  FacesBirthtime = 'faces___birthtime',
  FacesBirthtimeMs = 'faces___birthtimeMs',
  FacesBlksize = 'faces___blksize',
  FacesBlocks = 'faces___blocks',
  FacesPublicUrl = 'faces___publicURL',
  FacesChildImageSharpFixedBase64 = 'faces___childImageSharp___fixed___base64',
  FacesChildImageSharpFixedTracedSvg = 'faces___childImageSharp___fixed___tracedSVG',
  FacesChildImageSharpFixedAspectRatio = 'faces___childImageSharp___fixed___aspectRatio',
  FacesChildImageSharpFixedWidth = 'faces___childImageSharp___fixed___width',
  FacesChildImageSharpFixedHeight = 'faces___childImageSharp___fixed___height',
  FacesChildImageSharpFixedSrc = 'faces___childImageSharp___fixed___src',
  FacesChildImageSharpFixedSrcSet = 'faces___childImageSharp___fixed___srcSet',
  FacesChildImageSharpFixedSrcWebp = 'faces___childImageSharp___fixed___srcWebp',
  FacesChildImageSharpFixedSrcSetWebp = 'faces___childImageSharp___fixed___srcSetWebp',
  FacesChildImageSharpFixedOriginalName = 'faces___childImageSharp___fixed___originalName',
  FacesChildImageSharpResolutionsBase64 = 'faces___childImageSharp___resolutions___base64',
  FacesChildImageSharpResolutionsTracedSvg = 'faces___childImageSharp___resolutions___tracedSVG',
  FacesChildImageSharpResolutionsAspectRatio = 'faces___childImageSharp___resolutions___aspectRatio',
  FacesChildImageSharpResolutionsWidth = 'faces___childImageSharp___resolutions___width',
  FacesChildImageSharpResolutionsHeight = 'faces___childImageSharp___resolutions___height',
  FacesChildImageSharpResolutionsSrc = 'faces___childImageSharp___resolutions___src',
  FacesChildImageSharpResolutionsSrcSet = 'faces___childImageSharp___resolutions___srcSet',
  FacesChildImageSharpResolutionsSrcWebp = 'faces___childImageSharp___resolutions___srcWebp',
  FacesChildImageSharpResolutionsSrcSetWebp = 'faces___childImageSharp___resolutions___srcSetWebp',
  FacesChildImageSharpResolutionsOriginalName = 'faces___childImageSharp___resolutions___originalName',
  FacesChildImageSharpFluidBase64 = 'faces___childImageSharp___fluid___base64',
  FacesChildImageSharpFluidTracedSvg = 'faces___childImageSharp___fluid___tracedSVG',
  FacesChildImageSharpFluidAspectRatio = 'faces___childImageSharp___fluid___aspectRatio',
  FacesChildImageSharpFluidSrc = 'faces___childImageSharp___fluid___src',
  FacesChildImageSharpFluidSrcSet = 'faces___childImageSharp___fluid___srcSet',
  FacesChildImageSharpFluidSrcWebp = 'faces___childImageSharp___fluid___srcWebp',
  FacesChildImageSharpFluidSrcSetWebp = 'faces___childImageSharp___fluid___srcSetWebp',
  FacesChildImageSharpFluidSizes = 'faces___childImageSharp___fluid___sizes',
  FacesChildImageSharpFluidOriginalImg = 'faces___childImageSharp___fluid___originalImg',
  FacesChildImageSharpFluidOriginalName = 'faces___childImageSharp___fluid___originalName',
  FacesChildImageSharpFluidPresentationWidth = 'faces___childImageSharp___fluid___presentationWidth',
  FacesChildImageSharpFluidPresentationHeight = 'faces___childImageSharp___fluid___presentationHeight',
  FacesChildImageSharpSizesBase64 = 'faces___childImageSharp___sizes___base64',
  FacesChildImageSharpSizesTracedSvg = 'faces___childImageSharp___sizes___tracedSVG',
  FacesChildImageSharpSizesAspectRatio = 'faces___childImageSharp___sizes___aspectRatio',
  FacesChildImageSharpSizesSrc = 'faces___childImageSharp___sizes___src',
  FacesChildImageSharpSizesSrcSet = 'faces___childImageSharp___sizes___srcSet',
  FacesChildImageSharpSizesSrcWebp = 'faces___childImageSharp___sizes___srcWebp',
  FacesChildImageSharpSizesSrcSetWebp = 'faces___childImageSharp___sizes___srcSetWebp',
  FacesChildImageSharpSizesSizes = 'faces___childImageSharp___sizes___sizes',
  FacesChildImageSharpSizesOriginalImg = 'faces___childImageSharp___sizes___originalImg',
  FacesChildImageSharpSizesOriginalName = 'faces___childImageSharp___sizes___originalName',
  FacesChildImageSharpSizesPresentationWidth = 'faces___childImageSharp___sizes___presentationWidth',
  FacesChildImageSharpSizesPresentationHeight = 'faces___childImageSharp___sizes___presentationHeight',
  FacesChildImageSharpOriginalWidth = 'faces___childImageSharp___original___width',
  FacesChildImageSharpOriginalHeight = 'faces___childImageSharp___original___height',
  FacesChildImageSharpOriginalSrc = 'faces___childImageSharp___original___src',
  FacesChildImageSharpResizeSrc = 'faces___childImageSharp___resize___src',
  FacesChildImageSharpResizeTracedSvg = 'faces___childImageSharp___resize___tracedSVG',
  FacesChildImageSharpResizeWidth = 'faces___childImageSharp___resize___width',
  FacesChildImageSharpResizeHeight = 'faces___childImageSharp___resize___height',
  FacesChildImageSharpResizeAspectRatio = 'faces___childImageSharp___resize___aspectRatio',
  FacesChildImageSharpResizeOriginalName = 'faces___childImageSharp___resize___originalName',
  FacesChildImageSharpId = 'faces___childImageSharp___id',
  FacesChildImageSharpParentId = 'faces___childImageSharp___parent___id',
  FacesChildImageSharpParentChildren = 'faces___childImageSharp___parent___children',
  FacesChildImageSharpChildren = 'faces___childImageSharp___children',
  FacesChildImageSharpChildrenId = 'faces___childImageSharp___children___id',
  FacesChildImageSharpChildrenChildren = 'faces___childImageSharp___children___children',
  FacesChildImageSharpInternalContent = 'faces___childImageSharp___internal___content',
  FacesChildImageSharpInternalContentDigest = 'faces___childImageSharp___internal___contentDigest',
  FacesChildImageSharpInternalDescription = 'faces___childImageSharp___internal___description',
  FacesChildImageSharpInternalFieldOwners = 'faces___childImageSharp___internal___fieldOwners',
  FacesChildImageSharpInternalIgnoreType = 'faces___childImageSharp___internal___ignoreType',
  FacesChildImageSharpInternalMediaType = 'faces___childImageSharp___internal___mediaType',
  FacesChildImageSharpInternalOwner = 'faces___childImageSharp___internal___owner',
  FacesChildImageSharpInternalType = 'faces___childImageSharp___internal___type',
  FacesId = 'faces___id',
  FacesParentId = 'faces___parent___id',
  FacesParentParentId = 'faces___parent___parent___id',
  FacesParentParentChildren = 'faces___parent___parent___children',
  FacesParentChildren = 'faces___parent___children',
  FacesParentChildrenId = 'faces___parent___children___id',
  FacesParentChildrenChildren = 'faces___parent___children___children',
  FacesParentInternalContent = 'faces___parent___internal___content',
  FacesParentInternalContentDigest = 'faces___parent___internal___contentDigest',
  FacesParentInternalDescription = 'faces___parent___internal___description',
  FacesParentInternalFieldOwners = 'faces___parent___internal___fieldOwners',
  FacesParentInternalIgnoreType = 'faces___parent___internal___ignoreType',
  FacesParentInternalMediaType = 'faces___parent___internal___mediaType',
  FacesParentInternalOwner = 'faces___parent___internal___owner',
  FacesParentInternalType = 'faces___parent___internal___type',
  FacesChildren = 'faces___children',
  FacesChildrenId = 'faces___children___id',
  FacesChildrenParentId = 'faces___children___parent___id',
  FacesChildrenParentChildren = 'faces___children___parent___children',
  FacesChildrenChildren = 'faces___children___children',
  FacesChildrenChildrenId = 'faces___children___children___id',
  FacesChildrenChildrenChildren = 'faces___children___children___children',
  FacesChildrenInternalContent = 'faces___children___internal___content',
  FacesChildrenInternalContentDigest = 'faces___children___internal___contentDigest',
  FacesChildrenInternalDescription = 'faces___children___internal___description',
  FacesChildrenInternalFieldOwners = 'faces___children___internal___fieldOwners',
  FacesChildrenInternalIgnoreType = 'faces___children___internal___ignoreType',
  FacesChildrenInternalMediaType = 'faces___children___internal___mediaType',
  FacesChildrenInternalOwner = 'faces___children___internal___owner',
  FacesChildrenInternalType = 'faces___children___internal___type',
  FacesInternalContent = 'faces___internal___content',
  FacesInternalContentDigest = 'faces___internal___contentDigest',
  FacesInternalDescription = 'faces___internal___description',
  FacesInternalFieldOwners = 'faces___internal___fieldOwners',
  FacesInternalIgnoreType = 'faces___internal___ignoreType',
  FacesInternalMediaType = 'faces___internal___mediaType',
  FacesInternalOwner = 'faces___internal___owner',
  FacesInternalType = 'faces___internal___type',
  FacesChildDataJsonId = 'faces___childDataJson___id',
  FacesChildDataJsonParentId = 'faces___childDataJson___parent___id',
  FacesChildDataJsonParentChildren = 'faces___childDataJson___parent___children',
  FacesChildDataJsonChildren = 'faces___childDataJson___children',
  FacesChildDataJsonChildrenId = 'faces___childDataJson___children___id',
  FacesChildDataJsonChildrenChildren = 'faces___childDataJson___children___children',
  FacesChildDataJsonInternalContent = 'faces___childDataJson___internal___content',
  FacesChildDataJsonInternalContentDigest = 'faces___childDataJson___internal___contentDigest',
  FacesChildDataJsonInternalDescription = 'faces___childDataJson___internal___description',
  FacesChildDataJsonInternalFieldOwners = 'faces___childDataJson___internal___fieldOwners',
  FacesChildDataJsonInternalIgnoreType = 'faces___childDataJson___internal___ignoreType',
  FacesChildDataJsonInternalMediaType = 'faces___childDataJson___internal___mediaType',
  FacesChildDataJsonInternalOwner = 'faces___childDataJson___internal___owner',
  FacesChildDataJsonInternalType = 'faces___childDataJson___internal___type',
  FacesChildDataJsonKey = 'faces___childDataJson___key',
  FacesChildDataJsonTitle = 'faces___childDataJson___title',
  FacesChildDataJsonContent = 'faces___childDataJson___content',
  FacesChildDataJsonLinkedIn = 'faces___childDataJson___linkedIn',
  FacesChildDataJsonInstagram = 'faces___childDataJson___instagram',
  FacesChildDataJsonGitHub = 'faces___childDataJson___gitHub',
  FacesChildDataJsonEmail = 'faces___childDataJson___email',
  FacesChildDataJsonFooter = 'faces___childDataJson___footer',
  FacesChildDataJsonNumSections = 'faces___childDataJson___numSections',
  FacesChildDataJsonFaces = 'faces___childDataJson___faces',
  FacesChildDataJsonFacesSourceInstanceName = 'faces___childDataJson___faces___sourceInstanceName',
  FacesChildDataJsonFacesAbsolutePath = 'faces___childDataJson___faces___absolutePath',
  FacesChildDataJsonFacesRelativePath = 'faces___childDataJson___faces___relativePath',
  FacesChildDataJsonFacesExtension = 'faces___childDataJson___faces___extension',
  FacesChildDataJsonFacesSize = 'faces___childDataJson___faces___size',
  FacesChildDataJsonFacesPrettySize = 'faces___childDataJson___faces___prettySize',
  FacesChildDataJsonFacesModifiedTime = 'faces___childDataJson___faces___modifiedTime',
  FacesChildDataJsonFacesAccessTime = 'faces___childDataJson___faces___accessTime',
  FacesChildDataJsonFacesChangeTime = 'faces___childDataJson___faces___changeTime',
  FacesChildDataJsonFacesBirthTime = 'faces___childDataJson___faces___birthTime',
  FacesChildDataJsonFacesRoot = 'faces___childDataJson___faces___root',
  FacesChildDataJsonFacesDir = 'faces___childDataJson___faces___dir',
  FacesChildDataJsonFacesBase = 'faces___childDataJson___faces___base',
  FacesChildDataJsonFacesExt = 'faces___childDataJson___faces___ext',
  FacesChildDataJsonFacesName = 'faces___childDataJson___faces___name',
  FacesChildDataJsonFacesRelativeDirectory = 'faces___childDataJson___faces___relativeDirectory',
  FacesChildDataJsonFacesDev = 'faces___childDataJson___faces___dev',
  FacesChildDataJsonFacesMode = 'faces___childDataJson___faces___mode',
  FacesChildDataJsonFacesNlink = 'faces___childDataJson___faces___nlink',
  FacesChildDataJsonFacesUid = 'faces___childDataJson___faces___uid',
  FacesChildDataJsonFacesGid = 'faces___childDataJson___faces___gid',
  FacesChildDataJsonFacesRdev = 'faces___childDataJson___faces___rdev',
  FacesChildDataJsonFacesIno = 'faces___childDataJson___faces___ino',
  FacesChildDataJsonFacesAtimeMs = 'faces___childDataJson___faces___atimeMs',
  FacesChildDataJsonFacesMtimeMs = 'faces___childDataJson___faces___mtimeMs',
  FacesChildDataJsonFacesCtimeMs = 'faces___childDataJson___faces___ctimeMs',
  FacesChildDataJsonFacesAtime = 'faces___childDataJson___faces___atime',
  FacesChildDataJsonFacesMtime = 'faces___childDataJson___faces___mtime',
  FacesChildDataJsonFacesCtime = 'faces___childDataJson___faces___ctime',
  FacesChildDataJsonFacesBirthtime = 'faces___childDataJson___faces___birthtime',
  FacesChildDataJsonFacesBirthtimeMs = 'faces___childDataJson___faces___birthtimeMs',
  FacesChildDataJsonFacesBlksize = 'faces___childDataJson___faces___blksize',
  FacesChildDataJsonFacesBlocks = 'faces___childDataJson___faces___blocks',
  FacesChildDataJsonFacesPublicUrl = 'faces___childDataJson___faces___publicURL',
  FacesChildDataJsonFacesId = 'faces___childDataJson___faces___id',
  FacesChildDataJsonFacesChildren = 'faces___childDataJson___faces___children',
  FacesChildDataJsonFamiliarSkillsDescription = 'faces___childDataJson___familiarSkills___description',
  FacesChildDataJsonFamiliarSkillsSkills = 'faces___childDataJson___familiarSkills___skills',
  FacesChildDataJsonOtherSkillsDescription = 'faces___childDataJson___otherSkills___description',
  FacesChildDataJsonOtherSkillsSkills = 'faces___childDataJson___otherSkills___skills',
  FacesChildDataJsonResumeSourceInstanceName = 'faces___childDataJson___resume___sourceInstanceName',
  FacesChildDataJsonResumeAbsolutePath = 'faces___childDataJson___resume___absolutePath',
  FacesChildDataJsonResumeRelativePath = 'faces___childDataJson___resume___relativePath',
  FacesChildDataJsonResumeExtension = 'faces___childDataJson___resume___extension',
  FacesChildDataJsonResumeSize = 'faces___childDataJson___resume___size',
  FacesChildDataJsonResumePrettySize = 'faces___childDataJson___resume___prettySize',
  FacesChildDataJsonResumeModifiedTime = 'faces___childDataJson___resume___modifiedTime',
  FacesChildDataJsonResumeAccessTime = 'faces___childDataJson___resume___accessTime',
  FacesChildDataJsonResumeChangeTime = 'faces___childDataJson___resume___changeTime',
  FacesChildDataJsonResumeBirthTime = 'faces___childDataJson___resume___birthTime',
  FacesChildDataJsonResumeRoot = 'faces___childDataJson___resume___root',
  FacesChildDataJsonResumeDir = 'faces___childDataJson___resume___dir',
  FacesChildDataJsonResumeBase = 'faces___childDataJson___resume___base',
  FacesChildDataJsonResumeExt = 'faces___childDataJson___resume___ext',
  FacesChildDataJsonResumeName = 'faces___childDataJson___resume___name',
  FacesChildDataJsonResumeRelativeDirectory = 'faces___childDataJson___resume___relativeDirectory',
  FacesChildDataJsonResumeDev = 'faces___childDataJson___resume___dev',
  FacesChildDataJsonResumeMode = 'faces___childDataJson___resume___mode',
  FacesChildDataJsonResumeNlink = 'faces___childDataJson___resume___nlink',
  FacesChildDataJsonResumeUid = 'faces___childDataJson___resume___uid',
  FacesChildDataJsonResumeGid = 'faces___childDataJson___resume___gid',
  FacesChildDataJsonResumeRdev = 'faces___childDataJson___resume___rdev',
  FacesChildDataJsonResumeIno = 'faces___childDataJson___resume___ino',
  FacesChildDataJsonResumeAtimeMs = 'faces___childDataJson___resume___atimeMs',
  FacesChildDataJsonResumeMtimeMs = 'faces___childDataJson___resume___mtimeMs',
  FacesChildDataJsonResumeCtimeMs = 'faces___childDataJson___resume___ctimeMs',
  FacesChildDataJsonResumeAtime = 'faces___childDataJson___resume___atime',
  FacesChildDataJsonResumeMtime = 'faces___childDataJson___resume___mtime',
  FacesChildDataJsonResumeCtime = 'faces___childDataJson___resume___ctime',
  FacesChildDataJsonResumeBirthtime = 'faces___childDataJson___resume___birthtime',
  FacesChildDataJsonResumeBirthtimeMs = 'faces___childDataJson___resume___birthtimeMs',
  FacesChildDataJsonResumeBlksize = 'faces___childDataJson___resume___blksize',
  FacesChildDataJsonResumeBlocks = 'faces___childDataJson___resume___blocks',
  FacesChildDataJsonResumePublicUrl = 'faces___childDataJson___resume___publicURL',
  FacesChildDataJsonResumeId = 'faces___childDataJson___resume___id',
  FacesChildDataJsonResumeChildren = 'faces___childDataJson___resume___children',
  FacesChildDataJsonTitleEmoji = 'faces___childDataJson___titleEmoji',
  FacesChildDataJsonProjects = 'faces___childDataJson___projects',
  FacesChildDataJsonProjectsTitle = 'faces___childDataJson___projects___title',
  FacesChildDataJsonProjectsContent = 'faces___childDataJson___projects___content',
  FacesChildDataJsonProjectsLink = 'faces___childDataJson___projects___link',
  FacesChildDataJsonProjectsCodeLink = 'faces___childDataJson___projects___codeLink',
  FacesChildDataJsonProjectsMobileTitle = 'faces___childDataJson___projects___mobileTitle',
  FacesChildDataJsonGeiselSourceInstanceName = 'faces___childDataJson___geisel___sourceInstanceName',
  FacesChildDataJsonGeiselAbsolutePath = 'faces___childDataJson___geisel___absolutePath',
  FacesChildDataJsonGeiselRelativePath = 'faces___childDataJson___geisel___relativePath',
  FacesChildDataJsonGeiselExtension = 'faces___childDataJson___geisel___extension',
  FacesChildDataJsonGeiselSize = 'faces___childDataJson___geisel___size',
  FacesChildDataJsonGeiselPrettySize = 'faces___childDataJson___geisel___prettySize',
  FacesChildDataJsonGeiselModifiedTime = 'faces___childDataJson___geisel___modifiedTime',
  FacesChildDataJsonGeiselAccessTime = 'faces___childDataJson___geisel___accessTime',
  FacesChildDataJsonGeiselChangeTime = 'faces___childDataJson___geisel___changeTime',
  FacesChildDataJsonGeiselBirthTime = 'faces___childDataJson___geisel___birthTime',
  FacesChildDataJsonGeiselRoot = 'faces___childDataJson___geisel___root',
  FacesChildDataJsonGeiselDir = 'faces___childDataJson___geisel___dir',
  FacesChildDataJsonGeiselBase = 'faces___childDataJson___geisel___base',
  FacesChildDataJsonGeiselExt = 'faces___childDataJson___geisel___ext',
  FacesChildDataJsonGeiselName = 'faces___childDataJson___geisel___name',
  FacesChildDataJsonGeiselRelativeDirectory = 'faces___childDataJson___geisel___relativeDirectory',
  FacesChildDataJsonGeiselDev = 'faces___childDataJson___geisel___dev',
  FacesChildDataJsonGeiselMode = 'faces___childDataJson___geisel___mode',
  FacesChildDataJsonGeiselNlink = 'faces___childDataJson___geisel___nlink',
  FacesChildDataJsonGeiselUid = 'faces___childDataJson___geisel___uid',
  FacesChildDataJsonGeiselGid = 'faces___childDataJson___geisel___gid',
  FacesChildDataJsonGeiselRdev = 'faces___childDataJson___geisel___rdev',
  FacesChildDataJsonGeiselIno = 'faces___childDataJson___geisel___ino',
  FacesChildDataJsonGeiselAtimeMs = 'faces___childDataJson___geisel___atimeMs',
  FacesChildDataJsonGeiselMtimeMs = 'faces___childDataJson___geisel___mtimeMs',
  FacesChildDataJsonGeiselCtimeMs = 'faces___childDataJson___geisel___ctimeMs',
  FacesChildDataJsonGeiselAtime = 'faces___childDataJson___geisel___atime',
  FacesChildDataJsonGeiselMtime = 'faces___childDataJson___geisel___mtime',
  FacesChildDataJsonGeiselCtime = 'faces___childDataJson___geisel___ctime',
  FacesChildDataJsonGeiselBirthtime = 'faces___childDataJson___geisel___birthtime',
  FacesChildDataJsonGeiselBirthtimeMs = 'faces___childDataJson___geisel___birthtimeMs',
  FacesChildDataJsonGeiselBlksize = 'faces___childDataJson___geisel___blksize',
  FacesChildDataJsonGeiselBlocks = 'faces___childDataJson___geisel___blocks',
  FacesChildDataJsonGeiselPublicUrl = 'faces___childDataJson___geisel___publicURL',
  FacesChildDataJsonGeiselId = 'faces___childDataJson___geisel___id',
  FacesChildDataJsonGeiselChildren = 'faces___childDataJson___geisel___children',
  FacesChildDataJsonCourses = 'faces___childDataJson___courses',
  FacesChildDataJsonWork = 'faces___childDataJson___work',
  FacesChildDataJsonWorkTitle = 'faces___childDataJson___work___title',
  FacesChildDataJsonWorkDate = 'faces___childDataJson___work___date',
  FacesChildDataJsonWorkContent = 'faces___childDataJson___work___content',
  FacesChildDataJsonWorkLink = 'faces___childDataJson___work___link',
  FacesChildDataJsonTitleEmojiLabel = 'faces___childDataJson___titleEmojiLabel',
  FamiliarSkillsDescription = 'familiarSkills___description',
  FamiliarSkillsSkills = 'familiarSkills___skills',
  OtherSkillsDescription = 'otherSkills___description',
  OtherSkillsSkills = 'otherSkills___skills',
  Footer = 'footer',
  ResumeSourceInstanceName = 'resume___sourceInstanceName',
  ResumeAbsolutePath = 'resume___absolutePath',
  ResumeRelativePath = 'resume___relativePath',
  ResumeExtension = 'resume___extension',
  ResumeSize = 'resume___size',
  ResumePrettySize = 'resume___prettySize',
  ResumeModifiedTime = 'resume___modifiedTime',
  ResumeAccessTime = 'resume___accessTime',
  ResumeChangeTime = 'resume___changeTime',
  ResumeBirthTime = 'resume___birthTime',
  ResumeRoot = 'resume___root',
  ResumeDir = 'resume___dir',
  ResumeBase = 'resume___base',
  ResumeExt = 'resume___ext',
  ResumeName = 'resume___name',
  ResumeRelativeDirectory = 'resume___relativeDirectory',
  ResumeDev = 'resume___dev',
  ResumeMode = 'resume___mode',
  ResumeNlink = 'resume___nlink',
  ResumeUid = 'resume___uid',
  ResumeGid = 'resume___gid',
  ResumeRdev = 'resume___rdev',
  ResumeIno = 'resume___ino',
  ResumeAtimeMs = 'resume___atimeMs',
  ResumeMtimeMs = 'resume___mtimeMs',
  ResumeCtimeMs = 'resume___ctimeMs',
  ResumeAtime = 'resume___atime',
  ResumeMtime = 'resume___mtime',
  ResumeCtime = 'resume___ctime',
  ResumeBirthtime = 'resume___birthtime',
  ResumeBirthtimeMs = 'resume___birthtimeMs',
  ResumeBlksize = 'resume___blksize',
  ResumeBlocks = 'resume___blocks',
  ResumePublicUrl = 'resume___publicURL',
  ResumeChildImageSharpFixedBase64 = 'resume___childImageSharp___fixed___base64',
  ResumeChildImageSharpFixedTracedSvg = 'resume___childImageSharp___fixed___tracedSVG',
  ResumeChildImageSharpFixedAspectRatio = 'resume___childImageSharp___fixed___aspectRatio',
  ResumeChildImageSharpFixedWidth = 'resume___childImageSharp___fixed___width',
  ResumeChildImageSharpFixedHeight = 'resume___childImageSharp___fixed___height',
  ResumeChildImageSharpFixedSrc = 'resume___childImageSharp___fixed___src',
  ResumeChildImageSharpFixedSrcSet = 'resume___childImageSharp___fixed___srcSet',
  ResumeChildImageSharpFixedSrcWebp = 'resume___childImageSharp___fixed___srcWebp',
  ResumeChildImageSharpFixedSrcSetWebp = 'resume___childImageSharp___fixed___srcSetWebp',
  ResumeChildImageSharpFixedOriginalName = 'resume___childImageSharp___fixed___originalName',
  ResumeChildImageSharpResolutionsBase64 = 'resume___childImageSharp___resolutions___base64',
  ResumeChildImageSharpResolutionsTracedSvg = 'resume___childImageSharp___resolutions___tracedSVG',
  ResumeChildImageSharpResolutionsAspectRatio = 'resume___childImageSharp___resolutions___aspectRatio',
  ResumeChildImageSharpResolutionsWidth = 'resume___childImageSharp___resolutions___width',
  ResumeChildImageSharpResolutionsHeight = 'resume___childImageSharp___resolutions___height',
  ResumeChildImageSharpResolutionsSrc = 'resume___childImageSharp___resolutions___src',
  ResumeChildImageSharpResolutionsSrcSet = 'resume___childImageSharp___resolutions___srcSet',
  ResumeChildImageSharpResolutionsSrcWebp = 'resume___childImageSharp___resolutions___srcWebp',
  ResumeChildImageSharpResolutionsSrcSetWebp = 'resume___childImageSharp___resolutions___srcSetWebp',
  ResumeChildImageSharpResolutionsOriginalName = 'resume___childImageSharp___resolutions___originalName',
  ResumeChildImageSharpFluidBase64 = 'resume___childImageSharp___fluid___base64',
  ResumeChildImageSharpFluidTracedSvg = 'resume___childImageSharp___fluid___tracedSVG',
  ResumeChildImageSharpFluidAspectRatio = 'resume___childImageSharp___fluid___aspectRatio',
  ResumeChildImageSharpFluidSrc = 'resume___childImageSharp___fluid___src',
  ResumeChildImageSharpFluidSrcSet = 'resume___childImageSharp___fluid___srcSet',
  ResumeChildImageSharpFluidSrcWebp = 'resume___childImageSharp___fluid___srcWebp',
  ResumeChildImageSharpFluidSrcSetWebp = 'resume___childImageSharp___fluid___srcSetWebp',
  ResumeChildImageSharpFluidSizes = 'resume___childImageSharp___fluid___sizes',
  ResumeChildImageSharpFluidOriginalImg = 'resume___childImageSharp___fluid___originalImg',
  ResumeChildImageSharpFluidOriginalName = 'resume___childImageSharp___fluid___originalName',
  ResumeChildImageSharpFluidPresentationWidth = 'resume___childImageSharp___fluid___presentationWidth',
  ResumeChildImageSharpFluidPresentationHeight = 'resume___childImageSharp___fluid___presentationHeight',
  ResumeChildImageSharpSizesBase64 = 'resume___childImageSharp___sizes___base64',
  ResumeChildImageSharpSizesTracedSvg = 'resume___childImageSharp___sizes___tracedSVG',
  ResumeChildImageSharpSizesAspectRatio = 'resume___childImageSharp___sizes___aspectRatio',
  ResumeChildImageSharpSizesSrc = 'resume___childImageSharp___sizes___src',
  ResumeChildImageSharpSizesSrcSet = 'resume___childImageSharp___sizes___srcSet',
  ResumeChildImageSharpSizesSrcWebp = 'resume___childImageSharp___sizes___srcWebp',
  ResumeChildImageSharpSizesSrcSetWebp = 'resume___childImageSharp___sizes___srcSetWebp',
  ResumeChildImageSharpSizesSizes = 'resume___childImageSharp___sizes___sizes',
  ResumeChildImageSharpSizesOriginalImg = 'resume___childImageSharp___sizes___originalImg',
  ResumeChildImageSharpSizesOriginalName = 'resume___childImageSharp___sizes___originalName',
  ResumeChildImageSharpSizesPresentationWidth = 'resume___childImageSharp___sizes___presentationWidth',
  ResumeChildImageSharpSizesPresentationHeight = 'resume___childImageSharp___sizes___presentationHeight',
  ResumeChildImageSharpOriginalWidth = 'resume___childImageSharp___original___width',
  ResumeChildImageSharpOriginalHeight = 'resume___childImageSharp___original___height',
  ResumeChildImageSharpOriginalSrc = 'resume___childImageSharp___original___src',
  ResumeChildImageSharpResizeSrc = 'resume___childImageSharp___resize___src',
  ResumeChildImageSharpResizeTracedSvg = 'resume___childImageSharp___resize___tracedSVG',
  ResumeChildImageSharpResizeWidth = 'resume___childImageSharp___resize___width',
  ResumeChildImageSharpResizeHeight = 'resume___childImageSharp___resize___height',
  ResumeChildImageSharpResizeAspectRatio = 'resume___childImageSharp___resize___aspectRatio',
  ResumeChildImageSharpResizeOriginalName = 'resume___childImageSharp___resize___originalName',
  ResumeChildImageSharpId = 'resume___childImageSharp___id',
  ResumeChildImageSharpParentId = 'resume___childImageSharp___parent___id',
  ResumeChildImageSharpParentChildren = 'resume___childImageSharp___parent___children',
  ResumeChildImageSharpChildren = 'resume___childImageSharp___children',
  ResumeChildImageSharpChildrenId = 'resume___childImageSharp___children___id',
  ResumeChildImageSharpChildrenChildren = 'resume___childImageSharp___children___children',
  ResumeChildImageSharpInternalContent = 'resume___childImageSharp___internal___content',
  ResumeChildImageSharpInternalContentDigest = 'resume___childImageSharp___internal___contentDigest',
  ResumeChildImageSharpInternalDescription = 'resume___childImageSharp___internal___description',
  ResumeChildImageSharpInternalFieldOwners = 'resume___childImageSharp___internal___fieldOwners',
  ResumeChildImageSharpInternalIgnoreType = 'resume___childImageSharp___internal___ignoreType',
  ResumeChildImageSharpInternalMediaType = 'resume___childImageSharp___internal___mediaType',
  ResumeChildImageSharpInternalOwner = 'resume___childImageSharp___internal___owner',
  ResumeChildImageSharpInternalType = 'resume___childImageSharp___internal___type',
  ResumeId = 'resume___id',
  ResumeParentId = 'resume___parent___id',
  ResumeParentParentId = 'resume___parent___parent___id',
  ResumeParentParentChildren = 'resume___parent___parent___children',
  ResumeParentChildren = 'resume___parent___children',
  ResumeParentChildrenId = 'resume___parent___children___id',
  ResumeParentChildrenChildren = 'resume___parent___children___children',
  ResumeParentInternalContent = 'resume___parent___internal___content',
  ResumeParentInternalContentDigest = 'resume___parent___internal___contentDigest',
  ResumeParentInternalDescription = 'resume___parent___internal___description',
  ResumeParentInternalFieldOwners = 'resume___parent___internal___fieldOwners',
  ResumeParentInternalIgnoreType = 'resume___parent___internal___ignoreType',
  ResumeParentInternalMediaType = 'resume___parent___internal___mediaType',
  ResumeParentInternalOwner = 'resume___parent___internal___owner',
  ResumeParentInternalType = 'resume___parent___internal___type',
  ResumeChildren = 'resume___children',
  ResumeChildrenId = 'resume___children___id',
  ResumeChildrenParentId = 'resume___children___parent___id',
  ResumeChildrenParentChildren = 'resume___children___parent___children',
  ResumeChildrenChildren = 'resume___children___children',
  ResumeChildrenChildrenId = 'resume___children___children___id',
  ResumeChildrenChildrenChildren = 'resume___children___children___children',
  ResumeChildrenInternalContent = 'resume___children___internal___content',
  ResumeChildrenInternalContentDigest = 'resume___children___internal___contentDigest',
  ResumeChildrenInternalDescription = 'resume___children___internal___description',
  ResumeChildrenInternalFieldOwners = 'resume___children___internal___fieldOwners',
  ResumeChildrenInternalIgnoreType = 'resume___children___internal___ignoreType',
  ResumeChildrenInternalMediaType = 'resume___children___internal___mediaType',
  ResumeChildrenInternalOwner = 'resume___children___internal___owner',
  ResumeChildrenInternalType = 'resume___children___internal___type',
  ResumeInternalContent = 'resume___internal___content',
  ResumeInternalContentDigest = 'resume___internal___contentDigest',
  ResumeInternalDescription = 'resume___internal___description',
  ResumeInternalFieldOwners = 'resume___internal___fieldOwners',
  ResumeInternalIgnoreType = 'resume___internal___ignoreType',
  ResumeInternalMediaType = 'resume___internal___mediaType',
  ResumeInternalOwner = 'resume___internal___owner',
  ResumeInternalType = 'resume___internal___type',
  ResumeChildDataJsonId = 'resume___childDataJson___id',
  ResumeChildDataJsonParentId = 'resume___childDataJson___parent___id',
  ResumeChildDataJsonParentChildren = 'resume___childDataJson___parent___children',
  ResumeChildDataJsonChildren = 'resume___childDataJson___children',
  ResumeChildDataJsonChildrenId = 'resume___childDataJson___children___id',
  ResumeChildDataJsonChildrenChildren = 'resume___childDataJson___children___children',
  ResumeChildDataJsonInternalContent = 'resume___childDataJson___internal___content',
  ResumeChildDataJsonInternalContentDigest = 'resume___childDataJson___internal___contentDigest',
  ResumeChildDataJsonInternalDescription = 'resume___childDataJson___internal___description',
  ResumeChildDataJsonInternalFieldOwners = 'resume___childDataJson___internal___fieldOwners',
  ResumeChildDataJsonInternalIgnoreType = 'resume___childDataJson___internal___ignoreType',
  ResumeChildDataJsonInternalMediaType = 'resume___childDataJson___internal___mediaType',
  ResumeChildDataJsonInternalOwner = 'resume___childDataJson___internal___owner',
  ResumeChildDataJsonInternalType = 'resume___childDataJson___internal___type',
  ResumeChildDataJsonKey = 'resume___childDataJson___key',
  ResumeChildDataJsonTitle = 'resume___childDataJson___title',
  ResumeChildDataJsonContent = 'resume___childDataJson___content',
  ResumeChildDataJsonLinkedIn = 'resume___childDataJson___linkedIn',
  ResumeChildDataJsonInstagram = 'resume___childDataJson___instagram',
  ResumeChildDataJsonGitHub = 'resume___childDataJson___gitHub',
  ResumeChildDataJsonEmail = 'resume___childDataJson___email',
  ResumeChildDataJsonFooter = 'resume___childDataJson___footer',
  ResumeChildDataJsonNumSections = 'resume___childDataJson___numSections',
  ResumeChildDataJsonFaces = 'resume___childDataJson___faces',
  ResumeChildDataJsonFacesSourceInstanceName = 'resume___childDataJson___faces___sourceInstanceName',
  ResumeChildDataJsonFacesAbsolutePath = 'resume___childDataJson___faces___absolutePath',
  ResumeChildDataJsonFacesRelativePath = 'resume___childDataJson___faces___relativePath',
  ResumeChildDataJsonFacesExtension = 'resume___childDataJson___faces___extension',
  ResumeChildDataJsonFacesSize = 'resume___childDataJson___faces___size',
  ResumeChildDataJsonFacesPrettySize = 'resume___childDataJson___faces___prettySize',
  ResumeChildDataJsonFacesModifiedTime = 'resume___childDataJson___faces___modifiedTime',
  ResumeChildDataJsonFacesAccessTime = 'resume___childDataJson___faces___accessTime',
  ResumeChildDataJsonFacesChangeTime = 'resume___childDataJson___faces___changeTime',
  ResumeChildDataJsonFacesBirthTime = 'resume___childDataJson___faces___birthTime',
  ResumeChildDataJsonFacesRoot = 'resume___childDataJson___faces___root',
  ResumeChildDataJsonFacesDir = 'resume___childDataJson___faces___dir',
  ResumeChildDataJsonFacesBase = 'resume___childDataJson___faces___base',
  ResumeChildDataJsonFacesExt = 'resume___childDataJson___faces___ext',
  ResumeChildDataJsonFacesName = 'resume___childDataJson___faces___name',
  ResumeChildDataJsonFacesRelativeDirectory = 'resume___childDataJson___faces___relativeDirectory',
  ResumeChildDataJsonFacesDev = 'resume___childDataJson___faces___dev',
  ResumeChildDataJsonFacesMode = 'resume___childDataJson___faces___mode',
  ResumeChildDataJsonFacesNlink = 'resume___childDataJson___faces___nlink',
  ResumeChildDataJsonFacesUid = 'resume___childDataJson___faces___uid',
  ResumeChildDataJsonFacesGid = 'resume___childDataJson___faces___gid',
  ResumeChildDataJsonFacesRdev = 'resume___childDataJson___faces___rdev',
  ResumeChildDataJsonFacesIno = 'resume___childDataJson___faces___ino',
  ResumeChildDataJsonFacesAtimeMs = 'resume___childDataJson___faces___atimeMs',
  ResumeChildDataJsonFacesMtimeMs = 'resume___childDataJson___faces___mtimeMs',
  ResumeChildDataJsonFacesCtimeMs = 'resume___childDataJson___faces___ctimeMs',
  ResumeChildDataJsonFacesAtime = 'resume___childDataJson___faces___atime',
  ResumeChildDataJsonFacesMtime = 'resume___childDataJson___faces___mtime',
  ResumeChildDataJsonFacesCtime = 'resume___childDataJson___faces___ctime',
  ResumeChildDataJsonFacesBirthtime = 'resume___childDataJson___faces___birthtime',
  ResumeChildDataJsonFacesBirthtimeMs = 'resume___childDataJson___faces___birthtimeMs',
  ResumeChildDataJsonFacesBlksize = 'resume___childDataJson___faces___blksize',
  ResumeChildDataJsonFacesBlocks = 'resume___childDataJson___faces___blocks',
  ResumeChildDataJsonFacesPublicUrl = 'resume___childDataJson___faces___publicURL',
  ResumeChildDataJsonFacesId = 'resume___childDataJson___faces___id',
  ResumeChildDataJsonFacesChildren = 'resume___childDataJson___faces___children',
  ResumeChildDataJsonFamiliarSkillsDescription = 'resume___childDataJson___familiarSkills___description',
  ResumeChildDataJsonFamiliarSkillsSkills = 'resume___childDataJson___familiarSkills___skills',
  ResumeChildDataJsonOtherSkillsDescription = 'resume___childDataJson___otherSkills___description',
  ResumeChildDataJsonOtherSkillsSkills = 'resume___childDataJson___otherSkills___skills',
  ResumeChildDataJsonResumeSourceInstanceName = 'resume___childDataJson___resume___sourceInstanceName',
  ResumeChildDataJsonResumeAbsolutePath = 'resume___childDataJson___resume___absolutePath',
  ResumeChildDataJsonResumeRelativePath = 'resume___childDataJson___resume___relativePath',
  ResumeChildDataJsonResumeExtension = 'resume___childDataJson___resume___extension',
  ResumeChildDataJsonResumeSize = 'resume___childDataJson___resume___size',
  ResumeChildDataJsonResumePrettySize = 'resume___childDataJson___resume___prettySize',
  ResumeChildDataJsonResumeModifiedTime = 'resume___childDataJson___resume___modifiedTime',
  ResumeChildDataJsonResumeAccessTime = 'resume___childDataJson___resume___accessTime',
  ResumeChildDataJsonResumeChangeTime = 'resume___childDataJson___resume___changeTime',
  ResumeChildDataJsonResumeBirthTime = 'resume___childDataJson___resume___birthTime',
  ResumeChildDataJsonResumeRoot = 'resume___childDataJson___resume___root',
  ResumeChildDataJsonResumeDir = 'resume___childDataJson___resume___dir',
  ResumeChildDataJsonResumeBase = 'resume___childDataJson___resume___base',
  ResumeChildDataJsonResumeExt = 'resume___childDataJson___resume___ext',
  ResumeChildDataJsonResumeName = 'resume___childDataJson___resume___name',
  ResumeChildDataJsonResumeRelativeDirectory = 'resume___childDataJson___resume___relativeDirectory',
  ResumeChildDataJsonResumeDev = 'resume___childDataJson___resume___dev',
  ResumeChildDataJsonResumeMode = 'resume___childDataJson___resume___mode',
  ResumeChildDataJsonResumeNlink = 'resume___childDataJson___resume___nlink',
  ResumeChildDataJsonResumeUid = 'resume___childDataJson___resume___uid',
  ResumeChildDataJsonResumeGid = 'resume___childDataJson___resume___gid',
  ResumeChildDataJsonResumeRdev = 'resume___childDataJson___resume___rdev',
  ResumeChildDataJsonResumeIno = 'resume___childDataJson___resume___ino',
  ResumeChildDataJsonResumeAtimeMs = 'resume___childDataJson___resume___atimeMs',
  ResumeChildDataJsonResumeMtimeMs = 'resume___childDataJson___resume___mtimeMs',
  ResumeChildDataJsonResumeCtimeMs = 'resume___childDataJson___resume___ctimeMs',
  ResumeChildDataJsonResumeAtime = 'resume___childDataJson___resume___atime',
  ResumeChildDataJsonResumeMtime = 'resume___childDataJson___resume___mtime',
  ResumeChildDataJsonResumeCtime = 'resume___childDataJson___resume___ctime',
  ResumeChildDataJsonResumeBirthtime = 'resume___childDataJson___resume___birthtime',
  ResumeChildDataJsonResumeBirthtimeMs = 'resume___childDataJson___resume___birthtimeMs',
  ResumeChildDataJsonResumeBlksize = 'resume___childDataJson___resume___blksize',
  ResumeChildDataJsonResumeBlocks = 'resume___childDataJson___resume___blocks',
  ResumeChildDataJsonResumePublicUrl = 'resume___childDataJson___resume___publicURL',
  ResumeChildDataJsonResumeId = 'resume___childDataJson___resume___id',
  ResumeChildDataJsonResumeChildren = 'resume___childDataJson___resume___children',
  ResumeChildDataJsonTitleEmoji = 'resume___childDataJson___titleEmoji',
  ResumeChildDataJsonProjects = 'resume___childDataJson___projects',
  ResumeChildDataJsonProjectsTitle = 'resume___childDataJson___projects___title',
  ResumeChildDataJsonProjectsContent = 'resume___childDataJson___projects___content',
  ResumeChildDataJsonProjectsLink = 'resume___childDataJson___projects___link',
  ResumeChildDataJsonProjectsCodeLink = 'resume___childDataJson___projects___codeLink',
  ResumeChildDataJsonProjectsMobileTitle = 'resume___childDataJson___projects___mobileTitle',
  ResumeChildDataJsonGeiselSourceInstanceName = 'resume___childDataJson___geisel___sourceInstanceName',
  ResumeChildDataJsonGeiselAbsolutePath = 'resume___childDataJson___geisel___absolutePath',
  ResumeChildDataJsonGeiselRelativePath = 'resume___childDataJson___geisel___relativePath',
  ResumeChildDataJsonGeiselExtension = 'resume___childDataJson___geisel___extension',
  ResumeChildDataJsonGeiselSize = 'resume___childDataJson___geisel___size',
  ResumeChildDataJsonGeiselPrettySize = 'resume___childDataJson___geisel___prettySize',
  ResumeChildDataJsonGeiselModifiedTime = 'resume___childDataJson___geisel___modifiedTime',
  ResumeChildDataJsonGeiselAccessTime = 'resume___childDataJson___geisel___accessTime',
  ResumeChildDataJsonGeiselChangeTime = 'resume___childDataJson___geisel___changeTime',
  ResumeChildDataJsonGeiselBirthTime = 'resume___childDataJson___geisel___birthTime',
  ResumeChildDataJsonGeiselRoot = 'resume___childDataJson___geisel___root',
  ResumeChildDataJsonGeiselDir = 'resume___childDataJson___geisel___dir',
  ResumeChildDataJsonGeiselBase = 'resume___childDataJson___geisel___base',
  ResumeChildDataJsonGeiselExt = 'resume___childDataJson___geisel___ext',
  ResumeChildDataJsonGeiselName = 'resume___childDataJson___geisel___name',
  ResumeChildDataJsonGeiselRelativeDirectory = 'resume___childDataJson___geisel___relativeDirectory',
  ResumeChildDataJsonGeiselDev = 'resume___childDataJson___geisel___dev',
  ResumeChildDataJsonGeiselMode = 'resume___childDataJson___geisel___mode',
  ResumeChildDataJsonGeiselNlink = 'resume___childDataJson___geisel___nlink',
  ResumeChildDataJsonGeiselUid = 'resume___childDataJson___geisel___uid',
  ResumeChildDataJsonGeiselGid = 'resume___childDataJson___geisel___gid',
  ResumeChildDataJsonGeiselRdev = 'resume___childDataJson___geisel___rdev',
  ResumeChildDataJsonGeiselIno = 'resume___childDataJson___geisel___ino',
  ResumeChildDataJsonGeiselAtimeMs = 'resume___childDataJson___geisel___atimeMs',
  ResumeChildDataJsonGeiselMtimeMs = 'resume___childDataJson___geisel___mtimeMs',
  ResumeChildDataJsonGeiselCtimeMs = 'resume___childDataJson___geisel___ctimeMs',
  ResumeChildDataJsonGeiselAtime = 'resume___childDataJson___geisel___atime',
  ResumeChildDataJsonGeiselMtime = 'resume___childDataJson___geisel___mtime',
  ResumeChildDataJsonGeiselCtime = 'resume___childDataJson___geisel___ctime',
  ResumeChildDataJsonGeiselBirthtime = 'resume___childDataJson___geisel___birthtime',
  ResumeChildDataJsonGeiselBirthtimeMs = 'resume___childDataJson___geisel___birthtimeMs',
  ResumeChildDataJsonGeiselBlksize = 'resume___childDataJson___geisel___blksize',
  ResumeChildDataJsonGeiselBlocks = 'resume___childDataJson___geisel___blocks',
  ResumeChildDataJsonGeiselPublicUrl = 'resume___childDataJson___geisel___publicURL',
  ResumeChildDataJsonGeiselId = 'resume___childDataJson___geisel___id',
  ResumeChildDataJsonGeiselChildren = 'resume___childDataJson___geisel___children',
  ResumeChildDataJsonCourses = 'resume___childDataJson___courses',
  ResumeChildDataJsonWork = 'resume___childDataJson___work',
  ResumeChildDataJsonWorkTitle = 'resume___childDataJson___work___title',
  ResumeChildDataJsonWorkDate = 'resume___childDataJson___work___date',
  ResumeChildDataJsonWorkContent = 'resume___childDataJson___work___content',
  ResumeChildDataJsonWorkLink = 'resume___childDataJson___work___link',
  ResumeChildDataJsonTitleEmojiLabel = 'resume___childDataJson___titleEmojiLabel',
  NumSections = 'numSections',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type IntroJsonConnection = {
  __typename?: 'IntroJsonConnection';
  totalCount: Scalars['Int'];
  edges: Array<IntroJsonEdge>;
  nodes: Array<IntroJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IntroJsonGroupConnection>;
};


export type IntroJsonConnectionDistinctArgs = {
  field: IntroJsonFieldsEnum;
};


export type IntroJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IntroJsonFieldsEnum;
};

export type IntroJsonEdge = {
  __typename?: 'IntroJsonEdge';
  next?: Maybe<IntroJson>;
  node: IntroJson;
  previous?: Maybe<IntroJson>;
};

export type IntroJsonGroupConnection = {
  __typename?: 'IntroJsonGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<IntroJsonEdge>;
  nodes: Array<IntroJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SchoolJson = Node & {
  __typename?: 'SchoolJson';
  title: Scalars['String'];
  titleEmoji: Scalars['String'];
  titleEmojiLabel: Scalars['String'];
  content: Array<Scalars['String']>;
  geisel: File;
  courses: Array<Scalars['String']>;
  numSections: Scalars['Int'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SchoolJsonFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  titleEmoji?: Maybe<StringQueryOperatorInput>;
  titleEmojiLabel?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  geisel?: Maybe<FileFilterInput>;
  courses?: Maybe<StringQueryOperatorInput>;
  numSections?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SchoolJsonSortInput = {
  fields?: Maybe<Array<Maybe<SchoolJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SchoolJsonFieldsEnum {
  Title = 'title',
  TitleEmoji = 'titleEmoji',
  TitleEmojiLabel = 'titleEmojiLabel',
  Content = 'content',
  GeiselSourceInstanceName = 'geisel___sourceInstanceName',
  GeiselAbsolutePath = 'geisel___absolutePath',
  GeiselRelativePath = 'geisel___relativePath',
  GeiselExtension = 'geisel___extension',
  GeiselSize = 'geisel___size',
  GeiselPrettySize = 'geisel___prettySize',
  GeiselModifiedTime = 'geisel___modifiedTime',
  GeiselAccessTime = 'geisel___accessTime',
  GeiselChangeTime = 'geisel___changeTime',
  GeiselBirthTime = 'geisel___birthTime',
  GeiselRoot = 'geisel___root',
  GeiselDir = 'geisel___dir',
  GeiselBase = 'geisel___base',
  GeiselExt = 'geisel___ext',
  GeiselName = 'geisel___name',
  GeiselRelativeDirectory = 'geisel___relativeDirectory',
  GeiselDev = 'geisel___dev',
  GeiselMode = 'geisel___mode',
  GeiselNlink = 'geisel___nlink',
  GeiselUid = 'geisel___uid',
  GeiselGid = 'geisel___gid',
  GeiselRdev = 'geisel___rdev',
  GeiselIno = 'geisel___ino',
  GeiselAtimeMs = 'geisel___atimeMs',
  GeiselMtimeMs = 'geisel___mtimeMs',
  GeiselCtimeMs = 'geisel___ctimeMs',
  GeiselAtime = 'geisel___atime',
  GeiselMtime = 'geisel___mtime',
  GeiselCtime = 'geisel___ctime',
  GeiselBirthtime = 'geisel___birthtime',
  GeiselBirthtimeMs = 'geisel___birthtimeMs',
  GeiselBlksize = 'geisel___blksize',
  GeiselBlocks = 'geisel___blocks',
  GeiselPublicUrl = 'geisel___publicURL',
  GeiselChildImageSharpFixedBase64 = 'geisel___childImageSharp___fixed___base64',
  GeiselChildImageSharpFixedTracedSvg = 'geisel___childImageSharp___fixed___tracedSVG',
  GeiselChildImageSharpFixedAspectRatio = 'geisel___childImageSharp___fixed___aspectRatio',
  GeiselChildImageSharpFixedWidth = 'geisel___childImageSharp___fixed___width',
  GeiselChildImageSharpFixedHeight = 'geisel___childImageSharp___fixed___height',
  GeiselChildImageSharpFixedSrc = 'geisel___childImageSharp___fixed___src',
  GeiselChildImageSharpFixedSrcSet = 'geisel___childImageSharp___fixed___srcSet',
  GeiselChildImageSharpFixedSrcWebp = 'geisel___childImageSharp___fixed___srcWebp',
  GeiselChildImageSharpFixedSrcSetWebp = 'geisel___childImageSharp___fixed___srcSetWebp',
  GeiselChildImageSharpFixedOriginalName = 'geisel___childImageSharp___fixed___originalName',
  GeiselChildImageSharpResolutionsBase64 = 'geisel___childImageSharp___resolutions___base64',
  GeiselChildImageSharpResolutionsTracedSvg = 'geisel___childImageSharp___resolutions___tracedSVG',
  GeiselChildImageSharpResolutionsAspectRatio = 'geisel___childImageSharp___resolutions___aspectRatio',
  GeiselChildImageSharpResolutionsWidth = 'geisel___childImageSharp___resolutions___width',
  GeiselChildImageSharpResolutionsHeight = 'geisel___childImageSharp___resolutions___height',
  GeiselChildImageSharpResolutionsSrc = 'geisel___childImageSharp___resolutions___src',
  GeiselChildImageSharpResolutionsSrcSet = 'geisel___childImageSharp___resolutions___srcSet',
  GeiselChildImageSharpResolutionsSrcWebp = 'geisel___childImageSharp___resolutions___srcWebp',
  GeiselChildImageSharpResolutionsSrcSetWebp = 'geisel___childImageSharp___resolutions___srcSetWebp',
  GeiselChildImageSharpResolutionsOriginalName = 'geisel___childImageSharp___resolutions___originalName',
  GeiselChildImageSharpFluidBase64 = 'geisel___childImageSharp___fluid___base64',
  GeiselChildImageSharpFluidTracedSvg = 'geisel___childImageSharp___fluid___tracedSVG',
  GeiselChildImageSharpFluidAspectRatio = 'geisel___childImageSharp___fluid___aspectRatio',
  GeiselChildImageSharpFluidSrc = 'geisel___childImageSharp___fluid___src',
  GeiselChildImageSharpFluidSrcSet = 'geisel___childImageSharp___fluid___srcSet',
  GeiselChildImageSharpFluidSrcWebp = 'geisel___childImageSharp___fluid___srcWebp',
  GeiselChildImageSharpFluidSrcSetWebp = 'geisel___childImageSharp___fluid___srcSetWebp',
  GeiselChildImageSharpFluidSizes = 'geisel___childImageSharp___fluid___sizes',
  GeiselChildImageSharpFluidOriginalImg = 'geisel___childImageSharp___fluid___originalImg',
  GeiselChildImageSharpFluidOriginalName = 'geisel___childImageSharp___fluid___originalName',
  GeiselChildImageSharpFluidPresentationWidth = 'geisel___childImageSharp___fluid___presentationWidth',
  GeiselChildImageSharpFluidPresentationHeight = 'geisel___childImageSharp___fluid___presentationHeight',
  GeiselChildImageSharpSizesBase64 = 'geisel___childImageSharp___sizes___base64',
  GeiselChildImageSharpSizesTracedSvg = 'geisel___childImageSharp___sizes___tracedSVG',
  GeiselChildImageSharpSizesAspectRatio = 'geisel___childImageSharp___sizes___aspectRatio',
  GeiselChildImageSharpSizesSrc = 'geisel___childImageSharp___sizes___src',
  GeiselChildImageSharpSizesSrcSet = 'geisel___childImageSharp___sizes___srcSet',
  GeiselChildImageSharpSizesSrcWebp = 'geisel___childImageSharp___sizes___srcWebp',
  GeiselChildImageSharpSizesSrcSetWebp = 'geisel___childImageSharp___sizes___srcSetWebp',
  GeiselChildImageSharpSizesSizes = 'geisel___childImageSharp___sizes___sizes',
  GeiselChildImageSharpSizesOriginalImg = 'geisel___childImageSharp___sizes___originalImg',
  GeiselChildImageSharpSizesOriginalName = 'geisel___childImageSharp___sizes___originalName',
  GeiselChildImageSharpSizesPresentationWidth = 'geisel___childImageSharp___sizes___presentationWidth',
  GeiselChildImageSharpSizesPresentationHeight = 'geisel___childImageSharp___sizes___presentationHeight',
  GeiselChildImageSharpOriginalWidth = 'geisel___childImageSharp___original___width',
  GeiselChildImageSharpOriginalHeight = 'geisel___childImageSharp___original___height',
  GeiselChildImageSharpOriginalSrc = 'geisel___childImageSharp___original___src',
  GeiselChildImageSharpResizeSrc = 'geisel___childImageSharp___resize___src',
  GeiselChildImageSharpResizeTracedSvg = 'geisel___childImageSharp___resize___tracedSVG',
  GeiselChildImageSharpResizeWidth = 'geisel___childImageSharp___resize___width',
  GeiselChildImageSharpResizeHeight = 'geisel___childImageSharp___resize___height',
  GeiselChildImageSharpResizeAspectRatio = 'geisel___childImageSharp___resize___aspectRatio',
  GeiselChildImageSharpResizeOriginalName = 'geisel___childImageSharp___resize___originalName',
  GeiselChildImageSharpId = 'geisel___childImageSharp___id',
  GeiselChildImageSharpParentId = 'geisel___childImageSharp___parent___id',
  GeiselChildImageSharpParentChildren = 'geisel___childImageSharp___parent___children',
  GeiselChildImageSharpChildren = 'geisel___childImageSharp___children',
  GeiselChildImageSharpChildrenId = 'geisel___childImageSharp___children___id',
  GeiselChildImageSharpChildrenChildren = 'geisel___childImageSharp___children___children',
  GeiselChildImageSharpInternalContent = 'geisel___childImageSharp___internal___content',
  GeiselChildImageSharpInternalContentDigest = 'geisel___childImageSharp___internal___contentDigest',
  GeiselChildImageSharpInternalDescription = 'geisel___childImageSharp___internal___description',
  GeiselChildImageSharpInternalFieldOwners = 'geisel___childImageSharp___internal___fieldOwners',
  GeiselChildImageSharpInternalIgnoreType = 'geisel___childImageSharp___internal___ignoreType',
  GeiselChildImageSharpInternalMediaType = 'geisel___childImageSharp___internal___mediaType',
  GeiselChildImageSharpInternalOwner = 'geisel___childImageSharp___internal___owner',
  GeiselChildImageSharpInternalType = 'geisel___childImageSharp___internal___type',
  GeiselId = 'geisel___id',
  GeiselParentId = 'geisel___parent___id',
  GeiselParentParentId = 'geisel___parent___parent___id',
  GeiselParentParentChildren = 'geisel___parent___parent___children',
  GeiselParentChildren = 'geisel___parent___children',
  GeiselParentChildrenId = 'geisel___parent___children___id',
  GeiselParentChildrenChildren = 'geisel___parent___children___children',
  GeiselParentInternalContent = 'geisel___parent___internal___content',
  GeiselParentInternalContentDigest = 'geisel___parent___internal___contentDigest',
  GeiselParentInternalDescription = 'geisel___parent___internal___description',
  GeiselParentInternalFieldOwners = 'geisel___parent___internal___fieldOwners',
  GeiselParentInternalIgnoreType = 'geisel___parent___internal___ignoreType',
  GeiselParentInternalMediaType = 'geisel___parent___internal___mediaType',
  GeiselParentInternalOwner = 'geisel___parent___internal___owner',
  GeiselParentInternalType = 'geisel___parent___internal___type',
  GeiselChildren = 'geisel___children',
  GeiselChildrenId = 'geisel___children___id',
  GeiselChildrenParentId = 'geisel___children___parent___id',
  GeiselChildrenParentChildren = 'geisel___children___parent___children',
  GeiselChildrenChildren = 'geisel___children___children',
  GeiselChildrenChildrenId = 'geisel___children___children___id',
  GeiselChildrenChildrenChildren = 'geisel___children___children___children',
  GeiselChildrenInternalContent = 'geisel___children___internal___content',
  GeiselChildrenInternalContentDigest = 'geisel___children___internal___contentDigest',
  GeiselChildrenInternalDescription = 'geisel___children___internal___description',
  GeiselChildrenInternalFieldOwners = 'geisel___children___internal___fieldOwners',
  GeiselChildrenInternalIgnoreType = 'geisel___children___internal___ignoreType',
  GeiselChildrenInternalMediaType = 'geisel___children___internal___mediaType',
  GeiselChildrenInternalOwner = 'geisel___children___internal___owner',
  GeiselChildrenInternalType = 'geisel___children___internal___type',
  GeiselInternalContent = 'geisel___internal___content',
  GeiselInternalContentDigest = 'geisel___internal___contentDigest',
  GeiselInternalDescription = 'geisel___internal___description',
  GeiselInternalFieldOwners = 'geisel___internal___fieldOwners',
  GeiselInternalIgnoreType = 'geisel___internal___ignoreType',
  GeiselInternalMediaType = 'geisel___internal___mediaType',
  GeiselInternalOwner = 'geisel___internal___owner',
  GeiselInternalType = 'geisel___internal___type',
  GeiselChildDataJsonId = 'geisel___childDataJson___id',
  GeiselChildDataJsonParentId = 'geisel___childDataJson___parent___id',
  GeiselChildDataJsonParentChildren = 'geisel___childDataJson___parent___children',
  GeiselChildDataJsonChildren = 'geisel___childDataJson___children',
  GeiselChildDataJsonChildrenId = 'geisel___childDataJson___children___id',
  GeiselChildDataJsonChildrenChildren = 'geisel___childDataJson___children___children',
  GeiselChildDataJsonInternalContent = 'geisel___childDataJson___internal___content',
  GeiselChildDataJsonInternalContentDigest = 'geisel___childDataJson___internal___contentDigest',
  GeiselChildDataJsonInternalDescription = 'geisel___childDataJson___internal___description',
  GeiselChildDataJsonInternalFieldOwners = 'geisel___childDataJson___internal___fieldOwners',
  GeiselChildDataJsonInternalIgnoreType = 'geisel___childDataJson___internal___ignoreType',
  GeiselChildDataJsonInternalMediaType = 'geisel___childDataJson___internal___mediaType',
  GeiselChildDataJsonInternalOwner = 'geisel___childDataJson___internal___owner',
  GeiselChildDataJsonInternalType = 'geisel___childDataJson___internal___type',
  GeiselChildDataJsonKey = 'geisel___childDataJson___key',
  GeiselChildDataJsonTitle = 'geisel___childDataJson___title',
  GeiselChildDataJsonContent = 'geisel___childDataJson___content',
  GeiselChildDataJsonLinkedIn = 'geisel___childDataJson___linkedIn',
  GeiselChildDataJsonInstagram = 'geisel___childDataJson___instagram',
  GeiselChildDataJsonGitHub = 'geisel___childDataJson___gitHub',
  GeiselChildDataJsonEmail = 'geisel___childDataJson___email',
  GeiselChildDataJsonFooter = 'geisel___childDataJson___footer',
  GeiselChildDataJsonNumSections = 'geisel___childDataJson___numSections',
  GeiselChildDataJsonFaces = 'geisel___childDataJson___faces',
  GeiselChildDataJsonFacesSourceInstanceName = 'geisel___childDataJson___faces___sourceInstanceName',
  GeiselChildDataJsonFacesAbsolutePath = 'geisel___childDataJson___faces___absolutePath',
  GeiselChildDataJsonFacesRelativePath = 'geisel___childDataJson___faces___relativePath',
  GeiselChildDataJsonFacesExtension = 'geisel___childDataJson___faces___extension',
  GeiselChildDataJsonFacesSize = 'geisel___childDataJson___faces___size',
  GeiselChildDataJsonFacesPrettySize = 'geisel___childDataJson___faces___prettySize',
  GeiselChildDataJsonFacesModifiedTime = 'geisel___childDataJson___faces___modifiedTime',
  GeiselChildDataJsonFacesAccessTime = 'geisel___childDataJson___faces___accessTime',
  GeiselChildDataJsonFacesChangeTime = 'geisel___childDataJson___faces___changeTime',
  GeiselChildDataJsonFacesBirthTime = 'geisel___childDataJson___faces___birthTime',
  GeiselChildDataJsonFacesRoot = 'geisel___childDataJson___faces___root',
  GeiselChildDataJsonFacesDir = 'geisel___childDataJson___faces___dir',
  GeiselChildDataJsonFacesBase = 'geisel___childDataJson___faces___base',
  GeiselChildDataJsonFacesExt = 'geisel___childDataJson___faces___ext',
  GeiselChildDataJsonFacesName = 'geisel___childDataJson___faces___name',
  GeiselChildDataJsonFacesRelativeDirectory = 'geisel___childDataJson___faces___relativeDirectory',
  GeiselChildDataJsonFacesDev = 'geisel___childDataJson___faces___dev',
  GeiselChildDataJsonFacesMode = 'geisel___childDataJson___faces___mode',
  GeiselChildDataJsonFacesNlink = 'geisel___childDataJson___faces___nlink',
  GeiselChildDataJsonFacesUid = 'geisel___childDataJson___faces___uid',
  GeiselChildDataJsonFacesGid = 'geisel___childDataJson___faces___gid',
  GeiselChildDataJsonFacesRdev = 'geisel___childDataJson___faces___rdev',
  GeiselChildDataJsonFacesIno = 'geisel___childDataJson___faces___ino',
  GeiselChildDataJsonFacesAtimeMs = 'geisel___childDataJson___faces___atimeMs',
  GeiselChildDataJsonFacesMtimeMs = 'geisel___childDataJson___faces___mtimeMs',
  GeiselChildDataJsonFacesCtimeMs = 'geisel___childDataJson___faces___ctimeMs',
  GeiselChildDataJsonFacesAtime = 'geisel___childDataJson___faces___atime',
  GeiselChildDataJsonFacesMtime = 'geisel___childDataJson___faces___mtime',
  GeiselChildDataJsonFacesCtime = 'geisel___childDataJson___faces___ctime',
  GeiselChildDataJsonFacesBirthtime = 'geisel___childDataJson___faces___birthtime',
  GeiselChildDataJsonFacesBirthtimeMs = 'geisel___childDataJson___faces___birthtimeMs',
  GeiselChildDataJsonFacesBlksize = 'geisel___childDataJson___faces___blksize',
  GeiselChildDataJsonFacesBlocks = 'geisel___childDataJson___faces___blocks',
  GeiselChildDataJsonFacesPublicUrl = 'geisel___childDataJson___faces___publicURL',
  GeiselChildDataJsonFacesId = 'geisel___childDataJson___faces___id',
  GeiselChildDataJsonFacesChildren = 'geisel___childDataJson___faces___children',
  GeiselChildDataJsonFamiliarSkillsDescription = 'geisel___childDataJson___familiarSkills___description',
  GeiselChildDataJsonFamiliarSkillsSkills = 'geisel___childDataJson___familiarSkills___skills',
  GeiselChildDataJsonOtherSkillsDescription = 'geisel___childDataJson___otherSkills___description',
  GeiselChildDataJsonOtherSkillsSkills = 'geisel___childDataJson___otherSkills___skills',
  GeiselChildDataJsonResumeSourceInstanceName = 'geisel___childDataJson___resume___sourceInstanceName',
  GeiselChildDataJsonResumeAbsolutePath = 'geisel___childDataJson___resume___absolutePath',
  GeiselChildDataJsonResumeRelativePath = 'geisel___childDataJson___resume___relativePath',
  GeiselChildDataJsonResumeExtension = 'geisel___childDataJson___resume___extension',
  GeiselChildDataJsonResumeSize = 'geisel___childDataJson___resume___size',
  GeiselChildDataJsonResumePrettySize = 'geisel___childDataJson___resume___prettySize',
  GeiselChildDataJsonResumeModifiedTime = 'geisel___childDataJson___resume___modifiedTime',
  GeiselChildDataJsonResumeAccessTime = 'geisel___childDataJson___resume___accessTime',
  GeiselChildDataJsonResumeChangeTime = 'geisel___childDataJson___resume___changeTime',
  GeiselChildDataJsonResumeBirthTime = 'geisel___childDataJson___resume___birthTime',
  GeiselChildDataJsonResumeRoot = 'geisel___childDataJson___resume___root',
  GeiselChildDataJsonResumeDir = 'geisel___childDataJson___resume___dir',
  GeiselChildDataJsonResumeBase = 'geisel___childDataJson___resume___base',
  GeiselChildDataJsonResumeExt = 'geisel___childDataJson___resume___ext',
  GeiselChildDataJsonResumeName = 'geisel___childDataJson___resume___name',
  GeiselChildDataJsonResumeRelativeDirectory = 'geisel___childDataJson___resume___relativeDirectory',
  GeiselChildDataJsonResumeDev = 'geisel___childDataJson___resume___dev',
  GeiselChildDataJsonResumeMode = 'geisel___childDataJson___resume___mode',
  GeiselChildDataJsonResumeNlink = 'geisel___childDataJson___resume___nlink',
  GeiselChildDataJsonResumeUid = 'geisel___childDataJson___resume___uid',
  GeiselChildDataJsonResumeGid = 'geisel___childDataJson___resume___gid',
  GeiselChildDataJsonResumeRdev = 'geisel___childDataJson___resume___rdev',
  GeiselChildDataJsonResumeIno = 'geisel___childDataJson___resume___ino',
  GeiselChildDataJsonResumeAtimeMs = 'geisel___childDataJson___resume___atimeMs',
  GeiselChildDataJsonResumeMtimeMs = 'geisel___childDataJson___resume___mtimeMs',
  GeiselChildDataJsonResumeCtimeMs = 'geisel___childDataJson___resume___ctimeMs',
  GeiselChildDataJsonResumeAtime = 'geisel___childDataJson___resume___atime',
  GeiselChildDataJsonResumeMtime = 'geisel___childDataJson___resume___mtime',
  GeiselChildDataJsonResumeCtime = 'geisel___childDataJson___resume___ctime',
  GeiselChildDataJsonResumeBirthtime = 'geisel___childDataJson___resume___birthtime',
  GeiselChildDataJsonResumeBirthtimeMs = 'geisel___childDataJson___resume___birthtimeMs',
  GeiselChildDataJsonResumeBlksize = 'geisel___childDataJson___resume___blksize',
  GeiselChildDataJsonResumeBlocks = 'geisel___childDataJson___resume___blocks',
  GeiselChildDataJsonResumePublicUrl = 'geisel___childDataJson___resume___publicURL',
  GeiselChildDataJsonResumeId = 'geisel___childDataJson___resume___id',
  GeiselChildDataJsonResumeChildren = 'geisel___childDataJson___resume___children',
  GeiselChildDataJsonTitleEmoji = 'geisel___childDataJson___titleEmoji',
  GeiselChildDataJsonProjects = 'geisel___childDataJson___projects',
  GeiselChildDataJsonProjectsTitle = 'geisel___childDataJson___projects___title',
  GeiselChildDataJsonProjectsContent = 'geisel___childDataJson___projects___content',
  GeiselChildDataJsonProjectsLink = 'geisel___childDataJson___projects___link',
  GeiselChildDataJsonProjectsCodeLink = 'geisel___childDataJson___projects___codeLink',
  GeiselChildDataJsonProjectsMobileTitle = 'geisel___childDataJson___projects___mobileTitle',
  GeiselChildDataJsonGeiselSourceInstanceName = 'geisel___childDataJson___geisel___sourceInstanceName',
  GeiselChildDataJsonGeiselAbsolutePath = 'geisel___childDataJson___geisel___absolutePath',
  GeiselChildDataJsonGeiselRelativePath = 'geisel___childDataJson___geisel___relativePath',
  GeiselChildDataJsonGeiselExtension = 'geisel___childDataJson___geisel___extension',
  GeiselChildDataJsonGeiselSize = 'geisel___childDataJson___geisel___size',
  GeiselChildDataJsonGeiselPrettySize = 'geisel___childDataJson___geisel___prettySize',
  GeiselChildDataJsonGeiselModifiedTime = 'geisel___childDataJson___geisel___modifiedTime',
  GeiselChildDataJsonGeiselAccessTime = 'geisel___childDataJson___geisel___accessTime',
  GeiselChildDataJsonGeiselChangeTime = 'geisel___childDataJson___geisel___changeTime',
  GeiselChildDataJsonGeiselBirthTime = 'geisel___childDataJson___geisel___birthTime',
  GeiselChildDataJsonGeiselRoot = 'geisel___childDataJson___geisel___root',
  GeiselChildDataJsonGeiselDir = 'geisel___childDataJson___geisel___dir',
  GeiselChildDataJsonGeiselBase = 'geisel___childDataJson___geisel___base',
  GeiselChildDataJsonGeiselExt = 'geisel___childDataJson___geisel___ext',
  GeiselChildDataJsonGeiselName = 'geisel___childDataJson___geisel___name',
  GeiselChildDataJsonGeiselRelativeDirectory = 'geisel___childDataJson___geisel___relativeDirectory',
  GeiselChildDataJsonGeiselDev = 'geisel___childDataJson___geisel___dev',
  GeiselChildDataJsonGeiselMode = 'geisel___childDataJson___geisel___mode',
  GeiselChildDataJsonGeiselNlink = 'geisel___childDataJson___geisel___nlink',
  GeiselChildDataJsonGeiselUid = 'geisel___childDataJson___geisel___uid',
  GeiselChildDataJsonGeiselGid = 'geisel___childDataJson___geisel___gid',
  GeiselChildDataJsonGeiselRdev = 'geisel___childDataJson___geisel___rdev',
  GeiselChildDataJsonGeiselIno = 'geisel___childDataJson___geisel___ino',
  GeiselChildDataJsonGeiselAtimeMs = 'geisel___childDataJson___geisel___atimeMs',
  GeiselChildDataJsonGeiselMtimeMs = 'geisel___childDataJson___geisel___mtimeMs',
  GeiselChildDataJsonGeiselCtimeMs = 'geisel___childDataJson___geisel___ctimeMs',
  GeiselChildDataJsonGeiselAtime = 'geisel___childDataJson___geisel___atime',
  GeiselChildDataJsonGeiselMtime = 'geisel___childDataJson___geisel___mtime',
  GeiselChildDataJsonGeiselCtime = 'geisel___childDataJson___geisel___ctime',
  GeiselChildDataJsonGeiselBirthtime = 'geisel___childDataJson___geisel___birthtime',
  GeiselChildDataJsonGeiselBirthtimeMs = 'geisel___childDataJson___geisel___birthtimeMs',
  GeiselChildDataJsonGeiselBlksize = 'geisel___childDataJson___geisel___blksize',
  GeiselChildDataJsonGeiselBlocks = 'geisel___childDataJson___geisel___blocks',
  GeiselChildDataJsonGeiselPublicUrl = 'geisel___childDataJson___geisel___publicURL',
  GeiselChildDataJsonGeiselId = 'geisel___childDataJson___geisel___id',
  GeiselChildDataJsonGeiselChildren = 'geisel___childDataJson___geisel___children',
  GeiselChildDataJsonCourses = 'geisel___childDataJson___courses',
  GeiselChildDataJsonWork = 'geisel___childDataJson___work',
  GeiselChildDataJsonWorkTitle = 'geisel___childDataJson___work___title',
  GeiselChildDataJsonWorkDate = 'geisel___childDataJson___work___date',
  GeiselChildDataJsonWorkContent = 'geisel___childDataJson___work___content',
  GeiselChildDataJsonWorkLink = 'geisel___childDataJson___work___link',
  GeiselChildDataJsonTitleEmojiLabel = 'geisel___childDataJson___titleEmojiLabel',
  Courses = 'courses',
  NumSections = 'numSections',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SchoolJsonConnection = {
  __typename?: 'SchoolJsonConnection';
  totalCount: Scalars['Int'];
  edges: Array<SchoolJsonEdge>;
  nodes: Array<SchoolJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SchoolJsonGroupConnection>;
};


export type SchoolJsonConnectionDistinctArgs = {
  field: SchoolJsonFieldsEnum;
};


export type SchoolJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SchoolJsonFieldsEnum;
};

export type SchoolJsonEdge = {
  __typename?: 'SchoolJsonEdge';
  next?: Maybe<SchoolJson>;
  node: SchoolJson;
  previous?: Maybe<SchoolJson>;
};

export type SchoolJsonGroupConnection = {
  __typename?: 'SchoolJsonGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SchoolJsonEdge>;
  nodes: Array<SchoolJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type JobFilterListInput = {
  elemMatch?: Maybe<JobFilterInput>;
};

export type JobFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
};

export type WorkJson = Node & {
  __typename?: 'WorkJson';
  title: Scalars['String'];
  content: Array<Scalars['String']>;
  work: Array<Job>;
  numSections: Scalars['Int'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Job = {
  __typename?: 'Job';
  title: Scalars['String'];
  date: Scalars['String'];
  content: Array<Scalars['String']>;
  link: Scalars['String'];
};

export type WorkJsonFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  work?: Maybe<JobFilterListInput>;
  numSections?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WorkJsonSortInput = {
  fields?: Maybe<Array<Maybe<WorkJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum WorkJsonFieldsEnum {
  Title = 'title',
  Content = 'content',
  Work = 'work',
  WorkTitle = 'work___title',
  WorkDate = 'work___date',
  WorkContent = 'work___content',
  WorkLink = 'work___link',
  NumSections = 'numSections',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WorkJsonConnection = {
  __typename?: 'WorkJsonConnection';
  totalCount: Scalars['Int'];
  edges: Array<WorkJsonEdge>;
  nodes: Array<WorkJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WorkJsonGroupConnection>;
};


export type WorkJsonConnectionDistinctArgs = {
  field: WorkJsonFieldsEnum;
};


export type WorkJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WorkJsonFieldsEnum;
};

export type WorkJsonEdge = {
  __typename?: 'WorkJsonEdge';
  next?: Maybe<WorkJson>;
  node: WorkJson;
  previous?: Maybe<WorkJson>;
};

export type WorkJsonGroupConnection = {
  __typename?: 'WorkJsonGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WorkJsonEdge>;
  nodes: Array<WorkJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ProjectFilterListInput = {
  elemMatch?: Maybe<ProjectFilterInput>;
};

export type ProjectFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  titleEmoji?: Maybe<StringQueryOperatorInput>;
  titleEmojiLabel?: Maybe<StringQueryOperatorInput>;
  mobileTitle?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  codeLink?: Maybe<StringQueryOperatorInput>;
};

export type ProjectsJson = Node & {
  __typename?: 'ProjectsJson';
  title: Scalars['String'];
  content: Array<Scalars['String']>;
  projects: Array<Project>;
  numSections: Scalars['Int'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Project = {
  __typename?: 'Project';
  title: Scalars['String'];
  titleEmoji: Scalars['String'];
  titleEmojiLabel: Scalars['String'];
  mobileTitle?: Maybe<Scalars['String']>;
  content: Array<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  codeLink?: Maybe<Scalars['String']>;
};

export type ProjectsJsonFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<ProjectFilterListInput>;
  numSections?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ProjectsJsonSortInput = {
  fields?: Maybe<Array<Maybe<ProjectsJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ProjectsJsonFieldsEnum {
  Title = 'title',
  Content = 'content',
  Projects = 'projects',
  ProjectsTitle = 'projects___title',
  ProjectsTitleEmoji = 'projects___titleEmoji',
  ProjectsTitleEmojiLabel = 'projects___titleEmojiLabel',
  ProjectsMobileTitle = 'projects___mobileTitle',
  ProjectsContent = 'projects___content',
  ProjectsLink = 'projects___link',
  ProjectsCodeLink = 'projects___codeLink',
  NumSections = 'numSections',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ProjectsJsonConnection = {
  __typename?: 'ProjectsJsonConnection';
  totalCount: Scalars['Int'];
  edges: Array<ProjectsJsonEdge>;
  nodes: Array<ProjectsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ProjectsJsonGroupConnection>;
};


export type ProjectsJsonConnectionDistinctArgs = {
  field: ProjectsJsonFieldsEnum;
};


export type ProjectsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ProjectsJsonFieldsEnum;
};

export type ProjectsJsonEdge = {
  __typename?: 'ProjectsJsonEdge';
  next?: Maybe<ProjectsJson>;
  node: ProjectsJson;
  previous?: Maybe<ProjectsJson>;
};

export type ProjectsJsonGroupConnection = {
  __typename?: 'ProjectsJsonGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ProjectsJsonEdge>;
  nodes: Array<ProjectsJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContactJson = Node & {
  __typename?: 'ContactJson';
  title: Scalars['String'];
  titleEmoji: Scalars['String'];
  titleEmojiLabel: Scalars['String'];
  content: Array<Scalars['String']>;
  linkedIn: Scalars['String'];
  instagram: Scalars['String'];
  gitHub: Scalars['String'];
  email: Scalars['String'];
  footer: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContactJsonFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  titleEmoji?: Maybe<StringQueryOperatorInput>;
  titleEmojiLabel?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  linkedIn?: Maybe<StringQueryOperatorInput>;
  instagram?: Maybe<StringQueryOperatorInput>;
  gitHub?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  footer?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContactJsonSortInput = {
  fields?: Maybe<Array<Maybe<ContactJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ContactJsonFieldsEnum {
  Title = 'title',
  TitleEmoji = 'titleEmoji',
  TitleEmojiLabel = 'titleEmojiLabel',
  Content = 'content',
  LinkedIn = 'linkedIn',
  Instagram = 'instagram',
  GitHub = 'gitHub',
  Email = 'email',
  Footer = 'footer',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContactJsonConnection = {
  __typename?: 'ContactJsonConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContactJsonEdge>;
  nodes: Array<ContactJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContactJsonGroupConnection>;
};


export type ContactJsonConnectionDistinctArgs = {
  field: ContactJsonFieldsEnum;
};


export type ContactJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContactJsonFieldsEnum;
};

export type ContactJsonEdge = {
  __typename?: 'ContactJsonEdge';
  next?: Maybe<ContactJson>;
  node: ContactJson;
  previous?: Maybe<ContactJson>;
};

export type ContactJsonGroupConnection = {
  __typename?: 'ContactJsonGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContactJsonEdge>;
  nodes: Array<ContactJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DataJsonSortInput = {
  fields?: Maybe<Array<Maybe<DataJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum DataJsonFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Key = 'key',
  Title = 'title',
  Content = 'content',
  LinkedIn = 'linkedIn',
  Instagram = 'instagram',
  GitHub = 'gitHub',
  Email = 'email',
  Footer = 'footer',
  NumSections = 'numSections',
  Faces = 'faces',
  FacesSourceInstanceName = 'faces___sourceInstanceName',
  FacesAbsolutePath = 'faces___absolutePath',
  FacesRelativePath = 'faces___relativePath',
  FacesExtension = 'faces___extension',
  FacesSize = 'faces___size',
  FacesPrettySize = 'faces___prettySize',
  FacesModifiedTime = 'faces___modifiedTime',
  FacesAccessTime = 'faces___accessTime',
  FacesChangeTime = 'faces___changeTime',
  FacesBirthTime = 'faces___birthTime',
  FacesRoot = 'faces___root',
  FacesDir = 'faces___dir',
  FacesBase = 'faces___base',
  FacesExt = 'faces___ext',
  FacesName = 'faces___name',
  FacesRelativeDirectory = 'faces___relativeDirectory',
  FacesDev = 'faces___dev',
  FacesMode = 'faces___mode',
  FacesNlink = 'faces___nlink',
  FacesUid = 'faces___uid',
  FacesGid = 'faces___gid',
  FacesRdev = 'faces___rdev',
  FacesIno = 'faces___ino',
  FacesAtimeMs = 'faces___atimeMs',
  FacesMtimeMs = 'faces___mtimeMs',
  FacesCtimeMs = 'faces___ctimeMs',
  FacesAtime = 'faces___atime',
  FacesMtime = 'faces___mtime',
  FacesCtime = 'faces___ctime',
  FacesBirthtime = 'faces___birthtime',
  FacesBirthtimeMs = 'faces___birthtimeMs',
  FacesBlksize = 'faces___blksize',
  FacesBlocks = 'faces___blocks',
  FacesPublicUrl = 'faces___publicURL',
  FacesChildImageSharpFixedBase64 = 'faces___childImageSharp___fixed___base64',
  FacesChildImageSharpFixedTracedSvg = 'faces___childImageSharp___fixed___tracedSVG',
  FacesChildImageSharpFixedAspectRatio = 'faces___childImageSharp___fixed___aspectRatio',
  FacesChildImageSharpFixedWidth = 'faces___childImageSharp___fixed___width',
  FacesChildImageSharpFixedHeight = 'faces___childImageSharp___fixed___height',
  FacesChildImageSharpFixedSrc = 'faces___childImageSharp___fixed___src',
  FacesChildImageSharpFixedSrcSet = 'faces___childImageSharp___fixed___srcSet',
  FacesChildImageSharpFixedSrcWebp = 'faces___childImageSharp___fixed___srcWebp',
  FacesChildImageSharpFixedSrcSetWebp = 'faces___childImageSharp___fixed___srcSetWebp',
  FacesChildImageSharpFixedOriginalName = 'faces___childImageSharp___fixed___originalName',
  FacesChildImageSharpResolutionsBase64 = 'faces___childImageSharp___resolutions___base64',
  FacesChildImageSharpResolutionsTracedSvg = 'faces___childImageSharp___resolutions___tracedSVG',
  FacesChildImageSharpResolutionsAspectRatio = 'faces___childImageSharp___resolutions___aspectRatio',
  FacesChildImageSharpResolutionsWidth = 'faces___childImageSharp___resolutions___width',
  FacesChildImageSharpResolutionsHeight = 'faces___childImageSharp___resolutions___height',
  FacesChildImageSharpResolutionsSrc = 'faces___childImageSharp___resolutions___src',
  FacesChildImageSharpResolutionsSrcSet = 'faces___childImageSharp___resolutions___srcSet',
  FacesChildImageSharpResolutionsSrcWebp = 'faces___childImageSharp___resolutions___srcWebp',
  FacesChildImageSharpResolutionsSrcSetWebp = 'faces___childImageSharp___resolutions___srcSetWebp',
  FacesChildImageSharpResolutionsOriginalName = 'faces___childImageSharp___resolutions___originalName',
  FacesChildImageSharpFluidBase64 = 'faces___childImageSharp___fluid___base64',
  FacesChildImageSharpFluidTracedSvg = 'faces___childImageSharp___fluid___tracedSVG',
  FacesChildImageSharpFluidAspectRatio = 'faces___childImageSharp___fluid___aspectRatio',
  FacesChildImageSharpFluidSrc = 'faces___childImageSharp___fluid___src',
  FacesChildImageSharpFluidSrcSet = 'faces___childImageSharp___fluid___srcSet',
  FacesChildImageSharpFluidSrcWebp = 'faces___childImageSharp___fluid___srcWebp',
  FacesChildImageSharpFluidSrcSetWebp = 'faces___childImageSharp___fluid___srcSetWebp',
  FacesChildImageSharpFluidSizes = 'faces___childImageSharp___fluid___sizes',
  FacesChildImageSharpFluidOriginalImg = 'faces___childImageSharp___fluid___originalImg',
  FacesChildImageSharpFluidOriginalName = 'faces___childImageSharp___fluid___originalName',
  FacesChildImageSharpFluidPresentationWidth = 'faces___childImageSharp___fluid___presentationWidth',
  FacesChildImageSharpFluidPresentationHeight = 'faces___childImageSharp___fluid___presentationHeight',
  FacesChildImageSharpSizesBase64 = 'faces___childImageSharp___sizes___base64',
  FacesChildImageSharpSizesTracedSvg = 'faces___childImageSharp___sizes___tracedSVG',
  FacesChildImageSharpSizesAspectRatio = 'faces___childImageSharp___sizes___aspectRatio',
  FacesChildImageSharpSizesSrc = 'faces___childImageSharp___sizes___src',
  FacesChildImageSharpSizesSrcSet = 'faces___childImageSharp___sizes___srcSet',
  FacesChildImageSharpSizesSrcWebp = 'faces___childImageSharp___sizes___srcWebp',
  FacesChildImageSharpSizesSrcSetWebp = 'faces___childImageSharp___sizes___srcSetWebp',
  FacesChildImageSharpSizesSizes = 'faces___childImageSharp___sizes___sizes',
  FacesChildImageSharpSizesOriginalImg = 'faces___childImageSharp___sizes___originalImg',
  FacesChildImageSharpSizesOriginalName = 'faces___childImageSharp___sizes___originalName',
  FacesChildImageSharpSizesPresentationWidth = 'faces___childImageSharp___sizes___presentationWidth',
  FacesChildImageSharpSizesPresentationHeight = 'faces___childImageSharp___sizes___presentationHeight',
  FacesChildImageSharpOriginalWidth = 'faces___childImageSharp___original___width',
  FacesChildImageSharpOriginalHeight = 'faces___childImageSharp___original___height',
  FacesChildImageSharpOriginalSrc = 'faces___childImageSharp___original___src',
  FacesChildImageSharpResizeSrc = 'faces___childImageSharp___resize___src',
  FacesChildImageSharpResizeTracedSvg = 'faces___childImageSharp___resize___tracedSVG',
  FacesChildImageSharpResizeWidth = 'faces___childImageSharp___resize___width',
  FacesChildImageSharpResizeHeight = 'faces___childImageSharp___resize___height',
  FacesChildImageSharpResizeAspectRatio = 'faces___childImageSharp___resize___aspectRatio',
  FacesChildImageSharpResizeOriginalName = 'faces___childImageSharp___resize___originalName',
  FacesChildImageSharpId = 'faces___childImageSharp___id',
  FacesChildImageSharpParentId = 'faces___childImageSharp___parent___id',
  FacesChildImageSharpParentChildren = 'faces___childImageSharp___parent___children',
  FacesChildImageSharpChildren = 'faces___childImageSharp___children',
  FacesChildImageSharpChildrenId = 'faces___childImageSharp___children___id',
  FacesChildImageSharpChildrenChildren = 'faces___childImageSharp___children___children',
  FacesChildImageSharpInternalContent = 'faces___childImageSharp___internal___content',
  FacesChildImageSharpInternalContentDigest = 'faces___childImageSharp___internal___contentDigest',
  FacesChildImageSharpInternalDescription = 'faces___childImageSharp___internal___description',
  FacesChildImageSharpInternalFieldOwners = 'faces___childImageSharp___internal___fieldOwners',
  FacesChildImageSharpInternalIgnoreType = 'faces___childImageSharp___internal___ignoreType',
  FacesChildImageSharpInternalMediaType = 'faces___childImageSharp___internal___mediaType',
  FacesChildImageSharpInternalOwner = 'faces___childImageSharp___internal___owner',
  FacesChildImageSharpInternalType = 'faces___childImageSharp___internal___type',
  FacesId = 'faces___id',
  FacesParentId = 'faces___parent___id',
  FacesParentParentId = 'faces___parent___parent___id',
  FacesParentParentChildren = 'faces___parent___parent___children',
  FacesParentChildren = 'faces___parent___children',
  FacesParentChildrenId = 'faces___parent___children___id',
  FacesParentChildrenChildren = 'faces___parent___children___children',
  FacesParentInternalContent = 'faces___parent___internal___content',
  FacesParentInternalContentDigest = 'faces___parent___internal___contentDigest',
  FacesParentInternalDescription = 'faces___parent___internal___description',
  FacesParentInternalFieldOwners = 'faces___parent___internal___fieldOwners',
  FacesParentInternalIgnoreType = 'faces___parent___internal___ignoreType',
  FacesParentInternalMediaType = 'faces___parent___internal___mediaType',
  FacesParentInternalOwner = 'faces___parent___internal___owner',
  FacesParentInternalType = 'faces___parent___internal___type',
  FacesChildren = 'faces___children',
  FacesChildrenId = 'faces___children___id',
  FacesChildrenParentId = 'faces___children___parent___id',
  FacesChildrenParentChildren = 'faces___children___parent___children',
  FacesChildrenChildren = 'faces___children___children',
  FacesChildrenChildrenId = 'faces___children___children___id',
  FacesChildrenChildrenChildren = 'faces___children___children___children',
  FacesChildrenInternalContent = 'faces___children___internal___content',
  FacesChildrenInternalContentDigest = 'faces___children___internal___contentDigest',
  FacesChildrenInternalDescription = 'faces___children___internal___description',
  FacesChildrenInternalFieldOwners = 'faces___children___internal___fieldOwners',
  FacesChildrenInternalIgnoreType = 'faces___children___internal___ignoreType',
  FacesChildrenInternalMediaType = 'faces___children___internal___mediaType',
  FacesChildrenInternalOwner = 'faces___children___internal___owner',
  FacesChildrenInternalType = 'faces___children___internal___type',
  FacesInternalContent = 'faces___internal___content',
  FacesInternalContentDigest = 'faces___internal___contentDigest',
  FacesInternalDescription = 'faces___internal___description',
  FacesInternalFieldOwners = 'faces___internal___fieldOwners',
  FacesInternalIgnoreType = 'faces___internal___ignoreType',
  FacesInternalMediaType = 'faces___internal___mediaType',
  FacesInternalOwner = 'faces___internal___owner',
  FacesInternalType = 'faces___internal___type',
  FacesChildDataJsonId = 'faces___childDataJson___id',
  FacesChildDataJsonParentId = 'faces___childDataJson___parent___id',
  FacesChildDataJsonParentChildren = 'faces___childDataJson___parent___children',
  FacesChildDataJsonChildren = 'faces___childDataJson___children',
  FacesChildDataJsonChildrenId = 'faces___childDataJson___children___id',
  FacesChildDataJsonChildrenChildren = 'faces___childDataJson___children___children',
  FacesChildDataJsonInternalContent = 'faces___childDataJson___internal___content',
  FacesChildDataJsonInternalContentDigest = 'faces___childDataJson___internal___contentDigest',
  FacesChildDataJsonInternalDescription = 'faces___childDataJson___internal___description',
  FacesChildDataJsonInternalFieldOwners = 'faces___childDataJson___internal___fieldOwners',
  FacesChildDataJsonInternalIgnoreType = 'faces___childDataJson___internal___ignoreType',
  FacesChildDataJsonInternalMediaType = 'faces___childDataJson___internal___mediaType',
  FacesChildDataJsonInternalOwner = 'faces___childDataJson___internal___owner',
  FacesChildDataJsonInternalType = 'faces___childDataJson___internal___type',
  FacesChildDataJsonKey = 'faces___childDataJson___key',
  FacesChildDataJsonTitle = 'faces___childDataJson___title',
  FacesChildDataJsonContent = 'faces___childDataJson___content',
  FacesChildDataJsonLinkedIn = 'faces___childDataJson___linkedIn',
  FacesChildDataJsonInstagram = 'faces___childDataJson___instagram',
  FacesChildDataJsonGitHub = 'faces___childDataJson___gitHub',
  FacesChildDataJsonEmail = 'faces___childDataJson___email',
  FacesChildDataJsonFooter = 'faces___childDataJson___footer',
  FacesChildDataJsonNumSections = 'faces___childDataJson___numSections',
  FacesChildDataJsonFaces = 'faces___childDataJson___faces',
  FacesChildDataJsonFacesSourceInstanceName = 'faces___childDataJson___faces___sourceInstanceName',
  FacesChildDataJsonFacesAbsolutePath = 'faces___childDataJson___faces___absolutePath',
  FacesChildDataJsonFacesRelativePath = 'faces___childDataJson___faces___relativePath',
  FacesChildDataJsonFacesExtension = 'faces___childDataJson___faces___extension',
  FacesChildDataJsonFacesSize = 'faces___childDataJson___faces___size',
  FacesChildDataJsonFacesPrettySize = 'faces___childDataJson___faces___prettySize',
  FacesChildDataJsonFacesModifiedTime = 'faces___childDataJson___faces___modifiedTime',
  FacesChildDataJsonFacesAccessTime = 'faces___childDataJson___faces___accessTime',
  FacesChildDataJsonFacesChangeTime = 'faces___childDataJson___faces___changeTime',
  FacesChildDataJsonFacesBirthTime = 'faces___childDataJson___faces___birthTime',
  FacesChildDataJsonFacesRoot = 'faces___childDataJson___faces___root',
  FacesChildDataJsonFacesDir = 'faces___childDataJson___faces___dir',
  FacesChildDataJsonFacesBase = 'faces___childDataJson___faces___base',
  FacesChildDataJsonFacesExt = 'faces___childDataJson___faces___ext',
  FacesChildDataJsonFacesName = 'faces___childDataJson___faces___name',
  FacesChildDataJsonFacesRelativeDirectory = 'faces___childDataJson___faces___relativeDirectory',
  FacesChildDataJsonFacesDev = 'faces___childDataJson___faces___dev',
  FacesChildDataJsonFacesMode = 'faces___childDataJson___faces___mode',
  FacesChildDataJsonFacesNlink = 'faces___childDataJson___faces___nlink',
  FacesChildDataJsonFacesUid = 'faces___childDataJson___faces___uid',
  FacesChildDataJsonFacesGid = 'faces___childDataJson___faces___gid',
  FacesChildDataJsonFacesRdev = 'faces___childDataJson___faces___rdev',
  FacesChildDataJsonFacesIno = 'faces___childDataJson___faces___ino',
  FacesChildDataJsonFacesAtimeMs = 'faces___childDataJson___faces___atimeMs',
  FacesChildDataJsonFacesMtimeMs = 'faces___childDataJson___faces___mtimeMs',
  FacesChildDataJsonFacesCtimeMs = 'faces___childDataJson___faces___ctimeMs',
  FacesChildDataJsonFacesAtime = 'faces___childDataJson___faces___atime',
  FacesChildDataJsonFacesMtime = 'faces___childDataJson___faces___mtime',
  FacesChildDataJsonFacesCtime = 'faces___childDataJson___faces___ctime',
  FacesChildDataJsonFacesBirthtime = 'faces___childDataJson___faces___birthtime',
  FacesChildDataJsonFacesBirthtimeMs = 'faces___childDataJson___faces___birthtimeMs',
  FacesChildDataJsonFacesBlksize = 'faces___childDataJson___faces___blksize',
  FacesChildDataJsonFacesBlocks = 'faces___childDataJson___faces___blocks',
  FacesChildDataJsonFacesPublicUrl = 'faces___childDataJson___faces___publicURL',
  FacesChildDataJsonFacesId = 'faces___childDataJson___faces___id',
  FacesChildDataJsonFacesChildren = 'faces___childDataJson___faces___children',
  FacesChildDataJsonFamiliarSkillsDescription = 'faces___childDataJson___familiarSkills___description',
  FacesChildDataJsonFamiliarSkillsSkills = 'faces___childDataJson___familiarSkills___skills',
  FacesChildDataJsonOtherSkillsDescription = 'faces___childDataJson___otherSkills___description',
  FacesChildDataJsonOtherSkillsSkills = 'faces___childDataJson___otherSkills___skills',
  FacesChildDataJsonResumeSourceInstanceName = 'faces___childDataJson___resume___sourceInstanceName',
  FacesChildDataJsonResumeAbsolutePath = 'faces___childDataJson___resume___absolutePath',
  FacesChildDataJsonResumeRelativePath = 'faces___childDataJson___resume___relativePath',
  FacesChildDataJsonResumeExtension = 'faces___childDataJson___resume___extension',
  FacesChildDataJsonResumeSize = 'faces___childDataJson___resume___size',
  FacesChildDataJsonResumePrettySize = 'faces___childDataJson___resume___prettySize',
  FacesChildDataJsonResumeModifiedTime = 'faces___childDataJson___resume___modifiedTime',
  FacesChildDataJsonResumeAccessTime = 'faces___childDataJson___resume___accessTime',
  FacesChildDataJsonResumeChangeTime = 'faces___childDataJson___resume___changeTime',
  FacesChildDataJsonResumeBirthTime = 'faces___childDataJson___resume___birthTime',
  FacesChildDataJsonResumeRoot = 'faces___childDataJson___resume___root',
  FacesChildDataJsonResumeDir = 'faces___childDataJson___resume___dir',
  FacesChildDataJsonResumeBase = 'faces___childDataJson___resume___base',
  FacesChildDataJsonResumeExt = 'faces___childDataJson___resume___ext',
  FacesChildDataJsonResumeName = 'faces___childDataJson___resume___name',
  FacesChildDataJsonResumeRelativeDirectory = 'faces___childDataJson___resume___relativeDirectory',
  FacesChildDataJsonResumeDev = 'faces___childDataJson___resume___dev',
  FacesChildDataJsonResumeMode = 'faces___childDataJson___resume___mode',
  FacesChildDataJsonResumeNlink = 'faces___childDataJson___resume___nlink',
  FacesChildDataJsonResumeUid = 'faces___childDataJson___resume___uid',
  FacesChildDataJsonResumeGid = 'faces___childDataJson___resume___gid',
  FacesChildDataJsonResumeRdev = 'faces___childDataJson___resume___rdev',
  FacesChildDataJsonResumeIno = 'faces___childDataJson___resume___ino',
  FacesChildDataJsonResumeAtimeMs = 'faces___childDataJson___resume___atimeMs',
  FacesChildDataJsonResumeMtimeMs = 'faces___childDataJson___resume___mtimeMs',
  FacesChildDataJsonResumeCtimeMs = 'faces___childDataJson___resume___ctimeMs',
  FacesChildDataJsonResumeAtime = 'faces___childDataJson___resume___atime',
  FacesChildDataJsonResumeMtime = 'faces___childDataJson___resume___mtime',
  FacesChildDataJsonResumeCtime = 'faces___childDataJson___resume___ctime',
  FacesChildDataJsonResumeBirthtime = 'faces___childDataJson___resume___birthtime',
  FacesChildDataJsonResumeBirthtimeMs = 'faces___childDataJson___resume___birthtimeMs',
  FacesChildDataJsonResumeBlksize = 'faces___childDataJson___resume___blksize',
  FacesChildDataJsonResumeBlocks = 'faces___childDataJson___resume___blocks',
  FacesChildDataJsonResumePublicUrl = 'faces___childDataJson___resume___publicURL',
  FacesChildDataJsonResumeId = 'faces___childDataJson___resume___id',
  FacesChildDataJsonResumeChildren = 'faces___childDataJson___resume___children',
  FacesChildDataJsonTitleEmoji = 'faces___childDataJson___titleEmoji',
  FacesChildDataJsonProjects = 'faces___childDataJson___projects',
  FacesChildDataJsonProjectsTitle = 'faces___childDataJson___projects___title',
  FacesChildDataJsonProjectsContent = 'faces___childDataJson___projects___content',
  FacesChildDataJsonProjectsLink = 'faces___childDataJson___projects___link',
  FacesChildDataJsonProjectsCodeLink = 'faces___childDataJson___projects___codeLink',
  FacesChildDataJsonProjectsMobileTitle = 'faces___childDataJson___projects___mobileTitle',
  FacesChildDataJsonGeiselSourceInstanceName = 'faces___childDataJson___geisel___sourceInstanceName',
  FacesChildDataJsonGeiselAbsolutePath = 'faces___childDataJson___geisel___absolutePath',
  FacesChildDataJsonGeiselRelativePath = 'faces___childDataJson___geisel___relativePath',
  FacesChildDataJsonGeiselExtension = 'faces___childDataJson___geisel___extension',
  FacesChildDataJsonGeiselSize = 'faces___childDataJson___geisel___size',
  FacesChildDataJsonGeiselPrettySize = 'faces___childDataJson___geisel___prettySize',
  FacesChildDataJsonGeiselModifiedTime = 'faces___childDataJson___geisel___modifiedTime',
  FacesChildDataJsonGeiselAccessTime = 'faces___childDataJson___geisel___accessTime',
  FacesChildDataJsonGeiselChangeTime = 'faces___childDataJson___geisel___changeTime',
  FacesChildDataJsonGeiselBirthTime = 'faces___childDataJson___geisel___birthTime',
  FacesChildDataJsonGeiselRoot = 'faces___childDataJson___geisel___root',
  FacesChildDataJsonGeiselDir = 'faces___childDataJson___geisel___dir',
  FacesChildDataJsonGeiselBase = 'faces___childDataJson___geisel___base',
  FacesChildDataJsonGeiselExt = 'faces___childDataJson___geisel___ext',
  FacesChildDataJsonGeiselName = 'faces___childDataJson___geisel___name',
  FacesChildDataJsonGeiselRelativeDirectory = 'faces___childDataJson___geisel___relativeDirectory',
  FacesChildDataJsonGeiselDev = 'faces___childDataJson___geisel___dev',
  FacesChildDataJsonGeiselMode = 'faces___childDataJson___geisel___mode',
  FacesChildDataJsonGeiselNlink = 'faces___childDataJson___geisel___nlink',
  FacesChildDataJsonGeiselUid = 'faces___childDataJson___geisel___uid',
  FacesChildDataJsonGeiselGid = 'faces___childDataJson___geisel___gid',
  FacesChildDataJsonGeiselRdev = 'faces___childDataJson___geisel___rdev',
  FacesChildDataJsonGeiselIno = 'faces___childDataJson___geisel___ino',
  FacesChildDataJsonGeiselAtimeMs = 'faces___childDataJson___geisel___atimeMs',
  FacesChildDataJsonGeiselMtimeMs = 'faces___childDataJson___geisel___mtimeMs',
  FacesChildDataJsonGeiselCtimeMs = 'faces___childDataJson___geisel___ctimeMs',
  FacesChildDataJsonGeiselAtime = 'faces___childDataJson___geisel___atime',
  FacesChildDataJsonGeiselMtime = 'faces___childDataJson___geisel___mtime',
  FacesChildDataJsonGeiselCtime = 'faces___childDataJson___geisel___ctime',
  FacesChildDataJsonGeiselBirthtime = 'faces___childDataJson___geisel___birthtime',
  FacesChildDataJsonGeiselBirthtimeMs = 'faces___childDataJson___geisel___birthtimeMs',
  FacesChildDataJsonGeiselBlksize = 'faces___childDataJson___geisel___blksize',
  FacesChildDataJsonGeiselBlocks = 'faces___childDataJson___geisel___blocks',
  FacesChildDataJsonGeiselPublicUrl = 'faces___childDataJson___geisel___publicURL',
  FacesChildDataJsonGeiselId = 'faces___childDataJson___geisel___id',
  FacesChildDataJsonGeiselChildren = 'faces___childDataJson___geisel___children',
  FacesChildDataJsonCourses = 'faces___childDataJson___courses',
  FacesChildDataJsonWork = 'faces___childDataJson___work',
  FacesChildDataJsonWorkTitle = 'faces___childDataJson___work___title',
  FacesChildDataJsonWorkDate = 'faces___childDataJson___work___date',
  FacesChildDataJsonWorkContent = 'faces___childDataJson___work___content',
  FacesChildDataJsonWorkLink = 'faces___childDataJson___work___link',
  FacesChildDataJsonTitleEmojiLabel = 'faces___childDataJson___titleEmojiLabel',
  FamiliarSkillsDescription = 'familiarSkills___description',
  FamiliarSkillsSkills = 'familiarSkills___skills',
  OtherSkillsDescription = 'otherSkills___description',
  OtherSkillsSkills = 'otherSkills___skills',
  ResumeSourceInstanceName = 'resume___sourceInstanceName',
  ResumeAbsolutePath = 'resume___absolutePath',
  ResumeRelativePath = 'resume___relativePath',
  ResumeExtension = 'resume___extension',
  ResumeSize = 'resume___size',
  ResumePrettySize = 'resume___prettySize',
  ResumeModifiedTime = 'resume___modifiedTime',
  ResumeAccessTime = 'resume___accessTime',
  ResumeChangeTime = 'resume___changeTime',
  ResumeBirthTime = 'resume___birthTime',
  ResumeRoot = 'resume___root',
  ResumeDir = 'resume___dir',
  ResumeBase = 'resume___base',
  ResumeExt = 'resume___ext',
  ResumeName = 'resume___name',
  ResumeRelativeDirectory = 'resume___relativeDirectory',
  ResumeDev = 'resume___dev',
  ResumeMode = 'resume___mode',
  ResumeNlink = 'resume___nlink',
  ResumeUid = 'resume___uid',
  ResumeGid = 'resume___gid',
  ResumeRdev = 'resume___rdev',
  ResumeIno = 'resume___ino',
  ResumeAtimeMs = 'resume___atimeMs',
  ResumeMtimeMs = 'resume___mtimeMs',
  ResumeCtimeMs = 'resume___ctimeMs',
  ResumeAtime = 'resume___atime',
  ResumeMtime = 'resume___mtime',
  ResumeCtime = 'resume___ctime',
  ResumeBirthtime = 'resume___birthtime',
  ResumeBirthtimeMs = 'resume___birthtimeMs',
  ResumeBlksize = 'resume___blksize',
  ResumeBlocks = 'resume___blocks',
  ResumePublicUrl = 'resume___publicURL',
  ResumeChildImageSharpFixedBase64 = 'resume___childImageSharp___fixed___base64',
  ResumeChildImageSharpFixedTracedSvg = 'resume___childImageSharp___fixed___tracedSVG',
  ResumeChildImageSharpFixedAspectRatio = 'resume___childImageSharp___fixed___aspectRatio',
  ResumeChildImageSharpFixedWidth = 'resume___childImageSharp___fixed___width',
  ResumeChildImageSharpFixedHeight = 'resume___childImageSharp___fixed___height',
  ResumeChildImageSharpFixedSrc = 'resume___childImageSharp___fixed___src',
  ResumeChildImageSharpFixedSrcSet = 'resume___childImageSharp___fixed___srcSet',
  ResumeChildImageSharpFixedSrcWebp = 'resume___childImageSharp___fixed___srcWebp',
  ResumeChildImageSharpFixedSrcSetWebp = 'resume___childImageSharp___fixed___srcSetWebp',
  ResumeChildImageSharpFixedOriginalName = 'resume___childImageSharp___fixed___originalName',
  ResumeChildImageSharpResolutionsBase64 = 'resume___childImageSharp___resolutions___base64',
  ResumeChildImageSharpResolutionsTracedSvg = 'resume___childImageSharp___resolutions___tracedSVG',
  ResumeChildImageSharpResolutionsAspectRatio = 'resume___childImageSharp___resolutions___aspectRatio',
  ResumeChildImageSharpResolutionsWidth = 'resume___childImageSharp___resolutions___width',
  ResumeChildImageSharpResolutionsHeight = 'resume___childImageSharp___resolutions___height',
  ResumeChildImageSharpResolutionsSrc = 'resume___childImageSharp___resolutions___src',
  ResumeChildImageSharpResolutionsSrcSet = 'resume___childImageSharp___resolutions___srcSet',
  ResumeChildImageSharpResolutionsSrcWebp = 'resume___childImageSharp___resolutions___srcWebp',
  ResumeChildImageSharpResolutionsSrcSetWebp = 'resume___childImageSharp___resolutions___srcSetWebp',
  ResumeChildImageSharpResolutionsOriginalName = 'resume___childImageSharp___resolutions___originalName',
  ResumeChildImageSharpFluidBase64 = 'resume___childImageSharp___fluid___base64',
  ResumeChildImageSharpFluidTracedSvg = 'resume___childImageSharp___fluid___tracedSVG',
  ResumeChildImageSharpFluidAspectRatio = 'resume___childImageSharp___fluid___aspectRatio',
  ResumeChildImageSharpFluidSrc = 'resume___childImageSharp___fluid___src',
  ResumeChildImageSharpFluidSrcSet = 'resume___childImageSharp___fluid___srcSet',
  ResumeChildImageSharpFluidSrcWebp = 'resume___childImageSharp___fluid___srcWebp',
  ResumeChildImageSharpFluidSrcSetWebp = 'resume___childImageSharp___fluid___srcSetWebp',
  ResumeChildImageSharpFluidSizes = 'resume___childImageSharp___fluid___sizes',
  ResumeChildImageSharpFluidOriginalImg = 'resume___childImageSharp___fluid___originalImg',
  ResumeChildImageSharpFluidOriginalName = 'resume___childImageSharp___fluid___originalName',
  ResumeChildImageSharpFluidPresentationWidth = 'resume___childImageSharp___fluid___presentationWidth',
  ResumeChildImageSharpFluidPresentationHeight = 'resume___childImageSharp___fluid___presentationHeight',
  ResumeChildImageSharpSizesBase64 = 'resume___childImageSharp___sizes___base64',
  ResumeChildImageSharpSizesTracedSvg = 'resume___childImageSharp___sizes___tracedSVG',
  ResumeChildImageSharpSizesAspectRatio = 'resume___childImageSharp___sizes___aspectRatio',
  ResumeChildImageSharpSizesSrc = 'resume___childImageSharp___sizes___src',
  ResumeChildImageSharpSizesSrcSet = 'resume___childImageSharp___sizes___srcSet',
  ResumeChildImageSharpSizesSrcWebp = 'resume___childImageSharp___sizes___srcWebp',
  ResumeChildImageSharpSizesSrcSetWebp = 'resume___childImageSharp___sizes___srcSetWebp',
  ResumeChildImageSharpSizesSizes = 'resume___childImageSharp___sizes___sizes',
  ResumeChildImageSharpSizesOriginalImg = 'resume___childImageSharp___sizes___originalImg',
  ResumeChildImageSharpSizesOriginalName = 'resume___childImageSharp___sizes___originalName',
  ResumeChildImageSharpSizesPresentationWidth = 'resume___childImageSharp___sizes___presentationWidth',
  ResumeChildImageSharpSizesPresentationHeight = 'resume___childImageSharp___sizes___presentationHeight',
  ResumeChildImageSharpOriginalWidth = 'resume___childImageSharp___original___width',
  ResumeChildImageSharpOriginalHeight = 'resume___childImageSharp___original___height',
  ResumeChildImageSharpOriginalSrc = 'resume___childImageSharp___original___src',
  ResumeChildImageSharpResizeSrc = 'resume___childImageSharp___resize___src',
  ResumeChildImageSharpResizeTracedSvg = 'resume___childImageSharp___resize___tracedSVG',
  ResumeChildImageSharpResizeWidth = 'resume___childImageSharp___resize___width',
  ResumeChildImageSharpResizeHeight = 'resume___childImageSharp___resize___height',
  ResumeChildImageSharpResizeAspectRatio = 'resume___childImageSharp___resize___aspectRatio',
  ResumeChildImageSharpResizeOriginalName = 'resume___childImageSharp___resize___originalName',
  ResumeChildImageSharpId = 'resume___childImageSharp___id',
  ResumeChildImageSharpParentId = 'resume___childImageSharp___parent___id',
  ResumeChildImageSharpParentChildren = 'resume___childImageSharp___parent___children',
  ResumeChildImageSharpChildren = 'resume___childImageSharp___children',
  ResumeChildImageSharpChildrenId = 'resume___childImageSharp___children___id',
  ResumeChildImageSharpChildrenChildren = 'resume___childImageSharp___children___children',
  ResumeChildImageSharpInternalContent = 'resume___childImageSharp___internal___content',
  ResumeChildImageSharpInternalContentDigest = 'resume___childImageSharp___internal___contentDigest',
  ResumeChildImageSharpInternalDescription = 'resume___childImageSharp___internal___description',
  ResumeChildImageSharpInternalFieldOwners = 'resume___childImageSharp___internal___fieldOwners',
  ResumeChildImageSharpInternalIgnoreType = 'resume___childImageSharp___internal___ignoreType',
  ResumeChildImageSharpInternalMediaType = 'resume___childImageSharp___internal___mediaType',
  ResumeChildImageSharpInternalOwner = 'resume___childImageSharp___internal___owner',
  ResumeChildImageSharpInternalType = 'resume___childImageSharp___internal___type',
  ResumeId = 'resume___id',
  ResumeParentId = 'resume___parent___id',
  ResumeParentParentId = 'resume___parent___parent___id',
  ResumeParentParentChildren = 'resume___parent___parent___children',
  ResumeParentChildren = 'resume___parent___children',
  ResumeParentChildrenId = 'resume___parent___children___id',
  ResumeParentChildrenChildren = 'resume___parent___children___children',
  ResumeParentInternalContent = 'resume___parent___internal___content',
  ResumeParentInternalContentDigest = 'resume___parent___internal___contentDigest',
  ResumeParentInternalDescription = 'resume___parent___internal___description',
  ResumeParentInternalFieldOwners = 'resume___parent___internal___fieldOwners',
  ResumeParentInternalIgnoreType = 'resume___parent___internal___ignoreType',
  ResumeParentInternalMediaType = 'resume___parent___internal___mediaType',
  ResumeParentInternalOwner = 'resume___parent___internal___owner',
  ResumeParentInternalType = 'resume___parent___internal___type',
  ResumeChildren = 'resume___children',
  ResumeChildrenId = 'resume___children___id',
  ResumeChildrenParentId = 'resume___children___parent___id',
  ResumeChildrenParentChildren = 'resume___children___parent___children',
  ResumeChildrenChildren = 'resume___children___children',
  ResumeChildrenChildrenId = 'resume___children___children___id',
  ResumeChildrenChildrenChildren = 'resume___children___children___children',
  ResumeChildrenInternalContent = 'resume___children___internal___content',
  ResumeChildrenInternalContentDigest = 'resume___children___internal___contentDigest',
  ResumeChildrenInternalDescription = 'resume___children___internal___description',
  ResumeChildrenInternalFieldOwners = 'resume___children___internal___fieldOwners',
  ResumeChildrenInternalIgnoreType = 'resume___children___internal___ignoreType',
  ResumeChildrenInternalMediaType = 'resume___children___internal___mediaType',
  ResumeChildrenInternalOwner = 'resume___children___internal___owner',
  ResumeChildrenInternalType = 'resume___children___internal___type',
  ResumeInternalContent = 'resume___internal___content',
  ResumeInternalContentDigest = 'resume___internal___contentDigest',
  ResumeInternalDescription = 'resume___internal___description',
  ResumeInternalFieldOwners = 'resume___internal___fieldOwners',
  ResumeInternalIgnoreType = 'resume___internal___ignoreType',
  ResumeInternalMediaType = 'resume___internal___mediaType',
  ResumeInternalOwner = 'resume___internal___owner',
  ResumeInternalType = 'resume___internal___type',
  ResumeChildDataJsonId = 'resume___childDataJson___id',
  ResumeChildDataJsonParentId = 'resume___childDataJson___parent___id',
  ResumeChildDataJsonParentChildren = 'resume___childDataJson___parent___children',
  ResumeChildDataJsonChildren = 'resume___childDataJson___children',
  ResumeChildDataJsonChildrenId = 'resume___childDataJson___children___id',
  ResumeChildDataJsonChildrenChildren = 'resume___childDataJson___children___children',
  ResumeChildDataJsonInternalContent = 'resume___childDataJson___internal___content',
  ResumeChildDataJsonInternalContentDigest = 'resume___childDataJson___internal___contentDigest',
  ResumeChildDataJsonInternalDescription = 'resume___childDataJson___internal___description',
  ResumeChildDataJsonInternalFieldOwners = 'resume___childDataJson___internal___fieldOwners',
  ResumeChildDataJsonInternalIgnoreType = 'resume___childDataJson___internal___ignoreType',
  ResumeChildDataJsonInternalMediaType = 'resume___childDataJson___internal___mediaType',
  ResumeChildDataJsonInternalOwner = 'resume___childDataJson___internal___owner',
  ResumeChildDataJsonInternalType = 'resume___childDataJson___internal___type',
  ResumeChildDataJsonKey = 'resume___childDataJson___key',
  ResumeChildDataJsonTitle = 'resume___childDataJson___title',
  ResumeChildDataJsonContent = 'resume___childDataJson___content',
  ResumeChildDataJsonLinkedIn = 'resume___childDataJson___linkedIn',
  ResumeChildDataJsonInstagram = 'resume___childDataJson___instagram',
  ResumeChildDataJsonGitHub = 'resume___childDataJson___gitHub',
  ResumeChildDataJsonEmail = 'resume___childDataJson___email',
  ResumeChildDataJsonFooter = 'resume___childDataJson___footer',
  ResumeChildDataJsonNumSections = 'resume___childDataJson___numSections',
  ResumeChildDataJsonFaces = 'resume___childDataJson___faces',
  ResumeChildDataJsonFacesSourceInstanceName = 'resume___childDataJson___faces___sourceInstanceName',
  ResumeChildDataJsonFacesAbsolutePath = 'resume___childDataJson___faces___absolutePath',
  ResumeChildDataJsonFacesRelativePath = 'resume___childDataJson___faces___relativePath',
  ResumeChildDataJsonFacesExtension = 'resume___childDataJson___faces___extension',
  ResumeChildDataJsonFacesSize = 'resume___childDataJson___faces___size',
  ResumeChildDataJsonFacesPrettySize = 'resume___childDataJson___faces___prettySize',
  ResumeChildDataJsonFacesModifiedTime = 'resume___childDataJson___faces___modifiedTime',
  ResumeChildDataJsonFacesAccessTime = 'resume___childDataJson___faces___accessTime',
  ResumeChildDataJsonFacesChangeTime = 'resume___childDataJson___faces___changeTime',
  ResumeChildDataJsonFacesBirthTime = 'resume___childDataJson___faces___birthTime',
  ResumeChildDataJsonFacesRoot = 'resume___childDataJson___faces___root',
  ResumeChildDataJsonFacesDir = 'resume___childDataJson___faces___dir',
  ResumeChildDataJsonFacesBase = 'resume___childDataJson___faces___base',
  ResumeChildDataJsonFacesExt = 'resume___childDataJson___faces___ext',
  ResumeChildDataJsonFacesName = 'resume___childDataJson___faces___name',
  ResumeChildDataJsonFacesRelativeDirectory = 'resume___childDataJson___faces___relativeDirectory',
  ResumeChildDataJsonFacesDev = 'resume___childDataJson___faces___dev',
  ResumeChildDataJsonFacesMode = 'resume___childDataJson___faces___mode',
  ResumeChildDataJsonFacesNlink = 'resume___childDataJson___faces___nlink',
  ResumeChildDataJsonFacesUid = 'resume___childDataJson___faces___uid',
  ResumeChildDataJsonFacesGid = 'resume___childDataJson___faces___gid',
  ResumeChildDataJsonFacesRdev = 'resume___childDataJson___faces___rdev',
  ResumeChildDataJsonFacesIno = 'resume___childDataJson___faces___ino',
  ResumeChildDataJsonFacesAtimeMs = 'resume___childDataJson___faces___atimeMs',
  ResumeChildDataJsonFacesMtimeMs = 'resume___childDataJson___faces___mtimeMs',
  ResumeChildDataJsonFacesCtimeMs = 'resume___childDataJson___faces___ctimeMs',
  ResumeChildDataJsonFacesAtime = 'resume___childDataJson___faces___atime',
  ResumeChildDataJsonFacesMtime = 'resume___childDataJson___faces___mtime',
  ResumeChildDataJsonFacesCtime = 'resume___childDataJson___faces___ctime',
  ResumeChildDataJsonFacesBirthtime = 'resume___childDataJson___faces___birthtime',
  ResumeChildDataJsonFacesBirthtimeMs = 'resume___childDataJson___faces___birthtimeMs',
  ResumeChildDataJsonFacesBlksize = 'resume___childDataJson___faces___blksize',
  ResumeChildDataJsonFacesBlocks = 'resume___childDataJson___faces___blocks',
  ResumeChildDataJsonFacesPublicUrl = 'resume___childDataJson___faces___publicURL',
  ResumeChildDataJsonFacesId = 'resume___childDataJson___faces___id',
  ResumeChildDataJsonFacesChildren = 'resume___childDataJson___faces___children',
  ResumeChildDataJsonFamiliarSkillsDescription = 'resume___childDataJson___familiarSkills___description',
  ResumeChildDataJsonFamiliarSkillsSkills = 'resume___childDataJson___familiarSkills___skills',
  ResumeChildDataJsonOtherSkillsDescription = 'resume___childDataJson___otherSkills___description',
  ResumeChildDataJsonOtherSkillsSkills = 'resume___childDataJson___otherSkills___skills',
  ResumeChildDataJsonResumeSourceInstanceName = 'resume___childDataJson___resume___sourceInstanceName',
  ResumeChildDataJsonResumeAbsolutePath = 'resume___childDataJson___resume___absolutePath',
  ResumeChildDataJsonResumeRelativePath = 'resume___childDataJson___resume___relativePath',
  ResumeChildDataJsonResumeExtension = 'resume___childDataJson___resume___extension',
  ResumeChildDataJsonResumeSize = 'resume___childDataJson___resume___size',
  ResumeChildDataJsonResumePrettySize = 'resume___childDataJson___resume___prettySize',
  ResumeChildDataJsonResumeModifiedTime = 'resume___childDataJson___resume___modifiedTime',
  ResumeChildDataJsonResumeAccessTime = 'resume___childDataJson___resume___accessTime',
  ResumeChildDataJsonResumeChangeTime = 'resume___childDataJson___resume___changeTime',
  ResumeChildDataJsonResumeBirthTime = 'resume___childDataJson___resume___birthTime',
  ResumeChildDataJsonResumeRoot = 'resume___childDataJson___resume___root',
  ResumeChildDataJsonResumeDir = 'resume___childDataJson___resume___dir',
  ResumeChildDataJsonResumeBase = 'resume___childDataJson___resume___base',
  ResumeChildDataJsonResumeExt = 'resume___childDataJson___resume___ext',
  ResumeChildDataJsonResumeName = 'resume___childDataJson___resume___name',
  ResumeChildDataJsonResumeRelativeDirectory = 'resume___childDataJson___resume___relativeDirectory',
  ResumeChildDataJsonResumeDev = 'resume___childDataJson___resume___dev',
  ResumeChildDataJsonResumeMode = 'resume___childDataJson___resume___mode',
  ResumeChildDataJsonResumeNlink = 'resume___childDataJson___resume___nlink',
  ResumeChildDataJsonResumeUid = 'resume___childDataJson___resume___uid',
  ResumeChildDataJsonResumeGid = 'resume___childDataJson___resume___gid',
  ResumeChildDataJsonResumeRdev = 'resume___childDataJson___resume___rdev',
  ResumeChildDataJsonResumeIno = 'resume___childDataJson___resume___ino',
  ResumeChildDataJsonResumeAtimeMs = 'resume___childDataJson___resume___atimeMs',
  ResumeChildDataJsonResumeMtimeMs = 'resume___childDataJson___resume___mtimeMs',
  ResumeChildDataJsonResumeCtimeMs = 'resume___childDataJson___resume___ctimeMs',
  ResumeChildDataJsonResumeAtime = 'resume___childDataJson___resume___atime',
  ResumeChildDataJsonResumeMtime = 'resume___childDataJson___resume___mtime',
  ResumeChildDataJsonResumeCtime = 'resume___childDataJson___resume___ctime',
  ResumeChildDataJsonResumeBirthtime = 'resume___childDataJson___resume___birthtime',
  ResumeChildDataJsonResumeBirthtimeMs = 'resume___childDataJson___resume___birthtimeMs',
  ResumeChildDataJsonResumeBlksize = 'resume___childDataJson___resume___blksize',
  ResumeChildDataJsonResumeBlocks = 'resume___childDataJson___resume___blocks',
  ResumeChildDataJsonResumePublicUrl = 'resume___childDataJson___resume___publicURL',
  ResumeChildDataJsonResumeId = 'resume___childDataJson___resume___id',
  ResumeChildDataJsonResumeChildren = 'resume___childDataJson___resume___children',
  ResumeChildDataJsonTitleEmoji = 'resume___childDataJson___titleEmoji',
  ResumeChildDataJsonProjects = 'resume___childDataJson___projects',
  ResumeChildDataJsonProjectsTitle = 'resume___childDataJson___projects___title',
  ResumeChildDataJsonProjectsContent = 'resume___childDataJson___projects___content',
  ResumeChildDataJsonProjectsLink = 'resume___childDataJson___projects___link',
  ResumeChildDataJsonProjectsCodeLink = 'resume___childDataJson___projects___codeLink',
  ResumeChildDataJsonProjectsMobileTitle = 'resume___childDataJson___projects___mobileTitle',
  ResumeChildDataJsonGeiselSourceInstanceName = 'resume___childDataJson___geisel___sourceInstanceName',
  ResumeChildDataJsonGeiselAbsolutePath = 'resume___childDataJson___geisel___absolutePath',
  ResumeChildDataJsonGeiselRelativePath = 'resume___childDataJson___geisel___relativePath',
  ResumeChildDataJsonGeiselExtension = 'resume___childDataJson___geisel___extension',
  ResumeChildDataJsonGeiselSize = 'resume___childDataJson___geisel___size',
  ResumeChildDataJsonGeiselPrettySize = 'resume___childDataJson___geisel___prettySize',
  ResumeChildDataJsonGeiselModifiedTime = 'resume___childDataJson___geisel___modifiedTime',
  ResumeChildDataJsonGeiselAccessTime = 'resume___childDataJson___geisel___accessTime',
  ResumeChildDataJsonGeiselChangeTime = 'resume___childDataJson___geisel___changeTime',
  ResumeChildDataJsonGeiselBirthTime = 'resume___childDataJson___geisel___birthTime',
  ResumeChildDataJsonGeiselRoot = 'resume___childDataJson___geisel___root',
  ResumeChildDataJsonGeiselDir = 'resume___childDataJson___geisel___dir',
  ResumeChildDataJsonGeiselBase = 'resume___childDataJson___geisel___base',
  ResumeChildDataJsonGeiselExt = 'resume___childDataJson___geisel___ext',
  ResumeChildDataJsonGeiselName = 'resume___childDataJson___geisel___name',
  ResumeChildDataJsonGeiselRelativeDirectory = 'resume___childDataJson___geisel___relativeDirectory',
  ResumeChildDataJsonGeiselDev = 'resume___childDataJson___geisel___dev',
  ResumeChildDataJsonGeiselMode = 'resume___childDataJson___geisel___mode',
  ResumeChildDataJsonGeiselNlink = 'resume___childDataJson___geisel___nlink',
  ResumeChildDataJsonGeiselUid = 'resume___childDataJson___geisel___uid',
  ResumeChildDataJsonGeiselGid = 'resume___childDataJson___geisel___gid',
  ResumeChildDataJsonGeiselRdev = 'resume___childDataJson___geisel___rdev',
  ResumeChildDataJsonGeiselIno = 'resume___childDataJson___geisel___ino',
  ResumeChildDataJsonGeiselAtimeMs = 'resume___childDataJson___geisel___atimeMs',
  ResumeChildDataJsonGeiselMtimeMs = 'resume___childDataJson___geisel___mtimeMs',
  ResumeChildDataJsonGeiselCtimeMs = 'resume___childDataJson___geisel___ctimeMs',
  ResumeChildDataJsonGeiselAtime = 'resume___childDataJson___geisel___atime',
  ResumeChildDataJsonGeiselMtime = 'resume___childDataJson___geisel___mtime',
  ResumeChildDataJsonGeiselCtime = 'resume___childDataJson___geisel___ctime',
  ResumeChildDataJsonGeiselBirthtime = 'resume___childDataJson___geisel___birthtime',
  ResumeChildDataJsonGeiselBirthtimeMs = 'resume___childDataJson___geisel___birthtimeMs',
  ResumeChildDataJsonGeiselBlksize = 'resume___childDataJson___geisel___blksize',
  ResumeChildDataJsonGeiselBlocks = 'resume___childDataJson___geisel___blocks',
  ResumeChildDataJsonGeiselPublicUrl = 'resume___childDataJson___geisel___publicURL',
  ResumeChildDataJsonGeiselId = 'resume___childDataJson___geisel___id',
  ResumeChildDataJsonGeiselChildren = 'resume___childDataJson___geisel___children',
  ResumeChildDataJsonCourses = 'resume___childDataJson___courses',
  ResumeChildDataJsonWork = 'resume___childDataJson___work',
  ResumeChildDataJsonWorkTitle = 'resume___childDataJson___work___title',
  ResumeChildDataJsonWorkDate = 'resume___childDataJson___work___date',
  ResumeChildDataJsonWorkContent = 'resume___childDataJson___work___content',
  ResumeChildDataJsonWorkLink = 'resume___childDataJson___work___link',
  ResumeChildDataJsonTitleEmojiLabel = 'resume___childDataJson___titleEmojiLabel',
  TitleEmoji = 'titleEmoji',
  Projects = 'projects',
  ProjectsTitle = 'projects___title',
  ProjectsContent = 'projects___content',
  ProjectsLink = 'projects___link',
  ProjectsCodeLink = 'projects___codeLink',
  ProjectsMobileTitle = 'projects___mobileTitle',
  GeiselSourceInstanceName = 'geisel___sourceInstanceName',
  GeiselAbsolutePath = 'geisel___absolutePath',
  GeiselRelativePath = 'geisel___relativePath',
  GeiselExtension = 'geisel___extension',
  GeiselSize = 'geisel___size',
  GeiselPrettySize = 'geisel___prettySize',
  GeiselModifiedTime = 'geisel___modifiedTime',
  GeiselAccessTime = 'geisel___accessTime',
  GeiselChangeTime = 'geisel___changeTime',
  GeiselBirthTime = 'geisel___birthTime',
  GeiselRoot = 'geisel___root',
  GeiselDir = 'geisel___dir',
  GeiselBase = 'geisel___base',
  GeiselExt = 'geisel___ext',
  GeiselName = 'geisel___name',
  GeiselRelativeDirectory = 'geisel___relativeDirectory',
  GeiselDev = 'geisel___dev',
  GeiselMode = 'geisel___mode',
  GeiselNlink = 'geisel___nlink',
  GeiselUid = 'geisel___uid',
  GeiselGid = 'geisel___gid',
  GeiselRdev = 'geisel___rdev',
  GeiselIno = 'geisel___ino',
  GeiselAtimeMs = 'geisel___atimeMs',
  GeiselMtimeMs = 'geisel___mtimeMs',
  GeiselCtimeMs = 'geisel___ctimeMs',
  GeiselAtime = 'geisel___atime',
  GeiselMtime = 'geisel___mtime',
  GeiselCtime = 'geisel___ctime',
  GeiselBirthtime = 'geisel___birthtime',
  GeiselBirthtimeMs = 'geisel___birthtimeMs',
  GeiselBlksize = 'geisel___blksize',
  GeiselBlocks = 'geisel___blocks',
  GeiselPublicUrl = 'geisel___publicURL',
  GeiselChildImageSharpFixedBase64 = 'geisel___childImageSharp___fixed___base64',
  GeiselChildImageSharpFixedTracedSvg = 'geisel___childImageSharp___fixed___tracedSVG',
  GeiselChildImageSharpFixedAspectRatio = 'geisel___childImageSharp___fixed___aspectRatio',
  GeiselChildImageSharpFixedWidth = 'geisel___childImageSharp___fixed___width',
  GeiselChildImageSharpFixedHeight = 'geisel___childImageSharp___fixed___height',
  GeiselChildImageSharpFixedSrc = 'geisel___childImageSharp___fixed___src',
  GeiselChildImageSharpFixedSrcSet = 'geisel___childImageSharp___fixed___srcSet',
  GeiselChildImageSharpFixedSrcWebp = 'geisel___childImageSharp___fixed___srcWebp',
  GeiselChildImageSharpFixedSrcSetWebp = 'geisel___childImageSharp___fixed___srcSetWebp',
  GeiselChildImageSharpFixedOriginalName = 'geisel___childImageSharp___fixed___originalName',
  GeiselChildImageSharpResolutionsBase64 = 'geisel___childImageSharp___resolutions___base64',
  GeiselChildImageSharpResolutionsTracedSvg = 'geisel___childImageSharp___resolutions___tracedSVG',
  GeiselChildImageSharpResolutionsAspectRatio = 'geisel___childImageSharp___resolutions___aspectRatio',
  GeiselChildImageSharpResolutionsWidth = 'geisel___childImageSharp___resolutions___width',
  GeiselChildImageSharpResolutionsHeight = 'geisel___childImageSharp___resolutions___height',
  GeiselChildImageSharpResolutionsSrc = 'geisel___childImageSharp___resolutions___src',
  GeiselChildImageSharpResolutionsSrcSet = 'geisel___childImageSharp___resolutions___srcSet',
  GeiselChildImageSharpResolutionsSrcWebp = 'geisel___childImageSharp___resolutions___srcWebp',
  GeiselChildImageSharpResolutionsSrcSetWebp = 'geisel___childImageSharp___resolutions___srcSetWebp',
  GeiselChildImageSharpResolutionsOriginalName = 'geisel___childImageSharp___resolutions___originalName',
  GeiselChildImageSharpFluidBase64 = 'geisel___childImageSharp___fluid___base64',
  GeiselChildImageSharpFluidTracedSvg = 'geisel___childImageSharp___fluid___tracedSVG',
  GeiselChildImageSharpFluidAspectRatio = 'geisel___childImageSharp___fluid___aspectRatio',
  GeiselChildImageSharpFluidSrc = 'geisel___childImageSharp___fluid___src',
  GeiselChildImageSharpFluidSrcSet = 'geisel___childImageSharp___fluid___srcSet',
  GeiselChildImageSharpFluidSrcWebp = 'geisel___childImageSharp___fluid___srcWebp',
  GeiselChildImageSharpFluidSrcSetWebp = 'geisel___childImageSharp___fluid___srcSetWebp',
  GeiselChildImageSharpFluidSizes = 'geisel___childImageSharp___fluid___sizes',
  GeiselChildImageSharpFluidOriginalImg = 'geisel___childImageSharp___fluid___originalImg',
  GeiselChildImageSharpFluidOriginalName = 'geisel___childImageSharp___fluid___originalName',
  GeiselChildImageSharpFluidPresentationWidth = 'geisel___childImageSharp___fluid___presentationWidth',
  GeiselChildImageSharpFluidPresentationHeight = 'geisel___childImageSharp___fluid___presentationHeight',
  GeiselChildImageSharpSizesBase64 = 'geisel___childImageSharp___sizes___base64',
  GeiselChildImageSharpSizesTracedSvg = 'geisel___childImageSharp___sizes___tracedSVG',
  GeiselChildImageSharpSizesAspectRatio = 'geisel___childImageSharp___sizes___aspectRatio',
  GeiselChildImageSharpSizesSrc = 'geisel___childImageSharp___sizes___src',
  GeiselChildImageSharpSizesSrcSet = 'geisel___childImageSharp___sizes___srcSet',
  GeiselChildImageSharpSizesSrcWebp = 'geisel___childImageSharp___sizes___srcWebp',
  GeiselChildImageSharpSizesSrcSetWebp = 'geisel___childImageSharp___sizes___srcSetWebp',
  GeiselChildImageSharpSizesSizes = 'geisel___childImageSharp___sizes___sizes',
  GeiselChildImageSharpSizesOriginalImg = 'geisel___childImageSharp___sizes___originalImg',
  GeiselChildImageSharpSizesOriginalName = 'geisel___childImageSharp___sizes___originalName',
  GeiselChildImageSharpSizesPresentationWidth = 'geisel___childImageSharp___sizes___presentationWidth',
  GeiselChildImageSharpSizesPresentationHeight = 'geisel___childImageSharp___sizes___presentationHeight',
  GeiselChildImageSharpOriginalWidth = 'geisel___childImageSharp___original___width',
  GeiselChildImageSharpOriginalHeight = 'geisel___childImageSharp___original___height',
  GeiselChildImageSharpOriginalSrc = 'geisel___childImageSharp___original___src',
  GeiselChildImageSharpResizeSrc = 'geisel___childImageSharp___resize___src',
  GeiselChildImageSharpResizeTracedSvg = 'geisel___childImageSharp___resize___tracedSVG',
  GeiselChildImageSharpResizeWidth = 'geisel___childImageSharp___resize___width',
  GeiselChildImageSharpResizeHeight = 'geisel___childImageSharp___resize___height',
  GeiselChildImageSharpResizeAspectRatio = 'geisel___childImageSharp___resize___aspectRatio',
  GeiselChildImageSharpResizeOriginalName = 'geisel___childImageSharp___resize___originalName',
  GeiselChildImageSharpId = 'geisel___childImageSharp___id',
  GeiselChildImageSharpParentId = 'geisel___childImageSharp___parent___id',
  GeiselChildImageSharpParentChildren = 'geisel___childImageSharp___parent___children',
  GeiselChildImageSharpChildren = 'geisel___childImageSharp___children',
  GeiselChildImageSharpChildrenId = 'geisel___childImageSharp___children___id',
  GeiselChildImageSharpChildrenChildren = 'geisel___childImageSharp___children___children',
  GeiselChildImageSharpInternalContent = 'geisel___childImageSharp___internal___content',
  GeiselChildImageSharpInternalContentDigest = 'geisel___childImageSharp___internal___contentDigest',
  GeiselChildImageSharpInternalDescription = 'geisel___childImageSharp___internal___description',
  GeiselChildImageSharpInternalFieldOwners = 'geisel___childImageSharp___internal___fieldOwners',
  GeiselChildImageSharpInternalIgnoreType = 'geisel___childImageSharp___internal___ignoreType',
  GeiselChildImageSharpInternalMediaType = 'geisel___childImageSharp___internal___mediaType',
  GeiselChildImageSharpInternalOwner = 'geisel___childImageSharp___internal___owner',
  GeiselChildImageSharpInternalType = 'geisel___childImageSharp___internal___type',
  GeiselId = 'geisel___id',
  GeiselParentId = 'geisel___parent___id',
  GeiselParentParentId = 'geisel___parent___parent___id',
  GeiselParentParentChildren = 'geisel___parent___parent___children',
  GeiselParentChildren = 'geisel___parent___children',
  GeiselParentChildrenId = 'geisel___parent___children___id',
  GeiselParentChildrenChildren = 'geisel___parent___children___children',
  GeiselParentInternalContent = 'geisel___parent___internal___content',
  GeiselParentInternalContentDigest = 'geisel___parent___internal___contentDigest',
  GeiselParentInternalDescription = 'geisel___parent___internal___description',
  GeiselParentInternalFieldOwners = 'geisel___parent___internal___fieldOwners',
  GeiselParentInternalIgnoreType = 'geisel___parent___internal___ignoreType',
  GeiselParentInternalMediaType = 'geisel___parent___internal___mediaType',
  GeiselParentInternalOwner = 'geisel___parent___internal___owner',
  GeiselParentInternalType = 'geisel___parent___internal___type',
  GeiselChildren = 'geisel___children',
  GeiselChildrenId = 'geisel___children___id',
  GeiselChildrenParentId = 'geisel___children___parent___id',
  GeiselChildrenParentChildren = 'geisel___children___parent___children',
  GeiselChildrenChildren = 'geisel___children___children',
  GeiselChildrenChildrenId = 'geisel___children___children___id',
  GeiselChildrenChildrenChildren = 'geisel___children___children___children',
  GeiselChildrenInternalContent = 'geisel___children___internal___content',
  GeiselChildrenInternalContentDigest = 'geisel___children___internal___contentDigest',
  GeiselChildrenInternalDescription = 'geisel___children___internal___description',
  GeiselChildrenInternalFieldOwners = 'geisel___children___internal___fieldOwners',
  GeiselChildrenInternalIgnoreType = 'geisel___children___internal___ignoreType',
  GeiselChildrenInternalMediaType = 'geisel___children___internal___mediaType',
  GeiselChildrenInternalOwner = 'geisel___children___internal___owner',
  GeiselChildrenInternalType = 'geisel___children___internal___type',
  GeiselInternalContent = 'geisel___internal___content',
  GeiselInternalContentDigest = 'geisel___internal___contentDigest',
  GeiselInternalDescription = 'geisel___internal___description',
  GeiselInternalFieldOwners = 'geisel___internal___fieldOwners',
  GeiselInternalIgnoreType = 'geisel___internal___ignoreType',
  GeiselInternalMediaType = 'geisel___internal___mediaType',
  GeiselInternalOwner = 'geisel___internal___owner',
  GeiselInternalType = 'geisel___internal___type',
  GeiselChildDataJsonId = 'geisel___childDataJson___id',
  GeiselChildDataJsonParentId = 'geisel___childDataJson___parent___id',
  GeiselChildDataJsonParentChildren = 'geisel___childDataJson___parent___children',
  GeiselChildDataJsonChildren = 'geisel___childDataJson___children',
  GeiselChildDataJsonChildrenId = 'geisel___childDataJson___children___id',
  GeiselChildDataJsonChildrenChildren = 'geisel___childDataJson___children___children',
  GeiselChildDataJsonInternalContent = 'geisel___childDataJson___internal___content',
  GeiselChildDataJsonInternalContentDigest = 'geisel___childDataJson___internal___contentDigest',
  GeiselChildDataJsonInternalDescription = 'geisel___childDataJson___internal___description',
  GeiselChildDataJsonInternalFieldOwners = 'geisel___childDataJson___internal___fieldOwners',
  GeiselChildDataJsonInternalIgnoreType = 'geisel___childDataJson___internal___ignoreType',
  GeiselChildDataJsonInternalMediaType = 'geisel___childDataJson___internal___mediaType',
  GeiselChildDataJsonInternalOwner = 'geisel___childDataJson___internal___owner',
  GeiselChildDataJsonInternalType = 'geisel___childDataJson___internal___type',
  GeiselChildDataJsonKey = 'geisel___childDataJson___key',
  GeiselChildDataJsonTitle = 'geisel___childDataJson___title',
  GeiselChildDataJsonContent = 'geisel___childDataJson___content',
  GeiselChildDataJsonLinkedIn = 'geisel___childDataJson___linkedIn',
  GeiselChildDataJsonInstagram = 'geisel___childDataJson___instagram',
  GeiselChildDataJsonGitHub = 'geisel___childDataJson___gitHub',
  GeiselChildDataJsonEmail = 'geisel___childDataJson___email',
  GeiselChildDataJsonFooter = 'geisel___childDataJson___footer',
  GeiselChildDataJsonNumSections = 'geisel___childDataJson___numSections',
  GeiselChildDataJsonFaces = 'geisel___childDataJson___faces',
  GeiselChildDataJsonFacesSourceInstanceName = 'geisel___childDataJson___faces___sourceInstanceName',
  GeiselChildDataJsonFacesAbsolutePath = 'geisel___childDataJson___faces___absolutePath',
  GeiselChildDataJsonFacesRelativePath = 'geisel___childDataJson___faces___relativePath',
  GeiselChildDataJsonFacesExtension = 'geisel___childDataJson___faces___extension',
  GeiselChildDataJsonFacesSize = 'geisel___childDataJson___faces___size',
  GeiselChildDataJsonFacesPrettySize = 'geisel___childDataJson___faces___prettySize',
  GeiselChildDataJsonFacesModifiedTime = 'geisel___childDataJson___faces___modifiedTime',
  GeiselChildDataJsonFacesAccessTime = 'geisel___childDataJson___faces___accessTime',
  GeiselChildDataJsonFacesChangeTime = 'geisel___childDataJson___faces___changeTime',
  GeiselChildDataJsonFacesBirthTime = 'geisel___childDataJson___faces___birthTime',
  GeiselChildDataJsonFacesRoot = 'geisel___childDataJson___faces___root',
  GeiselChildDataJsonFacesDir = 'geisel___childDataJson___faces___dir',
  GeiselChildDataJsonFacesBase = 'geisel___childDataJson___faces___base',
  GeiselChildDataJsonFacesExt = 'geisel___childDataJson___faces___ext',
  GeiselChildDataJsonFacesName = 'geisel___childDataJson___faces___name',
  GeiselChildDataJsonFacesRelativeDirectory = 'geisel___childDataJson___faces___relativeDirectory',
  GeiselChildDataJsonFacesDev = 'geisel___childDataJson___faces___dev',
  GeiselChildDataJsonFacesMode = 'geisel___childDataJson___faces___mode',
  GeiselChildDataJsonFacesNlink = 'geisel___childDataJson___faces___nlink',
  GeiselChildDataJsonFacesUid = 'geisel___childDataJson___faces___uid',
  GeiselChildDataJsonFacesGid = 'geisel___childDataJson___faces___gid',
  GeiselChildDataJsonFacesRdev = 'geisel___childDataJson___faces___rdev',
  GeiselChildDataJsonFacesIno = 'geisel___childDataJson___faces___ino',
  GeiselChildDataJsonFacesAtimeMs = 'geisel___childDataJson___faces___atimeMs',
  GeiselChildDataJsonFacesMtimeMs = 'geisel___childDataJson___faces___mtimeMs',
  GeiselChildDataJsonFacesCtimeMs = 'geisel___childDataJson___faces___ctimeMs',
  GeiselChildDataJsonFacesAtime = 'geisel___childDataJson___faces___atime',
  GeiselChildDataJsonFacesMtime = 'geisel___childDataJson___faces___mtime',
  GeiselChildDataJsonFacesCtime = 'geisel___childDataJson___faces___ctime',
  GeiselChildDataJsonFacesBirthtime = 'geisel___childDataJson___faces___birthtime',
  GeiselChildDataJsonFacesBirthtimeMs = 'geisel___childDataJson___faces___birthtimeMs',
  GeiselChildDataJsonFacesBlksize = 'geisel___childDataJson___faces___blksize',
  GeiselChildDataJsonFacesBlocks = 'geisel___childDataJson___faces___blocks',
  GeiselChildDataJsonFacesPublicUrl = 'geisel___childDataJson___faces___publicURL',
  GeiselChildDataJsonFacesId = 'geisel___childDataJson___faces___id',
  GeiselChildDataJsonFacesChildren = 'geisel___childDataJson___faces___children',
  GeiselChildDataJsonFamiliarSkillsDescription = 'geisel___childDataJson___familiarSkills___description',
  GeiselChildDataJsonFamiliarSkillsSkills = 'geisel___childDataJson___familiarSkills___skills',
  GeiselChildDataJsonOtherSkillsDescription = 'geisel___childDataJson___otherSkills___description',
  GeiselChildDataJsonOtherSkillsSkills = 'geisel___childDataJson___otherSkills___skills',
  GeiselChildDataJsonResumeSourceInstanceName = 'geisel___childDataJson___resume___sourceInstanceName',
  GeiselChildDataJsonResumeAbsolutePath = 'geisel___childDataJson___resume___absolutePath',
  GeiselChildDataJsonResumeRelativePath = 'geisel___childDataJson___resume___relativePath',
  GeiselChildDataJsonResumeExtension = 'geisel___childDataJson___resume___extension',
  GeiselChildDataJsonResumeSize = 'geisel___childDataJson___resume___size',
  GeiselChildDataJsonResumePrettySize = 'geisel___childDataJson___resume___prettySize',
  GeiselChildDataJsonResumeModifiedTime = 'geisel___childDataJson___resume___modifiedTime',
  GeiselChildDataJsonResumeAccessTime = 'geisel___childDataJson___resume___accessTime',
  GeiselChildDataJsonResumeChangeTime = 'geisel___childDataJson___resume___changeTime',
  GeiselChildDataJsonResumeBirthTime = 'geisel___childDataJson___resume___birthTime',
  GeiselChildDataJsonResumeRoot = 'geisel___childDataJson___resume___root',
  GeiselChildDataJsonResumeDir = 'geisel___childDataJson___resume___dir',
  GeiselChildDataJsonResumeBase = 'geisel___childDataJson___resume___base',
  GeiselChildDataJsonResumeExt = 'geisel___childDataJson___resume___ext',
  GeiselChildDataJsonResumeName = 'geisel___childDataJson___resume___name',
  GeiselChildDataJsonResumeRelativeDirectory = 'geisel___childDataJson___resume___relativeDirectory',
  GeiselChildDataJsonResumeDev = 'geisel___childDataJson___resume___dev',
  GeiselChildDataJsonResumeMode = 'geisel___childDataJson___resume___mode',
  GeiselChildDataJsonResumeNlink = 'geisel___childDataJson___resume___nlink',
  GeiselChildDataJsonResumeUid = 'geisel___childDataJson___resume___uid',
  GeiselChildDataJsonResumeGid = 'geisel___childDataJson___resume___gid',
  GeiselChildDataJsonResumeRdev = 'geisel___childDataJson___resume___rdev',
  GeiselChildDataJsonResumeIno = 'geisel___childDataJson___resume___ino',
  GeiselChildDataJsonResumeAtimeMs = 'geisel___childDataJson___resume___atimeMs',
  GeiselChildDataJsonResumeMtimeMs = 'geisel___childDataJson___resume___mtimeMs',
  GeiselChildDataJsonResumeCtimeMs = 'geisel___childDataJson___resume___ctimeMs',
  GeiselChildDataJsonResumeAtime = 'geisel___childDataJson___resume___atime',
  GeiselChildDataJsonResumeMtime = 'geisel___childDataJson___resume___mtime',
  GeiselChildDataJsonResumeCtime = 'geisel___childDataJson___resume___ctime',
  GeiselChildDataJsonResumeBirthtime = 'geisel___childDataJson___resume___birthtime',
  GeiselChildDataJsonResumeBirthtimeMs = 'geisel___childDataJson___resume___birthtimeMs',
  GeiselChildDataJsonResumeBlksize = 'geisel___childDataJson___resume___blksize',
  GeiselChildDataJsonResumeBlocks = 'geisel___childDataJson___resume___blocks',
  GeiselChildDataJsonResumePublicUrl = 'geisel___childDataJson___resume___publicURL',
  GeiselChildDataJsonResumeId = 'geisel___childDataJson___resume___id',
  GeiselChildDataJsonResumeChildren = 'geisel___childDataJson___resume___children',
  GeiselChildDataJsonTitleEmoji = 'geisel___childDataJson___titleEmoji',
  GeiselChildDataJsonProjects = 'geisel___childDataJson___projects',
  GeiselChildDataJsonProjectsTitle = 'geisel___childDataJson___projects___title',
  GeiselChildDataJsonProjectsContent = 'geisel___childDataJson___projects___content',
  GeiselChildDataJsonProjectsLink = 'geisel___childDataJson___projects___link',
  GeiselChildDataJsonProjectsCodeLink = 'geisel___childDataJson___projects___codeLink',
  GeiselChildDataJsonProjectsMobileTitle = 'geisel___childDataJson___projects___mobileTitle',
  GeiselChildDataJsonGeiselSourceInstanceName = 'geisel___childDataJson___geisel___sourceInstanceName',
  GeiselChildDataJsonGeiselAbsolutePath = 'geisel___childDataJson___geisel___absolutePath',
  GeiselChildDataJsonGeiselRelativePath = 'geisel___childDataJson___geisel___relativePath',
  GeiselChildDataJsonGeiselExtension = 'geisel___childDataJson___geisel___extension',
  GeiselChildDataJsonGeiselSize = 'geisel___childDataJson___geisel___size',
  GeiselChildDataJsonGeiselPrettySize = 'geisel___childDataJson___geisel___prettySize',
  GeiselChildDataJsonGeiselModifiedTime = 'geisel___childDataJson___geisel___modifiedTime',
  GeiselChildDataJsonGeiselAccessTime = 'geisel___childDataJson___geisel___accessTime',
  GeiselChildDataJsonGeiselChangeTime = 'geisel___childDataJson___geisel___changeTime',
  GeiselChildDataJsonGeiselBirthTime = 'geisel___childDataJson___geisel___birthTime',
  GeiselChildDataJsonGeiselRoot = 'geisel___childDataJson___geisel___root',
  GeiselChildDataJsonGeiselDir = 'geisel___childDataJson___geisel___dir',
  GeiselChildDataJsonGeiselBase = 'geisel___childDataJson___geisel___base',
  GeiselChildDataJsonGeiselExt = 'geisel___childDataJson___geisel___ext',
  GeiselChildDataJsonGeiselName = 'geisel___childDataJson___geisel___name',
  GeiselChildDataJsonGeiselRelativeDirectory = 'geisel___childDataJson___geisel___relativeDirectory',
  GeiselChildDataJsonGeiselDev = 'geisel___childDataJson___geisel___dev',
  GeiselChildDataJsonGeiselMode = 'geisel___childDataJson___geisel___mode',
  GeiselChildDataJsonGeiselNlink = 'geisel___childDataJson___geisel___nlink',
  GeiselChildDataJsonGeiselUid = 'geisel___childDataJson___geisel___uid',
  GeiselChildDataJsonGeiselGid = 'geisel___childDataJson___geisel___gid',
  GeiselChildDataJsonGeiselRdev = 'geisel___childDataJson___geisel___rdev',
  GeiselChildDataJsonGeiselIno = 'geisel___childDataJson___geisel___ino',
  GeiselChildDataJsonGeiselAtimeMs = 'geisel___childDataJson___geisel___atimeMs',
  GeiselChildDataJsonGeiselMtimeMs = 'geisel___childDataJson___geisel___mtimeMs',
  GeiselChildDataJsonGeiselCtimeMs = 'geisel___childDataJson___geisel___ctimeMs',
  GeiselChildDataJsonGeiselAtime = 'geisel___childDataJson___geisel___atime',
  GeiselChildDataJsonGeiselMtime = 'geisel___childDataJson___geisel___mtime',
  GeiselChildDataJsonGeiselCtime = 'geisel___childDataJson___geisel___ctime',
  GeiselChildDataJsonGeiselBirthtime = 'geisel___childDataJson___geisel___birthtime',
  GeiselChildDataJsonGeiselBirthtimeMs = 'geisel___childDataJson___geisel___birthtimeMs',
  GeiselChildDataJsonGeiselBlksize = 'geisel___childDataJson___geisel___blksize',
  GeiselChildDataJsonGeiselBlocks = 'geisel___childDataJson___geisel___blocks',
  GeiselChildDataJsonGeiselPublicUrl = 'geisel___childDataJson___geisel___publicURL',
  GeiselChildDataJsonGeiselId = 'geisel___childDataJson___geisel___id',
  GeiselChildDataJsonGeiselChildren = 'geisel___childDataJson___geisel___children',
  GeiselChildDataJsonCourses = 'geisel___childDataJson___courses',
  GeiselChildDataJsonWork = 'geisel___childDataJson___work',
  GeiselChildDataJsonWorkTitle = 'geisel___childDataJson___work___title',
  GeiselChildDataJsonWorkDate = 'geisel___childDataJson___work___date',
  GeiselChildDataJsonWorkContent = 'geisel___childDataJson___work___content',
  GeiselChildDataJsonWorkLink = 'geisel___childDataJson___work___link',
  GeiselChildDataJsonTitleEmojiLabel = 'geisel___childDataJson___titleEmojiLabel',
  Courses = 'courses',
  Work = 'work',
  WorkTitle = 'work___title',
  WorkDate = 'work___date',
  WorkContent = 'work___content',
  WorkLink = 'work___link',
  TitleEmojiLabel = 'titleEmojiLabel'
}

export type DataJsonConnection = {
  __typename?: 'DataJsonConnection';
  totalCount: Scalars['Int'];
  edges: Array<DataJsonEdge>;
  nodes: Array<DataJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DataJsonGroupConnection>;
};


export type DataJsonConnectionDistinctArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DataJsonFieldsEnum;
};

export type DataJsonEdge = {
  __typename?: 'DataJsonEdge';
  next?: Maybe<DataJson>;
  node: DataJson;
  previous?: Maybe<DataJson>;
};

export type DataJsonGroupConnection = {
  __typename?: 'DataJsonGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DataJsonEdge>;
  nodes: Array<DataJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsLogo = 'pluginOptions___logo',
  PluginOptionsIconsAndroid = 'pluginOptions___icons___android',
  PluginOptionsIconsAppleIcon = 'pluginOptions___icons___appleIcon',
  PluginOptionsIconsAppleStartup = 'pluginOptions___icons___appleStartup',
  PluginOptionsIconsCoast = 'pluginOptions___icons___coast',
  PluginOptionsIconsFavicons = 'pluginOptions___icons___favicons',
  PluginOptionsIconsFirefox = 'pluginOptions___icons___firefox',
  PluginOptionsIconsYandex = 'pluginOptions___icons___yandex',
  PluginOptionsIconsWindows = 'pluginOptions___icons___windows',
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
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = (
  { __typename?: 'ImageSharpFluid' }
  & { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] }
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);


declare module '*/fragments.js' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GatsbyImageSharpFixed: DocumentNode;
export const GatsbyImageSharpFixed_tracedSVG: DocumentNode;
export const GatsbyImageSharpFixed_withWebp: DocumentNode;
export const GatsbyImageSharpFixed_withWebp_tracedSVG: DocumentNode;
export const GatsbyImageSharpFixed_noBase64: DocumentNode;
export const GatsbyImageSharpFixed_withWebp_noBase64: DocumentNode;
export const GatsbyImageSharpFluid: DocumentNode;
export const GatsbyImageSharpFluidLimitPresentationSize: DocumentNode;
export const GatsbyImageSharpFluid_tracedSVG: DocumentNode;
export const GatsbyImageSharpFluid_withWebp: DocumentNode;
export const GatsbyImageSharpFluid_withWebp_tracedSVG: DocumentNode;
export const GatsbyImageSharpFluid_noBase64: DocumentNode;
export const GatsbyImageSharpFluid_withWebp_noBase64: DocumentNode;
export const GatsbyImageSharpResolutions: DocumentNode;
export const GatsbyImageSharpResolutions_tracedSVG: DocumentNode;
export const GatsbyImageSharpResolutions_withWebp: DocumentNode;
export const GatsbyImageSharpResolutions_withWebp_tracedSVG: DocumentNode;
export const GatsbyImageSharpResolutions_noBase64: DocumentNode;
export const GatsbyImageSharpResolutions_withWebp_noBase64: DocumentNode;
export const GatsbyImageSharpSizes: DocumentNode;
export const GatsbyImageSharpSizes_tracedSVG: DocumentNode;
export const GatsbyImageSharpSizes_withWebp: DocumentNode;
export const GatsbyImageSharpSizes_withWebp_tracedSVG: DocumentNode;
export const GatsbyImageSharpSizes_noBase64: DocumentNode;
export const GatsbyImageSharpSizes_withWebp_noBase64: DocumentNode;

  export default defaultDocument;
}
    