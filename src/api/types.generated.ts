export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: Date; output: Date }
}

export type CreateLegacyInput = {
  founderId: InputMaybe<Scalars["ID"]["input"]>
  name: Scalars["String"]["input"]
}

export type CreateLegacyPayload = {
  __typename?: "CreateLegacyPayload"
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages: Maybe<Array<Maybe<ValidationMessage>>>
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result: Maybe<Legacy>
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars["Boolean"]["output"]
}

export type DeleteLegacyPayload = {
  __typename?: "DeleteLegacyPayload"
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages: Maybe<Array<Maybe<ValidationMessage>>>
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result: Maybe<Legacy>
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars["Boolean"]["output"]
}

export enum Gender {
  Female = "FEMALE",
  Male = "MALE",
}

export type Legacy = {
  __typename?: "Legacy"
  createdAt: Scalars["DateTime"]["output"]
  founder: Maybe<Sim>
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  sims: Array<Sim>
  updatedAt: Scalars["DateTime"]["output"]
}

export type RootMutationType = {
  __typename?: "RootMutationType"
  /** Create a legacy */
  createLegacy: CreateLegacyPayload
  /** Delete a legacy */
  deleteLegacy: DeleteLegacyPayload
}

export type RootMutationTypeCreateLegacyArgs = {
  input: CreateLegacyInput
}

export type RootMutationTypeDeleteLegacyArgs = {
  id: Scalars["ID"]["input"]
}

export type RootQueryType = {
  __typename?: "RootQueryType"
  /** Get all legacies */
  legacies: Array<Legacy>
  /** Get all Sims */
  sims: Array<Sim>
  /** Get all traits */
  traits: Array<Trait>
}

export type RootQueryTypeTraitsArgs = {
  filter: InputMaybe<TraitFilter>
}

export type Sim = {
  __typename?: "Sim"
  avatarUrl: Maybe<Scalars["String"]["output"]>
  firstName: Scalars["String"]["output"]
  gender: Gender
  id: Scalars["ID"]["output"]
  lastName: Scalars["String"]["output"]
  legacy: Maybe<Legacy>
  name: Scalars["String"]["output"]
  parent1: Maybe<Sim>
  parent2: Maybe<Sim>
  spouse: Maybe<Sim>
  traits: Array<Trait>
}

export type Trait = {
  __typename?: "Trait"
  conflicts: Array<Maybe<Trait>>
  description: Maybe<Scalars["String"]["output"]>
  id: Scalars["ID"]["output"]
  imgUrl: Maybe<Scalars["String"]["output"]>
  lifeStages: Array<TraitLifeStage>
  name: Scalars["String"]["output"]
  type: TraitType
}

export type TraitFilter = {
  lifeStage: InputMaybe<TraitLifeStage>
  type: InputMaybe<TraitType>
}

export enum TraitLifeStage {
  Adult = "ADULT",
  Child = "CHILD",
  Infant = "INFANT",
  Teen = "TEEN",
  Toddler = "TODDLER",
}

export enum TraitType {
  Emotional = "EMOTIONAL",
  Hobby = "HOBBY",
  Infant = "INFANT",
  Lifestyle = "LIFESTYLE",
  Social = "SOCIAL",
  Toddler = "TODDLER",
}

/**
 * Validation messages are returned when mutation input does not meet the requirements.
 *   While client-side validation is highly recommended to provide the best User Experience,
 *   All inputs will always be validated server-side.
 *
 *   Some examples of validations are:
 *
 *   * Username must be at least 10 characters
 *   * Email field does not contain an email address
 *   * Birth Date is required
 *
 *   While GraphQL has support for required values, mutation data fields are always
 *   set to optional in our API. This allows 'required field' messages
 *   to be returned in the same manner as other validations. The only exceptions
 *   are id fields, which may be required to perform updates or deletes.
 */
export type ValidationMessage = {
  __typename?: "ValidationMessage"
  /** A unique error code for the type of validation used. */
  code: Scalars["String"]["output"]
  /**
   * The input field that the error applies to. The field can be used to
   * identify which field the error message should be displayed next to in the
   * presentation layer.
   *
   * If there are multiple errors to display for a field, multiple validation
   * messages will be in the result.
   *
   * This field may be null in cases where an error cannot be applied to a specific field.
   */
  field: Maybe<Scalars["String"]["output"]>
  /**
   * A friendly error message, appropriate for display to the end user.
   *
   * The message is interpolated to include the appropriate variables.
   *
   * Example: `Username must be at least 10 characters`
   *
   * This message may change without notice, so we do not recommend you match against the text.
   * Instead, use the *code* field for matching.
   */
  message: Maybe<Scalars["String"]["output"]>
  /** A list of substitutions to be applied to a validation message template */
  options: Maybe<Array<Maybe<ValidationOption>>>
  /**
   * A template used to generate the error message, with placeholders for option substiution.
   *
   * Example: `Username must be at least {count} characters`
   *
   * This message may change without notice, so we do not recommend you match against the text.
   * Instead, use the *code* field for matching.
   */
  template: Maybe<Scalars["String"]["output"]>
}

export type ValidationOption = {
  __typename?: "ValidationOption"
  /** The name of a variable to be subsituted in a validation message template */
  key: Scalars["String"]["output"]
  /** The value of a variable to be substituted in a validation message template */
  value: Scalars["String"]["output"]
}
