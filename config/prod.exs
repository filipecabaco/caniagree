use Mix.Config


config :caniagree, CaniagreeWeb.Endpoint,
  secret_key_base: System.get_env("SECRET_KEY_BASE"),
  load_from_system_env: true,
  url: [scheme: "https", host: "mysterious-meadow-6277.herokuapp.com", port: 443],
  force_ssl: [rewrite_on: [:x_forwarded_proto]],
  cache_static_manifest: "priv/static/cache_manifest.json"

config :caniagree, Caniagree.Repo,
  adapter: Ecto.Adapters.Postgres,
  url: System.get_env("DATABASE_URL"),
  pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10"),
  ssl: true

config :logger, level: :info
