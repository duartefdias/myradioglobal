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
import axios from "axios";
var subscriptionKey = process.env.MYRADIOGLOBAL_SUBSCRIPTION_KEY;
var axiosClient = axios.create({
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
export {
  getRadiosByCountry,
  getRadiosByName,
  getRadiosByNameAndCountry
};
//# sourceMappingURL=index.mjs.map