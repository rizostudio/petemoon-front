export const addListQueryArg = (query, key, value) => {
  const queryParams = new URLSearchParams(query);
  if (queryParams.has(key)) {
    const prevValue = queryParams.get(key);
    queryParams.set(key, decodeURIComponent(`${prevValue},${value}`));
    console.log(queryParams.values);
  } else {
    queryParams.set(key, value);
    console.log(queryParams.values);
  }
  return queryParams.toString();
};
export const removeListQueryArg = (query, key, value) => {
  const queryParams = new URLSearchParams(query);
  if (queryParams.has(key)) {
    const newValue = queryParams
      .get(key)
      .split(",")
      .filter((currentValue) => currentValue != value);
    if (newValue.length > 0) {
      console.log(queryParams.values);
      queryParams.set(key, decodeURIComponent(`${newValue}`));
    } else {
      queryParams.delete(key);
      console.log(queryParams.values);
    }
  }
  return queryParams.toString();
};
export const addQueryArg = (query, key, value) => {
  const queryParams = new URLSearchParams(query);
  if (queryParams.has(key)) {
    const prevValue = queryParams.get(key);
    queryParams.set(key, decodeURIComponent(`${value}`));
    console.log(queryParams.values);
  } else {
    queryParams.set(key, value);
    console.log(queryParams.values);
  }
  return queryParams.toString();
};
