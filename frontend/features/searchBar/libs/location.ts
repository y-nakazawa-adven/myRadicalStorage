type locationValue = {
  location: string
  address: string
}
export class LocationValue {
  private location: string = ''
  private address: string = ''

  constructor({ location, address }: locationValue) {
    this.location = location
    this.address = address
  }
  set Value({ location, address }: locationValue) {
    this.location = location
    this.address = address
  }
  get Format(): string {
    if (this.location === '') {
      return ''
    }
    if (this.address === '') {
      return this.location
    }
    return `${this.location} - ${this.address}`
  }
}
