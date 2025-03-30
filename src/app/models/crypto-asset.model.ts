export class CryptoAsset {

  constructor(name: string) {
    this.name = name;
    this.icon = `img/icons/${name.toLowerCase()}-icon.svg`;
  }

  name: string;
  icon: string;
}
