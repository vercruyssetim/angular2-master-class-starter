import {Contact} from "./contact";

export class ContactBuilder {
  private id: number;
  private name: string;
  private email: string;
  private phone: string;
  private birthday: string;
  private website: string;
  private image: string;
  private street: string;
  private city: string;
  private zip: string;
  private country: string;
  private views?: number = 0;

  private constructor() {

  }

  static aContactBuilder(): ContactBuilder {
    return new ContactBuilder();
  }

  build(): Contact {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      birthday: this.birthday,
      website: this.website,
      image: this.image,
      views: this.views,
      address: {
        street: this.street,
        city: this.city,
        zip: this.zip,
        country: this.country
      }
    };
  }


  withId(value: number) {
    this.id = value;
    return this;
  }

  withName(value: string) {
    this.name = value;
    return this;
  }

  withEmail(value: string) {
    this.email = value;
    return this;
  }

  withPhone(value: string) {
    this.phone = value;
    return this;
  }

  withBirthday(value: string) {
    this.birthday = value;
    return this;
  }

  withWebsite(value: string) {
    this.website = value;
    return this;
  }

  withImage(value: string) {
    this.image = value;
    return this;
  }

  withViews(value: number) {
    this.views = value;
    return this;
  }


  withStreet(value: string) {
    this.street = value;
    return this;
  }

  withCity(value: string) {
    this.city = value;
    return this;
  }

  withZip(value: string) {
    this.zip = value;
    return this;
  }

  withCountry(value: string) {
    this.country = value;
    return this;
  }
}
