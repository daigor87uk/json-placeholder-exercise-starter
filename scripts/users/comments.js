function userComments(name, username, email, phone, address, website, company, id = null) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.address = new Address(address.street, address.city, address.suite, address.zipcode, new Geolatitude(address.geo.lat, address.geo.lng));;
    this.company = new Company(company['company-name'], company.bs, company['catch-phrase']);
    this.id = id;
}

const userCommentsHeaders = ['name', 'username', 'email', 'phone', 'website', 'address', 'company'];