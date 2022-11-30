import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Fridges" },
      { id: 2, name: "Phones" },
      { id: 3, name: "Notbooks" },
      { id: 4, name: "TVs" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Samsung" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
    ];
    this._devices = [
      { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "" },
      { id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: "" },
      { id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: "" },
      { id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: "" },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }
  setBrans(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
