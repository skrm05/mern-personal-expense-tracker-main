export function fail(message = "An error occurred", statusCode = 500) {
  return { status: "error", data: null, errors: [{ message, statusCode }] };
}
