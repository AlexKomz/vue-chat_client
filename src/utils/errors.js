const errorFactory = (name, message) => {
  return { name, message };
};

export function ConnectionError(message) {
  return errorFactory(
    "ConnectionError",
    message ?? "Service connection error!"
  );
}

export function CompanionDisconnectionError(message) {
  return errorFactory(
    "CompanionDisconnectionError",
    message ?? "Companion was disconnected!"
  );
}
