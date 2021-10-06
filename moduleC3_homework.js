class parentDevice {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class childDevice extends parentDevice {
  constructor(name, type, powerconsumption, enabled_disabled) {
    super(type);
    super(name);
    this.powerconsumption = powerconsumption;
    this.enabled_disabled = enabled_disabled;
    this.ison = function () {
      if (enabled_disabled == "enabled") {
        console.log(
          `${name} is ${type} device and it is enabled. Be CAREFULL!!!!The power consumption of ${name} is ${powerconsumption} `
        );
      } else {
        console.log(
          `${name} is ${type} device and it is is disabled. The power consumption of ${name} is ${powerconsumption}`
        );
      }
    };
  }
}

const lamp = new childDevice("lamp", "electric", 80, "enabled");
const iron = new childDevice("iron", "electric", 90, "disabled");

console.log(lamp);
console.log(iron);

iron.ison();
lamp.ison();
