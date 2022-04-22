export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: companyType;
};

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

type GeoType = {
  lat: string;
  lng: string;
};

type companyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};
