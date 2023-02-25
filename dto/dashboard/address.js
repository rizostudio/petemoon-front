export const domainAddress = (apiAddress) => {
  return {
    province: apiAddress.province,
    city: apiAddress.city,
    postalCode: apiAddress.postal_code,
    postalAddress: apiAddress.postal_address,
    latitude: apiAddress.lat,
    longitude: apiAddress.lon,
    transferee: apiAddress.receiver,
    id: apiAddress.id,
  };
};

export const apiAddress = (domainAddress) => {
  return {
    city: domainAddress.city,
    province: domainAddress.province,
    postal_code: domainAddress.postalCode,
    postal_address: domainAddress.postalAddress,
    receiver: domainAddress.transferee,
    lat: "",
    log: "",
  };
};

export const domainAddresses = (apiAddresses) => {
  const domainData = apiAddresses.map((apiAddress) =>
    domainAddress(apiAddress)
  );
  return domainData;
};
