declare global {
  interface Window {
    environment?: Record<string, any>
  }
}

function getConfigOption(name: string, defaultValue?: string) {
  const value = process.env[name]

  if (value !== undefined) {
    return value
  }
  if (defaultValue !== undefined && typeof defaultValue === "string") {
    return defaultValue
  }
  throw new Error(`Missing configuration ${name}`)
}

function isEnvVarTrue(str: string) {
  return str === "1" || str === "true" || str === "enabled"
}

export const config = {
  api: {
    endpoint: getConfigOption("API_ENDPOINT"),
  },
}
