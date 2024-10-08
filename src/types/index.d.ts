export interface ValidatinProps {
  email?: string;
  dob?: string;
  username?: string;
  phone?: string;
  fullname?: string;
  follow?: string;
  followRange?: string;
  followUsername?: string;
  country?: string;
}

export interface FormDataProps {
  dob: string;
  phone: string;
  email: string;
  username: string;
  displayName: string;
  fullname: string;
  country: string;
  follow: string;
  followUsername: string;
  followRange: string;
  textareaValue: string;
  selected: number | null;
  referralCode: string;
  type: number,
  balance: string
  isAnonymous: boolean | null
}

type UserType = {
  type?: number;
  email: string;
  fullname: string;
  photo?: Id<'_storage'>;
  balance?: string;
  creationTime: number;
};

export interface UserTableType extends UserType {
  _id: Id<'talents'>;
  _creationTime: number;
}

export type RequestType = {
  userId: Id<'talents'>;
  kind: number;
  survey?: string;
  asset?: string;
  assetOther?: string;
  ALTAoptions: string[];
  propertyAddress: string;
  countyAccountInfo?: string;
  siteContactInfoName: string;
  siteContactInfoPhone: string;
  siteContactInfoEmail: string;
  turnaroundTime: string;
  specificDate: string;
  additionalInfo: InfoType[];
  otherSurvey: string;
  uploadCommits: string[];
  uploadSurveys: string[];
  uploadOthers: string[];
  receivedBids: Id<'bids'>[];
  receivedUsers: Id<'users'>[];
  requestUser: UserType;
  status: string;
  requestUser?: {
    fullname: string;
    email: string,
    creationTime: number;
  }
};

export interface RequestTableType extends RequestType {
  _id: Id<'requests'>;
  _creationTime: number;
  getCommitUrl?: URL;
  getSurveyUrl?: URL;
  getOtherUrl?: URL;
}

export type BidType = {
  _id: Id<'bids'>;
  _creationTime: number;
  amount: number;
  unit: string;
  status: string;
  clientId: Id<'users'>;
  client: UserType;
  vendorId: Id<'users'>;
  vendor: UserType;
  requestId: Id<'requests'>;
  request: RequestTableType;
  workId?: Id<'_storage'>;
};

export type KPIType = {
  title: string;
  img: string;
  imgAlt: string;
  length: string;
  lists: { label: string; value?: number }[];
  link?: string;
};
