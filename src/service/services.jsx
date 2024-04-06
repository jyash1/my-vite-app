export const saveSession = (data) => {
  sessionStorage.setItem("Authorization", data.authtoken);
  sessionStorage.setItem("id", data.id);
  sessionStorage.setItem("setPassword", data.setPassword);
};

export const getSession = () => {
  return {
    Authorization: sessionStorage.getItem("Authorization"),
    user_id: sessionStorage.getItem("id"),
    setPassword: sessionStorage.getItem("setPassword"),
  };
};

export const clearSession = () => {
  sessionStorage.clear();
};

export const setFcmToken = (item) => {
  sessionStorage.setItem("fcm_token", item);
};

export const getFcmToken = () => {
  return sessionStorage.getItem("fcm_token");
};

export const generateRandomPassword = (length = 8) => {
  var result = "";
  var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charLength = char.length;
  for (var i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
};

export const prepareFormData = (data) => {
  const formData = new FormData();

  // Append each key-value pair from the 'data' object
  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        // If the value is an array (containing files), append each file
        value.forEach((file, index) => {
          formData.append(`${key}[${index}]`, file);
        });
      } else {
        // For non-array values, directly append to FormData
        formData.append(key, value);
      }
    } else {
      // Handle empty or undefined values
      formData.append(key, ""); // Set to an empty string or any desired default value
    }
  });

  return formData;
};
