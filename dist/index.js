"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  getRadiosByCountry: () => getRadiosByCountry,
  getRadiosByName: () => getRadiosByName,
  getRadiosByNameAndCountry: () => getRadiosByNameAndCountry
});
module.exports = __toCommonJS(src_exports);
var import_axios = __toESM(require("axios"));
var subscriptionKey = process.env.MYRADIOGLOBAL_SUBSCRIPTION_KEY;
var axiosClient = import_axios.default.create({
  baseURL: "https://api.myradioglobal.com",
  timeout: 15e3,
  headers: {
    "Ocp-Apim-Subscription-Key": subscriptionKey,
    "Content-Type": "application/json"
  }
});
function checkSubscriptionKey() {
  if (!subscriptionKey) {
    throw new Error("MYRADIOGLOBAL_SUBSCRIPTION_KEY environment variable is not set, please add it to your environment variables. If you don't have a subscription key, please visit https://www.npmjs.com/package/myradioglobal?activeTab=readme#:~:text=Create%20access%20request to request one.");
  }
}
function getRadiosByCountry(country, pageSize, offset) {
  return __async(this, null, function* () {
    checkSubscriptionKey();
    const url = `/getRadios?country=${country}&pageSize=${pageSize || ""}&offset=${offset || ""}`;
    try {
      const response = yield axiosClient.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  });
}
function getRadiosByName(name, pageSize, offset) {
  return __async(this, null, function* () {
    checkSubscriptionKey();
    const url = `/getRadios?textInput=${name}&pageSize=${pageSize || ""}&offset=${offset || ""}`;
    try {
      const response = yield axiosClient.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  });
}
function getRadiosByNameAndCountry(name, country, pageSize, offset) {
  return __async(this, null, function* () {
    checkSubscriptionKey();
    const url = `/getRadios?textInput=${name}&country=${country}&pageSize=${pageSize || ""}&offset=${offset || ""}`;
    try {
      const response = yield axiosClient.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getRadiosByCountry,
  getRadiosByName,
  getRadiosByNameAndCountry
});
//# sourceMappingURL=index.js.map